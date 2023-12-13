package me.bowlmates.bowlmatesbackend.Controllers;

import me.bowlmates.bowlmatesbackend.DataTransferObjects.AvailabilityDTO;
import me.bowlmates.bowlmatesbackend.Models.Availability;
import me.bowlmates.bowlmatesbackend.Models.User;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import me.bowlmates.bowlmatesbackend.Services.AvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * REST Controller for handling user availability
 */
@RestController
@RequestMapping(path="/user")
public class AvailabilityController {

    @Autowired
    UserRepo userRepository;
    @Autowired
    AvailabilityService availabilityService;

    /**
     * Provides frontend with user availability
     *
     * @return a List of AvailabilityDTO objects representing times user is available
     */
    @GetMapping(value = "/avail", produces = "application/json")
    public List<AvailabilityDTO> getAvailability() {
        String username = "";
        Authentication auth = SecurityContextHolder
                .getContext()
                .getAuthentication();
        if (auth != null && auth.isAuthenticated()) {
            username = auth.getName();
        }
        User user = userRepository.findByUsername(username);
        Set<Availability> availabilities = user.getAvailability();
        List<AvailabilityDTO> aDTO = new ArrayList<>();
        for (Availability avail : availabilities) {
            aDTO.add(new AvailabilityDTO(avail.getDay(), avail.getHour()));
        }
        return aDTO;
    }

    /**
     * Updates user availability from frontend
     *
     * @param availabilityDTOList List of AvailabilityDTO representing user availability
     */
    @PostMapping("/avail/save")
    public void setAvailability(@RequestBody List<AvailabilityDTO> availabilityDTOList) {
        availabilityService.addAvail(availabilityDTOList);
    }
}
