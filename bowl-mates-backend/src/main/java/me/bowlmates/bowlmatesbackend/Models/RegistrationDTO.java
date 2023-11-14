package me.bowlmates.bowlmatesbackend.Models;

public class RegistrationDTO {

    private String name;
    private String username;
    private String password;
    private String email;



    public RegistrationDTO() {
        super();
    }

    public RegistrationDTO(String name,
                           String username,
                           String password,
                           String email) {
        super();
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String toString() {
        return "Registration info: name: " + this.name + "username: " +
                this.username + " password: " + this.password + " email: " + this.email;
    }
}
