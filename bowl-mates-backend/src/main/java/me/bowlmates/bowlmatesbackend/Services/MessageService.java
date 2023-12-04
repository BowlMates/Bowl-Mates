package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;
import me.bowlmates.bowlmatesbackend.Models.MessageDTO;
import me.bowlmates.bowlmatesbackend.Models.TestMessage;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
import me.bowlmates.bowlmatesbackend.Repositories.MessageRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.*;

// TODO: Implement
@Service
@Transactional
public class MessageService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    MessageRepo messageRepo;

    public List<MessageDTO> getMessages(int matchId) {
        Set<TestMessage> messages = messageRepo.findByMatchId(matchId);
        List<MessageDTO> messageList = new ArrayList<>();
        for (TestMessage message : messages) {
            messageList.add(message.toMessageDTO());
        }
        messageList.sort(Comparator.comparing((MessageDTO::getDate)));
        return messageList;
    }

    public void sendMessage(MessageDTO messageDTO) {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            throw new NoSuchElementException("User not authenticated");
        }
        TestUser user = userRepo.findByUsername(username);
        TestMessage message = new TestMessage();
        message.setMatchId(messageDTO.getMatchId());
        message.setDate(Instant.now().toEpochMilli());
        message.setChatterId(user.getId());
        message.setMessage(messageDTO.getMessage());
        messageRepo.save(message);
    }

}
