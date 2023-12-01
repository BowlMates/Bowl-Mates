package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

//TODO: Documentation
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
    private String photoPath;

    public TestProfile() {
        super();
    }

    public TestProfile(TestUser user, String firstName, String lastName) {
        this.user = user;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pronouns = "";
        this.bio = "";
        this.photoPath = "";
    }

    public int getId() {
        return this.id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setLastName(String lastName) { this.lastName = lastName;}

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

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public String getPhotoPath() {
        return this.photoPath;
    }

    public ProfileDTO getDTO() {
        return new ProfileDTO(firstName, lastName, pronouns, bio, photoPath);
    }

    public void updateFromDTO(ProfileDTO profileDTO) {
        setFirstName(profileDTO.getFirstName());
        setLastName((profileDTO).getLastName());
        setPronouns(profileDTO.getPronouns());
        setBio(profileDTO.getBio());
    }
}
