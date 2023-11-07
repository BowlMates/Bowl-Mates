package me.bowlmates.bowlmatesbackend.Models;

public class LoginResponseDTO {
    private TestUser user;
    private String jwt;

    public LoginResponseDTO(){
        super();
    }

    public LoginResponseDTO(TestUser user, String jwt){
        this.user = user;
        this.jwt = jwt;
    }

    public TestUser getUser(){
        return this.user;
    }

    public void setUser(TestUser user){
        this.user = user;
    }

    public String getJwt(){
        return this.jwt;
    }

    public void setJwt(String jwt){
        this.jwt = jwt;
    }

}