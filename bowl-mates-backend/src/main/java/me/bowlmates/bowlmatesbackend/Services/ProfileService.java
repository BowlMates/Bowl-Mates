package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;
import me.bowlmates.bowlmatesbackend.Models.ProfileDTO;
import me.bowlmates.bowlmatesbackend.Models.TestProfile;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
import me.bowlmates.bowlmatesbackend.Repositories.ProfileRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

// TODO: Implement Profile Service
@Service
@Transactional
public class ProfileService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    ProfileRepo profileRepo;

    public void updateProfile(ProfileDTO profileDTO) throws Exception {
        TestProfile profile = this.getProfile();
        profile.updateFromDTO(profileDTO);
    }

    public TestProfile getProfile() throws Exception {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            throw new NoSuchElementException("User not authenticated");
        }
        TestUser user = userRepo.findByUsername(username);
        TestProfile profile;
        Optional<TestProfile> repoProfile = profileRepo.findById(user.getId());
        if (repoProfile.isEmpty()) {
            profile = new TestProfile(user, user.getName());
            profileRepo.save(profile);
            user.setProfile(profile);
        } else {
            profile = repoProfile.get();
        }
        return profile;
    }

    public ProfileDTO getProfileFromUser(TestUser user) {
        Optional<TestProfile> repoProfile = profileRepo.findById(user.getId());
        if (repoProfile.isEmpty()) {
            throw new NoSuchElementException("Unable to find user profile");
        }
        return repoProfile.get().getDTO();
    }
}
