package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.TestProfile;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Interface for accessing profile data in the database
 */
public interface ProfileRepo extends JpaRepository<TestProfile, Integer> {

    /**
     * Returns a profile with the provided id
     *
     * @param id identifier for profile
     * @return Profile with id
     */
    TestProfile findById(int id);
}
