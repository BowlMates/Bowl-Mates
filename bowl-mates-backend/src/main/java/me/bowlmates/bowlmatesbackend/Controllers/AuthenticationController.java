package me.bowlmates.bowlmatesbackend.Controllers;

import me.bowlmates.bowlmatesbackend.Models.LoginResponseDTO;
import me.bowlmates.bowlmatesbackend.Models.RegistrationDTO;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
import me.bowlmates.bowlmatesbackend.Services.AuthenticationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public TestUser registerUser(@RequestBody RegistrationDTO body) {
        return authenticationService.registerUser(body.getName(), body.getUsername(),
                body.getPassword(), body.getEmail());
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body) {
        LoginResponseDTO response = authenticationService.loginUser(body.getUsername(), body.getPassword());
        if (response.getUser() == null) {
            throw new IllegalArgumentException();
        }
        return response;
    }

    @GetMapping("/servertest")
    public String serverTest() {
        return "Server is up!";
    }
}
