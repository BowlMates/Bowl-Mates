package me.bowlmates.bowlmatesbackend.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

//@Controller
//public class LoginController {
//
//    @Autowired
//    private UserRepo userRepo;
//    @Autowired
//    private SecurityContextRepository securityContextRepository;
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @PostMapping(path = "/login")
//    public String login(@RequestBody HttpServletRequest request, @ResponseBody HttpServletResponse response) {
//        loginRequest loginRequest = new loginRequest("", "");
//        Authentication authenticationRequest =
//                UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.username(), loginRequest.password());
//        Authentication authenticationResponse =
//                this.authenticationManager.authenticate(authenticationRequest);
//        SecurityContextHolder.getContext().setAuthentication(authenticationResponse);
//        securityContextRepository.saveContext(SecurityContextHolder.getContext(), request, response);
//
//        return response.toString();
//    }
//
//    public record loginRequest(String username, String password) {
//    }
//}

@RestController
public class LoginController {

//    private final AuthenticationManager authenticationManager;
//    private final HttpSessionSecurityContextRepository securityContextRepository;
//
//    public LoginController(AuthenticationManager authenticationManager, SecurityContextRepository securityContextRepository) {
//        this.authenticationManager = authenticationManager;
//        this.securityContextRepository = (HttpSessionSecurityContextRepository) securityContextRepository;
//    }
//
//    @CrossOrigin("http://localhost:3000")
//    @PostMapping("/customlogin")
//    public ResponseEntity<Void> customlogin(@RequestParam("username") String username, @RequestParam("password") String password, HttpServletRequest request, HttpServletResponse response) {
//        Authentication authenticationRequest =
//                new UsernamePasswordAuthenticationToken(username, password);
//
//        try {
//            Authentication authenticationResponse = this.authenticationManager.authenticate(authenticationRequest);
//
//            // Save the authenticated user in the session
//            SecurityContext securityContext = new SecurityContextImpl();
//            securityContext.setAuthentication(authenticationResponse);
//            this.securityContextRepository.saveContext(securityContext, request, response);
//
//            String un = "";
//            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//            if(auth != null && auth.isAuthenticated()){
//                un = auth.getName();
//            }
//            System.out.println(un);
//            // Return a success response or redirect as needed
//            return ResponseEntity.ok().build();
//        } catch (AuthenticationException e) {
//            // Authentication failed, return an error response
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
//    }
//
//    public record LoginRequest(String username, String password) {
//    }
}

