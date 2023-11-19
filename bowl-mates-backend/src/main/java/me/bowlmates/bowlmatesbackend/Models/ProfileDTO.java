package me.bowlmates.bowlmatesbackend.Models;

//TODO: Documentation
public class ProfileDTO {

    private String name;
    private String pronouns;
    private String bio;
    private String photoPath;

    public ProfileDTO() {
        this.name = "";
        this.pronouns = "";
        this.bio = "";
        this.photoPath = "";
    }

    public ProfileDTO(String name, String pronouns, String bio, String photoPath) {
        this.name = name;
        this.pronouns = pronouns;
        this.bio = bio;
        this.photoPath = photoPath;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
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

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public String getPhotoPath() {
        return this.photoPath;
    }
}
