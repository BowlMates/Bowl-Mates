package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;

import me.bowlmates.bowlmatesbackend.Models.Availability;
import me.bowlmates.bowlmatesbackend.Models.AvailabilityDTO;
import me.bowlmates.bowlmatesbackend.Models.User;
import me.bowlmates.bowlmatesbackend.Repositories.AvailRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Service used to add availability to a user's profile
 */
@Service
@Transactional
public class AvailabilityService {

    @Autowired
    private UserRepo userRepository;
    @Autowired
    private AvailRepo availRepository;

    /**
     * Adds a list of TestAvailability to a user's availability
     *
     * @param avails list of avail transfer objects to be added to user's availability
     */
    public void addAvail(List<AvailabilityDTO> avails) {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return;
        }
        User user = userRepository.findByUsername(username);
        Set<Availability> updatedAvails = new HashSet<>();
        for (AvailabilityDTO avail : avails) {
            int hash = Availability.calculateHash(avail.getDay(), avail.getTime(), 11);
            Availability updated = availRepository.findByHash(hash);
            System.out.println(hash);
            if (updated == null) {
                updated = new Availability(avail.getDay(), avail.getTime());
                availRepository.save(updated);
            }
            updated.addUser(user);
            updatedAvails.add(updated);
        }
        user.setAvailability(updatedAvails);
    }
}
