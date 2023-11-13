package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.TestAvailability;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvailRepo extends JpaRepository<TestAvailability, Integer> {
    TestAvailability findByHash(Integer hash);
}
