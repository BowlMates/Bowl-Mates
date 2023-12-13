package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Interface for accessing profile data in the database
 */
public interface ProfileRepo extends JpaRepository<Profile, Integer> {

    /**
     * Returns a profile with the provided id
     *
     * @param id identifier for profile
     * @return Profile with id
     */
    Profile findById(int id);
}
