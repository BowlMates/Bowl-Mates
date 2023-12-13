package me.bowlmates.bowlmatesbackend.Controllers;

import me.bowlmates.bowlmatesbackend.Services.MatchingAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for handling matching
 */
@RestController
@RequestMapping(path="/user")
public class MatchingController {

    @Autowired
    MatchingAlgorithm matchingAlgorithm;

    /**
     * updates the users matching queue
     */
    @GetMapping("/match")
    public void runMatches() {
        matchingAlgorithm.QueueUp();
    }

    /**
     * returns a list of the users potential matches based on their ranking
     * from the matching algorithm
     *
     * @return an ordered list of integers representing user ids (ordered by matching potential)
     */
    @GetMapping(value = "/match/show", produces = "application/json")
    public List<Integer> showMatches() {
        return matchingAlgorithm.showQueue();
    }

    /**
     * used when a user approves another user
     *
     * @param userId the other user to be approved
     * @return an updated list of the matching queue minus the most recent approved user
     */
    @PostMapping("/match/approve")
    public List<Integer> approve(@RequestBody Integer userId) {
        return matchingAlgorithm.approve(userId);
    }

    /**
     * used when a user rejects another user
     *
     * @param userId the other user to be rejected
     * @return an updated list of the matching queue minus the most recent rejected user
     */
    @PostMapping("/match/reject")
    public List<Integer> reject(@RequestBody Integer userId) {
        return matchingAlgorithm.deny(userId);
    }

    /**
     * Used when a user wants a match removed from their matches
     *
     * @param userId id of user to unmatch
     */
    @PostMapping("/unmatch")
    public void unmatch(@RequestBody Integer userId) {
        matchingAlgorithm.unmatch(userId);
    }
}
