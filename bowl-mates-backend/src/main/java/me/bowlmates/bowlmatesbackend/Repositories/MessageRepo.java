package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.TestMessage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

/**
 * An interface to access messages from the database
 */
public interface MessageRepo extends JpaRepository<TestMessage, Integer> {

    /**
     * Finds a message in the database based on its id
     *
     * @param id id of message object
     * @return TestMessage with id
     */
    TestMessage findById(int id);

    /**
     * Gets a conversation based on match id
     *
     * @param matchId matchId representing pair of users
     * @return Set of TestMessage comprising a conversation
     */
    Set<TestMessage> findByMatchId(int matchId);
}
