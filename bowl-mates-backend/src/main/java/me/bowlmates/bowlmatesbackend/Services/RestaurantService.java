package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;

import me.bowlmates.bowlmatesbackend.Models.RestaurantDTO;
import me.bowlmates.bowlmatesbackend.Models.TestRestaurant;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
import me.bowlmates.bowlmatesbackend.Repositories.RestRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * A service used to add restaurant preferences to a users profile
 */
@Service
@Transactional
public class RestaurantService {
    @Autowired
    private UserRepo userRepository;
    @Autowired
    private RestRepo restRepository;

    /**
     * Adds a list of restaurants to a user's preferences
     *
     * @param rests a list of restaurant transfer objects to be added to a user's preference list
     */
    public void addPreference(List<RestaurantDTO> rests) {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth != null && auth.isAuthenticated()){
            username = auth.getName();
        } else {
            return;
        }
        TestUser user = userRepository.findByUsername(username);
        Set<TestRestaurant> updatedRests = new HashSet<>();
        for (RestaurantDTO rest : rests) {
            TestRestaurant updated = restRepository.findByName(rest.getName());
            updatedRests.add(updated);
        }
        user.setFavoriteRestaurants(updatedRests);
    }
}
