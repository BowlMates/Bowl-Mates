package me.bowlmates.bowlmatesbackend.Services;

import me.bowlmates.bowlmatesbackend.Models.User;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * a service used to identify user details
 */
@Service
public class TestUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepo userRepository;

    /**
     * Loads all the user details based on their username
     * @param username the username identifying the user whose data is required.
     * @return the user with the associated username
     * @throws UsernameNotFoundException if there is no user with the given name
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return user;
    }
}

