package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;
import me.bowlmates.bowlmatesbackend.Models.Message;
import me.bowlmates.bowlmatesbackend.DataTransferObjects.MessageDTO;
import me.bowlmates.bowlmatesbackend.Models.User;
import me.bowlmates.bowlmatesbackend.Repositories.MessageRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.*;

/**
 * Service used to handle messaging
 */
@Service
@Transactional
public class MessageService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    MessageRepo messageRepo;

    /**
     * Gets all messages in a specific conversation
     *
     * @param matchId identifier for a pair of matched users
     * @return Conversation as a list of messages
     */
    public List<MessageDTO> getMessages(int matchId) {
        Set<Message> messages = messageRepo.findByMatchId(matchId);
        List<MessageDTO> messageList = new ArrayList<>();
        if (messages.isEmpty()) {
            return messageList;
        }
        for (Message message : messages) {
            messageList.add(message.toMessageDTO());
        }
        messageList.sort(Comparator.comparing((MessageDTO::getDate)));
        return messageList;
    }

    /**
     * Updates conversation with new message
     *
     * @param messageDTO Data Transfer Object with message data to add to database
     */
    public void sendMessage(MessageDTO messageDTO) {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            throw new NoSuchElementException("User not authenticated");
        }
        User user = userRepo.findByUsername(username);
        Message message = new Message();
        message.setMatchId(messageDTO.getMatchId());
        message.setDate(Instant.now().toEpochMilli());
        message.setChatterId(user.getId());
        message.setMessage(messageDTO.getMessage());
        messageRepo.save(message);
    }

}
