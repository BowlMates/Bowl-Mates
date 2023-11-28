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
    @JoinColumn(name = "id")
    private TestUser user;

    @Column
    private String name;
    @Column
    private String pronouns;
    @Column
    private String bio;
    @Column
    private String photoPath;

    public TestProfile() {
        super();
    }

    public TestProfile(TestUser user, int id) {
        this.user = user;
        this.id = id;
        this.name = "";
        this.pronouns = "";
        this.bio = "";
        this.photoPath = "";
    }

    public int getId() {
        return this.id;
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

    public ProfileDTO getDTO() {
        return new ProfileDTO(name, pronouns, bio, photoPath);
    }
}
