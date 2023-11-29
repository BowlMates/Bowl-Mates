package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.TestMessage;
import org.springframework.data.jpa.repository.JpaRepository;

// TODO: Documentation
public interface MessageRepo extends JpaRepository<TestMessage, Integer> {

    TestMessage findById(int id);
}
