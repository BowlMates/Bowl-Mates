package me.bowlmates.bowlmatesbackend.Services;

import jakarta.transaction.Transactional;
import me.bowlmates.bowlmatesbackend.Models.TestRestaurant;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
import me.bowlmates.bowlmatesbackend.Repositories.RestRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class RestaurantService {
    @Autowired
    private UserRepo userRepository;
    @Autowired
    private RestRepo restRepository;
    public void addPreference(String restName) {
        String username = "";
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth != null && auth.isAuthenticated()){
            username = auth.getName();
        } else {
            return;
        }
        TestUser user = userRepository.findByUsername(username);
        TestRestaurant rest = restRepository.findByName(restName);
        user.addFavorite(rest);
        
    }
}
