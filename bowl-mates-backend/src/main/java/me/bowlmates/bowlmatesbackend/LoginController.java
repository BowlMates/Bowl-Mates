package me.bowlmates.bowlmatesbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class LoginController {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private HttpSessionSecurityContextRepository httpSSCR;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/login")
    public void login(@RequestBody String body) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

    }
}
