package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;
import me.bowlmates.bowlmatesbackend.Models.QueueNode;
import me.bowlmates.bowlmatesbackend.Models.Availability;
import me.bowlmates.bowlmatesbackend.Models.Restaurant;
import me.bowlmates.bowlmatesbackend.Models.User;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

@Service
@Transactional
public class MatchingAlgorithm {
    @Autowired
    private UserRepo userRepository;

    /**
     * runs the matching algorithm for the current user and populates their potential matches queue
     *
     * @return true if the algorithm is successful otherwise false
     */
    public boolean QueueUp() {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return false;
        }
        User user = userRepository.findByUsername(username);
        Map<Integer, Integer> matches = new HashMap<>();
        Set<Availability> avails = user.getAvailability();
        List<User> allUsers = userRepository.findAll();
        Set<User> approvals = user.getApprovals();
        for (User prevApprove : approvals) {
            allUsers.remove(prevApprove);
        }
        Set<User> rejects = user.getRejects();
        for (User prevRej : rejects) {
            allUsers.remove(prevRej);
        }
        Set<User> oldMatches = user.getMatches();
        for (User match : oldMatches) {
            allUsers.remove(match);
        }
        for (User other : allUsers) {
            if (other.getId() != user.getId()) {
                Set<Availability> otherAvails = other.getAvailability();
                for (Availability avail : avails) {
                    if (otherAvails.contains(avail)) {
                        if (!matches.containsKey(other.getId())) {
                            matches.put(other.getId(), 5);
                        } else {
                            int value = matches.get(other.getId());
                            matches.replace(other.getId(), value += 5);
                        }
                    }
                }
            }
        }
        for (Integer otherUserId : matches.keySet()) {
            User otherUser = userRepository.findById(otherUserId).get();
            Set<Restaurant> otherRestaurants = otherUser.getFavoriteRestaurants();
            for (Restaurant ourRest : user.getFavoriteRestaurants()) {
                if (otherRestaurants.contains(ourRest)) {
                    Integer value = matches.get(otherUserId);
                    matches.replace(otherUserId, value += 5);
                }
            }
        }
        if (!matches.isEmpty()) {
            PriorityQueue<QueueNode> queue = new PriorityQueue<>();
            int count = 0;
            for (Integer key : matches.keySet()) {
                Integer value = matches.get(key);
                QueueNode matchRating = new QueueNode(key, value);
                queue.add(matchRating);
                count++;
                if (count >= 30) {
                    break;
                }
            }
            try {
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                ObjectOutputStream objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
                objectOutputStream.writeObject(queue);
                objectOutputStream.close();
                byte[] serializedQueue = byteArrayOutputStream.toByteArray();
                user.setSerializedQueue(serializedQueue);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return true;
    }

    /**
     * displays the potential matches queue of the user
     *
     * @return the potential matches queue of the user
     */
    public List<Integer> showQueue() {
        String username = "";
        List<Integer> list = new ArrayList<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return list;
        }
        User user = userRepository.findByUsername(username);
        byte[] queue = user.getSerializedQueue();
        try {
            ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(queue);
            ObjectInputStream objectInputStream = new ObjectInputStream(byteArrayInputStream);
            PriorityQueue<QueueNode> deserializedQueue = (PriorityQueue<QueueNode>) objectInputStream.readObject();
            objectInputStream.close();

            while (!deserializedQueue.isEmpty()) {
                list.add(deserializedQueue.remove().getKey());
            }
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return list;
    }

    /**
     * adds another user to the approved list of the current user or to the matching list
     * if the other user has the current user in their approved list
     *
     * @param userId the other user to be approved
     * @return the new potential matches queue minus the most recent approved user
     */
    public List<Integer> approve(int userId) {
        String username = "";
        List<Integer> list = new ArrayList<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return list;
        }
        User user = userRepository.findByUsername(username);
        User approved = userRepository.findById(userId).get();
        Set<User> othersApprovals = approved.getApprovals();
        if (othersApprovals.contains(user)) {
            othersApprovals.remove(user);
            Set<User> currMatches = user.getMatches();
            Set<User> approvedsMatches = approved.getMatches();
            currMatches.add(approved);
            approvedsMatches.add(user);
            user.setMatches(currMatches);
            approved.setMatches(approvedsMatches);
        } else {
            Set<User> updatedApprovals = user.getApprovals();
            updatedApprovals.add(approved);
            user.setApprovals(updatedApprovals);
        }
        next();
        return showQueue();
    }

    /**
     * adds another user to the rejection list of the current user
     *
     * @param userId the other user to be denied
     * @return the updated potential matching queue of the current user
     */
    public List<Integer> deny(int userId) {
        String username = "";
        List<Integer> list = new ArrayList<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return list;
        }
        User user = userRepository.findByUsername(username);
        User denied = userRepository.findById(userId).get();
        Set<User> updatedDenials = user.getRejects();
        updatedDenials.add(denied);
        user.setRejects(updatedDenials);
        next();
        return showQueue();
    }

    /**
     * a pop method for the queue that also handles the serialization steps
     */
    private void next() {
        String username = "";
        List<Integer> list = new ArrayList<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        }
        User user = userRepository.findByUsername(username);
        byte[] queue = user.getSerializedQueue();
        try {
            ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(queue);
            ObjectInputStream objectInputStream = new ObjectInputStream(byteArrayInputStream);
            PriorityQueue<QueueNode> deserializedQueue = (PriorityQueue<QueueNode>) objectInputStream.readObject();
            objectInputStream.close();
            deserializedQueue.remove();
            try {
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                ObjectOutputStream objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
                objectOutputStream.writeObject(deserializedQueue);
                objectOutputStream.close();
                byte[] serializedQueue = byteArrayOutputStream.toByteArray();
                user.setSerializedQueue(serializedQueue);
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void unmatch(Integer userId) {
        String username = "";
        List<Integer> list = new ArrayList<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return;
        }
        User user = userRepository.findByUsername(username);
        User denied = userRepository.findById(userId).get();
        user.getMatches().remove(denied);
        denied.getMatches().remove(user);
    }


}
