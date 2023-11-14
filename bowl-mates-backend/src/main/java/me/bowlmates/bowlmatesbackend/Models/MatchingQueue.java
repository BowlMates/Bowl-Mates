package me.bowlmates.bowlmatesbackend.Models;

/**
 * Object to arrange potential matches for each user
 */
public class MatchingQueue {
    private String userId;

    /**
     * Constructor
     *
     * @param userId Id of user who the queue belongs to
     */
    public MatchingQueue(String userId) {
        this.userId = userId;
    }
}
