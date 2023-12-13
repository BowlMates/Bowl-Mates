package me.bowlmates.bowlmatesbackend.Services;

import java.util.HashSet;
import java.util.Set;

import me.bowlmates.bowlmatesbackend.Models.*;
import me.bowlmates.bowlmatesbackend.Repositories.RoleRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * A service used to handled user logins and registration
 */
@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private RoleRepo roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    /**
     * Registers a new user
     *
     * @param firstName a string representing the first name of the user
     * @param lastName a string represtenting the last name of the user
     * @param username a string representing the username of the user
     * @param password a string representing the password of the user
     * @param email a string representing the email of the user
     * @return a {@link User} that was registered
     */
    public ProfileDTO registerUser(String firstName,
                                   String lastName,
                                   String username,
                                   String password,
                                   String email) {

        String encodedPassword = passwordEncoder.encode(password);
        Role userRole = roleRepository.findByAuthority("USER").get();
        Set<Role> authorities = new HashSet<>();
        authorities.add(userRole);
        User user = new User(0, username, encodedPassword,
                email, authorities, new HashSet<>(), new HashSet<>(), new HashSet<>(), new HashSet<>(), new byte[0]);
        Profile profile = new Profile(user, firstName, lastName);
        user.setProfile(profile);
        userRepository.save(user);
        ProfileDTO profileDTO = new ProfileDTO(profile.getFirstName(), profile.getLastName(), profile.getPronouns(),
                profile.getBio(), profile.getPhoto());
        return profileDTO;
    }

    /**
     * Logs a user in
     *
     * @param username a string representing the user's username
     * @param password a string representing the user's password
     * @return a {@link LoginResponseDTO} representing the logged-in user
     */
    public LoginResponseDTO loginUser(String username, String password) {

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );
            String token = tokenService.generateJwt(auth);
            return new LoginResponseDTO(userRepository.findByUsername(username), token);

        } catch (AuthenticationException e) {
            return new LoginResponseDTO(null, "");
        }
    }
}
