package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;
import me.bowlmates.bowlmatesbackend.Models.QueueNode;
import me.bowlmates.bowlmatesbackend.Models.TestAvailability;
import me.bowlmates.bowlmatesbackend.Models.TestRestaurant;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
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

    public boolean QueueUp() {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return false;
        }
        TestUser user = userRepository.findByUsername(username);
        Map<Integer, Integer> matches = new HashMap<>();
        Set<TestAvailability> avails = user.getAvailability();
        List<TestUser> allUsers = userRepository.findAll();
        Set<TestUser> approvals = user.getApprovals();
        for (TestUser prevApprove : approvals) {
            allUsers.remove(prevApprove);
        }
        Set<TestUser> rejects = user.getRejects();
        for (TestUser prevRej : rejects) {
            allUsers.remove(prevRej);
        }
        Set<TestUser> oldMatches = user.getMatches();
        for (TestUser match : oldMatches) {
            allUsers.remove(match);
        }
        for (TestUser other : allUsers) {
            if (other.getId() != user.getId()) {
                Set<TestAvailability> otherAvails = other.getAvailability();
                for (TestAvailability avail : avails) {
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
            TestUser otherUser = userRepository.findById(otherUserId).get();
            Set<TestRestaurant> otherRestaurants = otherUser.getFavoriteRestaurants();
            for (TestRestaurant ourRest : user.getFavoriteRestaurants()) {
                if (otherRestaurants.contains(ourRest)) {
                    Integer value = matches.get(otherUserId);
                    matches.replace(otherUserId, value += 5);
                }
            }
        }
        if (!matches.isEmpty()) {
            PriorityQueue<QueueNode> queue = new PriorityQueue<>();
            for (Integer key : matches.keySet()) {
                Integer value = matches.get(key);
                QueueNode matchRating = new QueueNode(key, value);
                queue.add(matchRating);
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

    public List<Integer> showQueue() {
        String username = "";
        List<Integer> list = new ArrayList<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return list;
        }
        TestUser user = userRepository.findByUsername(username);
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

    public List<Integer> approve(int userId) {
        String username = "";
        List<Integer> list = new ArrayList<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return list;
        }
        TestUser user = userRepository.findByUsername(username);
        TestUser approved = userRepository.findById(userId).get();
        Set<TestUser> othersApprovals = approved.getApprovals();
        System.out.println(othersApprovals.toString());
        if (othersApprovals.contains(user)) {
            Set<TestUser> currMatches = user.getMatches();
            Set<TestUser> approvedsMatches = approved.getMatches();
            currMatches.add(approved);
            approvedsMatches.add(user);
            user.setMatches(currMatches);
            approved.setMatches(approvedsMatches);
        } else {
            Set<TestUser> updatedApprovals = user.getApprovals();
            updatedApprovals.add(approved);
            user.setApprovals(updatedApprovals);
        }
        next();
        return showQueue();
    }

    public List<Integer> deny(int userId) {
        String username = "";
        List<Integer> list = new ArrayList<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return list;
        }
        TestUser user = userRepository.findByUsername(username);
        TestUser denied = userRepository.findById(userId).get();
        Set<TestUser> updatedDenials = user.getRejects();
        updatedDenials.add(denied);
        user.setRejects(updatedDenials);
        next();
        return showQueue();
    }

    public void next() {
        String username = "";
        List<Integer> list = new ArrayList<>();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        }
        TestUser user = userRepository.findByUsername(username);
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


}
