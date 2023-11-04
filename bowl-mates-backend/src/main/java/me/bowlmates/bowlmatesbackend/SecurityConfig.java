package me.bowlmates.bowlmatesbackend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final TestUserDetailService customUserDetailsService;

    public SecurityConfig(TestUserDetailService customUserDetailsService) {
        this.customUserDetailsService = customUserDetailsService;
    }


    @Bean
    @CrossOrigin(origins = "localhost:3000")
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                //.csrf(Customizer.withDefaults())
                .csrf().disable()
                .authorizeHttpRequests(authorize -> authorize

                        .requestMatchers("/register").permitAll()
                        .requestMatchers("/test").permitAll()
                        .requestMatchers("/login").permitAll()
                        .anyRequest().authenticated()
//                        .anyRequest().permitAll()

                )
                .httpBasic(Customizer.withDefaults())
                .formLogin(Customizer.withDefaults())
;
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance(); // Use NoOpPasswordEncoder for plain text passwords
    }

}





