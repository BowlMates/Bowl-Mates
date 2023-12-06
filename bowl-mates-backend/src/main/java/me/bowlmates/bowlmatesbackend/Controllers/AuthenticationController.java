package me.bowlmates.bowlmatesbackend.Controllers;

import me.bowlmates.bowlmatesbackend.Models.LoginResponseDTO;
import me.bowlmates.bowlmatesbackend.Models.ProfileDTO;
import me.bowlmates.bowlmatesbackend.Models.RegistrationDTO;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
import me.bowlmates.bowlmatesbackend.Services.AuthenticationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * REST Controller handling user authentication
 */
@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    /**
     * Registers a new user from request received from frontend
     *
     * @param body Filled fields from frontend registration
     * @return TestUser object constructed from registration
     */
    @PostMapping("/register")
    public ProfileDTO registerUser(@RequestBody RegistrationDTO body) {
        return authenticationService.registerUser(body.getFirstName(), body.getLastName(), body.getUsername(),
                body.getPassword(), body.getEmail());
    }

    /**
     * Authenticates a user when they attempt log in
     *
     * @param body RegistrationDTO object containing username and password
     * @return LoginResponseDTO object containing json web token for future authentication
     */
    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body) {
        LoginResponseDTO response = authenticationService.loginUser(body.getUsername(), body.getPassword());
        if (response.getUser() == null) {
            throw new IllegalArgumentException();
        }
        return response;
    }

    /**
     * Test of server status, as this REST Controller does not require authentication
     *
     * @return String with server status (User will get 404 when server is not up)
     */
    @GetMapping("/servertest")
    public String serverTest() {
        return "Server is up!";
    }
}
