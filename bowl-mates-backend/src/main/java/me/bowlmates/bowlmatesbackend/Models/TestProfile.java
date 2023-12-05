package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

/**
 * A model representing a user profile
 */
@Entity
@Table(name = "test_profile")
public class TestProfile {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(unique = true)
    private Integer id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private TestUser user;

    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String pronouns;
    @Column
    private String bio;
    @Column
    private String photo;

    /**
     * No args constructor
     */
    public TestProfile() {
        super();
    }

    /**
     * Constructor with arguments
     *
     * @param user TestUser profile is linked to
     * @param firstName User first name
     * @param lastName User last name
     */
    public TestProfile(TestUser user, String firstName, String lastName) {
        this.user = user;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pronouns = "";
        this.bio = "";
        this.photo = "";
    }

    /**
     * Getter for id
     *
     * @return id field of this
     */
    public int getId() {
        return this.id;
    }

    /**
     * Setter for first name
     *
     * @param firstName updated value of firstName
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * Getter for first name
     *
     * @return firstName field of this
     */
    public String getFirstName() {
        return this.firstName;
    }

    /**
     * Setter for last name
     *
     * @param lastName updated value of lastName
     */
    public void setLastName(String lastName) { this.lastName = lastName;}

    /**
     * Getter for last name
     *
     * @return lastName field of this
     */
    public String getLastName() {
        return this.lastName;
    }

    /**
     * Setter for pronouns
     *
     * @param pronouns updated value of pronouns
     */
    public void setPronouns(String pronouns) {
        this.pronouns = pronouns;
    }

    /**
     * Getter for pronouns
     *
     * @return pronouns field of this
     */
    public String getPronouns() {
        return this.pronouns;
    }

    /**
     * Setter for bio
     *
     * @param bio updated value of bio
     */
    public void setBio(String bio) {
        this.bio = bio;
    }

    /**
     * Getter for bio
     *
     * @return bio field of this
     */
    public String getBio() {
        return this.bio;
    }

    /**
     * Setter for photo path
     *
     * @param photo updated value of photo
     */
    public void setPhoto(String photo) {
        System.out.println(photo);
        this.photo = photo;
    }

    /**
     * Getter for photo path
     *
     * @return photo field of this
     */
    public String getPhoto() {
        return this.photo;
    }

    /**
     * Constructs a DTO from the fields of this
     *
     * @return Data Transfer Object with fields from this
     */
    public ProfileDTO getDTO() {
        return new ProfileDTO(firstName, lastName, pronouns, bio, photo);
    }

    /**
     * Updates fields of this from a DTO
     *
     * @param profileDTO DTO to get values from
     */
    public void updateFromDTO(ProfileDTO profileDTO) {
        setFirstName(profileDTO.getFirstName());
        setLastName((profileDTO).getLastName());
        setPronouns(profileDTO.getPronouns());
        setBio(profileDTO.getBio());
    }
}
