package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.User;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * An interface to access user data from a database
 */
public interface UserRepo extends JpaRepository<User, Integer> {

    /**
     * finds a user in a database based on their email
     *
     * @param email the email to be queried
     * @return the information of the queried user
     */
    User findByEmail(String email);

    /**
     * finds a user in a database based on their username
     *
     * @param username the username to be queried
     * @return the information of the queried user
     */
    User findByUsername(String username);
}
