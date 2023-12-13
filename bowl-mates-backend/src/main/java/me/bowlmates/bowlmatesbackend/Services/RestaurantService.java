package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;

import me.bowlmates.bowlmatesbackend.Models.Restaurant;
import me.bowlmates.bowlmatesbackend.Models.RestaurantDTO;
import me.bowlmates.bowlmatesbackend.Models.User;
import me.bowlmates.bowlmatesbackend.Repositories.RestRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
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
     * @param restDTO a restaurant transfer object to be added to a user's preference list
     */

    // Updating to only handle one restaurant at a time as that's how user will interact with the objects
    public void addPreference(RestaurantDTO restDTO) {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        } else {
            return;
        }

        User user = userRepository.findByUsername(username);

        Set<Restaurant> newFavs = new HashSet<>();
        Set<Restaurant> oldFavs = user.getFavoriteRestaurants();

        for (Restaurant rest: oldFavs) {
            newFavs.add(rest);
        }

        Restaurant restUpdate = new Restaurant(restDTO);

        if(newFavs.contains(restUpdate)){
            newFavs.remove(restUpdate);
//            restRepository.delete(restRepository.findByAddress(restUpdate.getAddress()));

        }
        else{
            newFavs.add(restUpdate);
            if(restRepository.findByAddress(restUpdate.getAddress()) == null){
                restRepository.save(restUpdate);
            }

        }

        user.setFavoriteRestaurants(newFavs);
        userRepository.save(user);
    }
}