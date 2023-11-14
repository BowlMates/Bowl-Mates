package me.bowlmates.bowlmatesbackend.Models;

public class LoginResponseDTO {
    private String username;
    private String jwt;

    public LoginResponseDTO() {
        super();
    }

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