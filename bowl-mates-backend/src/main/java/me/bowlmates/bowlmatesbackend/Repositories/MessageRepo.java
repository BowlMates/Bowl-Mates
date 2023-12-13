package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

/**
 * An interface to access messages from the database
 */
public interface MessageRepo extends JpaRepository<Message, Integer> {

    /**
     * Finds a message in the database based on its id
     *
     * @param id id of message object
     * @return TestMessage with id
     */
    Message findById(int id);

    /**
     * Gets a conversation based on match id
     *
     * @param matchId matchId representing pair of users
     * @return Set of TestMessage comprising a conversation
     */
    Set<Message> findByMatchId(int matchId);
}
