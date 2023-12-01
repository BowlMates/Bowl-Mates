package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.TestMessage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

// TODO: Documentation
public interface MessageRepo extends JpaRepository<TestMessage, Integer> {

    TestMessage findById(int id);

    Set<TestMessage> findByMatchId(int matchId);
}
