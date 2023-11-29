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

import java.util.ArrayList;
import java.util.List;

// TODO: Implement
@Service
@Transactional
public class MessageService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    MessageRepo messageRepo;

    public List<TestMessage> getMessages() {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return new ArrayList<>();
        }
        TestUser user = userRepo.findByUsername(username);
    }

    public void sendMessage(MessageDTO messageDTO) {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return;
        }
        TestUser user = userRepo.findByUsername(username);
    }
}
