package me.bowlmates.bowlmatesbackend.Controllers;

import me.bowlmates.bowlmatesbackend.DataTransferObjects.MatchDTO;
import me.bowlmates.bowlmatesbackend.DataTransferObjects.MessageDTO;
import me.bowlmates.bowlmatesbackend.Models.Message;
import me.bowlmates.bowlmatesbackend.Models.Profile;
import me.bowlmates.bowlmatesbackend.Models.User;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import me.bowlmates.bowlmatesbackend.Services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * REST Controller for message HTTP requests
 */
@RestController
@RequestMapping(path="/user")
public class MessageController {

    @Autowired
    UserRepo userRepository;
    @Autowired
    MessageService messageService;

    /**
     * Provides the frontend with a users conversations
     *
     * @param matchIds List of matchIds for user's matches
     * @return List of conversations, which are lists of messages
     */
    @PostMapping("/message")
    public List<List<MessageDTO>> getMessages(@RequestBody List<Integer> matchIds) {
        List<List<MessageDTO>> messages = new ArrayList<>();
        for (int matchId : matchIds) {
            List<MessageDTO> messageDTOS = messageService.getMessages(matchId);
            if (!messageDTOS.isEmpty()) {
                messages.add(messageDTOS);
            }
        }
        if(!messages.isEmpty()){
            messages.sort(Comparator.comparing(l -> l.get(0).getDate()));
        }
        return messages;
    }

    /**
     * Records sent message from frontend
     *
     * @param messageDTO Data Transfer Object of message to be sent
     */
    @PostMapping("/message/send")
    public void sendMessage(@RequestBody MessageDTO messageDTO) {
        messageService.sendMessage(messageDTO);
    }

    /**
     * Provides frontend with profile info of matches and matchIds
     *
     * @return a list of Match Data Transfer Objects containing matchId and profile info
     */
    @GetMapping("/matches")
    public List<MatchDTO> getMatchHashes() {
        String username = "";
        Authentication auth = SecurityContextHolder
                .getContext()
                .getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        }
        User user = userRepository.findByUsername(username);
        List<MatchDTO> matchDTOList = new ArrayList<>();
        for (User match : user.getMatches()) {
            int matchHash = Message.matchHash(user.getId(), match.getId());
            Profile matchProfile = match.getProfile();
            MatchDTO matchDTO = new MatchDTO(matchHash,
                    matchProfile.getFirstName(),
                    matchProfile.getLastName(),
                    matchProfile.getPronouns(),
                    matchProfile.getPhoto());
            matchDTOList.add(matchDTO);
        }
        return matchDTOList;
    }
}
