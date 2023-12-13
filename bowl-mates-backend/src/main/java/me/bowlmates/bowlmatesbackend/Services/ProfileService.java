package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;
import me.bowlmates.bowlmatesbackend.Models.Profile;
import me.bowlmates.bowlmatesbackend.Models.ProfileDTO;
import me.bowlmates.bowlmatesbackend.Models.User;
import me.bowlmates.bowlmatesbackend.Repositories.ProfileRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

/**
 * Service used to access user profile info
 */
@Service
@Transactional
public class ProfileService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    ProfileRepo profileRepo;

    /**
     * Updates user profile fields to DTO fields
     *
     * @param profileDTO Data Transfer Object with new profile info
     * @throws Exception in case of user auth errors
     */
    public void updateProfile(ProfileDTO profileDTO) throws Exception {
        Profile profile = this.getProfile();
        profile.updateFromDTO(profileDTO);
    }

    /**
     * Gets profile of user
     *
     * @return user profile object linked to database
     * @throws Exception in case of user auth errors
     */
    public Profile getProfile() throws Exception {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            throw new NoSuchElementException("User not authenticated");
        }
        User user = userRepo.findByUsername(username);

        return user.getProfile();
    }
}
