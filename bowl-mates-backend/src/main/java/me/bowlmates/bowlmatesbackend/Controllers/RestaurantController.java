package me.bowlmates.bowlmatesbackend.Controllers;

import me.bowlmates.bowlmatesbackend.DataTransferObjects.RestaurantDTO;
import me.bowlmates.bowlmatesbackend.Models.Restaurant;
import me.bowlmates.bowlmatesbackend.Models.User;
import me.bowlmates.bowlmatesbackend.Repositories.RestRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import me.bowlmates.bowlmatesbackend.Services.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * REST Controller for Restaurants
 */
@RestController // This means that this class is a Controller
@RequestMapping(path="/user") // This means URL's start with /user (after Application path)
public class RestaurantController {

    @Autowired
    UserRepo userRepository;
    @Autowired
    RestRepo restaurantRepository;
    @Autowired
    RestaurantService restaurantService;

    /**
     * Adds restaurants to user's favorites
     *
     * @param body RestaurantDTO list of favorite restaurants
     */
    @PostMapping("/prefs/save")
    public void setRestPreferences(@RequestBody RestaurantDTO body) {
        restaurantService.addPreference(body);
    }

    /**
     * Provides set of user's favorite restaurants
     *
     * @return Set of RestaurantDTO objects tied to user
     */
    @GetMapping(value = "/prefs", produces = "application/json")
    public Set<RestaurantDTO> getRestPreferences() {
        String username = "";
        Authentication auth = SecurityContextHolder
                .getContext()
                .getAuthentication();
        if(auth != null && auth.isAuthenticated()){
            username = auth.getName();
        }
        User user = userRepository.findByUsername(username);
        Set<RestaurantDTO> names = new HashSet<>();
        Set<Restaurant> rests = user.getFavoriteRestaurants();
        for (Restaurant rest : rests) {
            names.add(new RestaurantDTO(rest));
        }
        return names;
    }

    /**
     * Gets all restaurants
     *
     * @return a Set of RestaurantDTO objects representing all restaurants
     */
    @GetMapping(value = "/rests", produces = "application/json")
    public Set<RestaurantDTO> getAllRestaurants() {
        List<Restaurant> allRests = restaurantRepository.findAll();
        Set<RestaurantDTO> setRests = new HashSet<>();
        for(Restaurant restaurant : allRests){
            setRests.add(new RestaurantDTO(restaurant));
        }
        return setRests;
    }
}
