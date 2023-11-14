package me.bowlmates.bowlmatesbackend.Models;

/**
 * Used for passing availability info frontend <-> backend
 */
public class LoginResponseDTO {
    private String username;
    private String jwt;

    /**
     * Default constructor
     */
    public LoginResponseDTO() {
        super();
    }

    /**
     * Constructor
     * @param user TestUser to grab username from
     * @param jwt
     */
    public LoginResponseDTO(TestUser user, String jwt) {
        this.username = user.getUsername();
        this.jwt = jwt;
    }

    public String getUser() {
        return this.username;
    }

    public void setUser(String username) {
        this.username = username;
    }

    public String getJwt() {
        return this.jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

}