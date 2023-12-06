package me.bowlmates.bowlmatesbackend.Configuration;
import me.bowlmates.bowlmatesbackend.Utils.RSAKeyProperties;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.proc.SecurityContext;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class SecurityConfig {


    private final RSAKeyProperties keys;

    /**
     * A constructor for the security config
     * @param keys the keys passed to the config to identify encryption methods
     */
    public SecurityConfig(RSAKeyProperties keys) {
        this.keys = keys;
    }

    /**
     * Creates a password encoder to create security for a user
     * @return {@link BCryptPasswordEncoder}the password encoder
     */
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    /**
     * This bean manages the authentication during user login
     */
    @Bean
    public AuthenticationManager authManager(UserDetailsService detailsService) {
        DaoAuthenticationProvider daoProvider = new DaoAuthenticationProvider();
        daoProvider.setUserDetailsService(detailsService);
        daoProvider.setPasswordEncoder(passwordEncoder());
        return new ProviderManager(daoProvider);
    }

    /**
     * A bean that allows cross-origin referencing
     * @return the {@link UrlBasedCorsConfigurationSource} object that allows http requests from the given origin
     */
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "https://bowlmates.me"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
        configuration.addAllowedHeader("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    /**
     * Combines all security features for the app and creates a chain of security operations
     *
     * @param http the {@link HttpSecurity} object used to define security configurations for HTTP requests
     * @return a {@link SecurityFilterChain} representing the configured security chain
     * @throws Exception if an error occurs while configuring the security settings
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .cors().and()
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/auth/**").permitAll();
                    auth.requestMatchers("/admin/**").hasRole("ADMIN");
                    auth.requestMatchers("/user/**").hasAnyRole("ADMIN", "USER");
                    auth.anyRequest().authenticated();
                });
        http
                .oauth2ResourceServer(oauth2 -> oauth2
                        .jwt(jwt -> jwt
                                        .jwtAuthenticationConverter(jwtAuthenticationConverter())
                        )
                );
        http.sessionManagement(
                session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        );

        return http.build();
    }

    /**
     * A bean that allows for the decryption of jwt tokens in http requests
     *
     * @return a {@link NimbusJwtDecoder} to decode jwt tokens
     */
    @Bean
    public JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder.withPublicKey(keys.getPublicKey()).build();
    }

    /**
     * A bean that allows for the encryption of jwt tokens for http responses
     *
     * @return a {@link NimbusJwtEncoder} that encodes jwt tokens
     */
    @Bean
    public JwtEncoder jwtEncoder() {
        JWK jwk = new RSAKey.Builder(keys.getPublicKey()).privateKey(keys.getPrivateKey()).build();
        JWKSource<SecurityContext> jwks = new ImmutableJWKSet<>(new JWKSet(jwk));
        return new NimbusJwtEncoder(jwks);
    }

    /**
     * A bean that converts jwt tokens to allow for authentication
     *
     * @return a {@link JwtGrantedAuthoritiesConverter} that converts jwt tokens
     */
    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
        jwtGrantedAuthoritiesConverter.setAuthoritiesClaimName("roles");
        jwtGrantedAuthoritiesConverter.setAuthorityPrefix("ROLE_");
        JwtAuthenticationConverter jwtConverter = new JwtAuthenticationConverter();
        jwtConverter.setJwtGrantedAuthoritiesConverter(jwtGrantedAuthoritiesConverter);
        return jwtConverter;
    }
}
