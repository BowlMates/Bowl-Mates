package me.bowlmates.bowlmatesbackend.DataTransferObjects;

/**
 * Data Transfer Object for user profile information
 */
public class ProfileDTO {

    private String firstName;
    private String lastName;
    private String pronouns;
    private String bio;
    private String photo;

    /**
     * No argument constructor
     */
    public ProfileDTO() {
        this.firstName = "";
        this.lastName = "";
        this.pronouns = "";
        this.bio = "";
        this.photo = "";
    }

    /**
     * Constructor with arguments
     *
     * @param firstName user first name
     * @param lastName user last name
     * @param pronouns user pronouns
     * @param bio user bio
     * @param photo path to access user photo
     */
    public ProfileDTO(String firstName, String lastName, String pronouns, String bio, String photo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pronouns = pronouns;
        this.bio = bio;
        this.photo = photo;
    }

    /**
     * Setter for user first name
     *
     * @param name updated value of firstName
     */
    public void setFirstName(String name) {
        this.firstName = name;
    }

    /**
     * Getter for user first name
     *
     * @return firstName field of this
     */
    public String getFirstName() {
        return this.firstName;
    }

    /**
     * Setter for user last name
     *
     * @param lastName updated value of lastName
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * Getter for user last name
     *
     * @return lastName field of this
     */
    public String getLastName() {
        return this.lastName;
    }

    /**
     * Setter for user pronouns
     *
     * @param pronouns updated value of pronouns
     */
    public void setPronouns(String pronouns) {
        this.pronouns = pronouns;
    }

    /**
     * Getter for user pronouns
     *
     * @return pronouns field of this
     */
    public String getPronouns() {
        return this.pronouns;
    }

    /**
     * Setter for user bio
     *
     * @param bio updated value of bio
     */
    public void setBio(String bio) {
        this.bio = bio;
    }

    /**
     * Getter for user bio
     *
     * @return bio field of this
     */
    public String getBio() {
        return this.bio;
    }

    /**
     * Setter for photo path
     *
     * @param photoPath updated value of photo
     */
    public void setPhoto(String photoPath) {
        this.photo = photoPath;
    }

    /**
     * Getter for photo path
     *
     * @return photo field of this
     */
    public String getPhoto() {
        return this.photo;
    }
}
