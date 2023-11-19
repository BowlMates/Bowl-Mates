package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;

@Entity
@Table(name = "test_profile")
public class TestProfile {

    @Id
    @Column(unique = true)
    private Integer id;

    @OneToOne
    @JoinTable(name = "user_profile")
    private TestUser user;

    @Column
    private String name;
    @Column
    private String bio;
    @Column
    private String photoPath;

    public TestProfile() {
        super();
    }

    public TestProfile(int id) {
        this.id = id;
        this.name = "";
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
