package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.TestProfile;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
import org.springframework.data.jpa.repository.JpaRepository;

// TODO: Documentation
public interface ProfileRepo extends JpaRepository<TestProfile, Integer> {

    TestProfile findById(int id);
}
