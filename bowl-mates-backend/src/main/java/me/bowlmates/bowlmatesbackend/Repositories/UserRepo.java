package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.TestUser;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * An interface to access user data from a database
 */
public interface UserRepo extends JpaRepository<TestUser, Integer> {

    /**
     * finds a user in a database based on their email
     *
     * @param email the email to be queried
     * @return the information of the queried user
     */
    TestUser findByEmail(String email);

    /**
     * finds a user in a database based on their username
     *
     * @param username the username to be queried
     * @return the information of the queried user
     */
    TestUser findByUsername(String username);
}
