package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;
import me.bowlmates.bowlmatesbackend.Models.QueueNode;
import me.bowlmates.bowlmatesbackend.Models.TestAvailability;
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


}
