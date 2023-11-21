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

        TestUser user = userRepository.findByUsername(username);

        Set<TestRestaurant> newFavs = new HashSet<>();
        Set<TestRestaurant> oldFavs = user.getFavoriteRestaurants();

        for (TestRestaurant rest: oldFavs) {
            newFavs.add(rest);
        }

        TestRestaurant restUpdate = new TestRestaurant(restDTO);

        // The way that Spring Data requires an auto generated string is forcing us to have to delete the record
        // From the database any time we want to dissociate a user from its fav because if we try to recreate that
        // relationship later we have no way to get the restaurant id for the relationship foreign key
        // TODO Fix
        if(newFavs.contains(restUpdate)){
            newFavs.remove(restUpdate);
            restRepository.delete(restRepository.findByAddress(restUpdate.getAddress()));
        }
        else{
            newFavs.add(restUpdate);
            if(restRepository.findByAddress(restUpdate.getAddress()) == null){
                restRepository.save(restUpdate);
            }

        }


        user.setFavoriteRestaurants(newFavs);
    }
}
