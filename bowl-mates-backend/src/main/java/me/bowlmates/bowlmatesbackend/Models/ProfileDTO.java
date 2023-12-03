package me.bowlmates.bowlmatesbackend.Models;

//TODO: Documentation
public class ProfileDTO {

    private String firstName;
    private String lastName;
    private String pronouns;
    private String bio;
    private String photo;

    public ProfileDTO() {
        this.firstName = "";
        this.lastName = "";
        this.pronouns = "";
        this.bio = "";
        this.photo = "";
    }

    public ProfileDTO(String firstName, String lastName, String pronouns, String bio, String photo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pronouns = pronouns;
        this.bio = bio;
        this.photo = "";
    }

    public void setFirstName(String name) {
        this.firstName = name;
    }

    public String getFirstName() {
        return this.firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getLastName() {
        return this.lastName;
    }

    public void setPronouns(String pronouns) {
        this.pronouns = pronouns;
    }

    public String getPronouns() {
        return this.pronouns;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getBio() {
        return this.bio;
    }

    public void setPhoto(String photoPath) {
        this.photo = photoPath;
    }

    public String getPhoto() {
        return this.photo;
    }
}
