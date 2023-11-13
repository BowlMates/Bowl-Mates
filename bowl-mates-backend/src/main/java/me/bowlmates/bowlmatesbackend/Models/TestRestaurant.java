package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "test_restaurant")
public class TestRestaurant {
    @jakarta.persistence.Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(unique = true)
    private Integer id; // Change to Integer type as it's typically used for IDs
    @Column
    private String name;
    @Column(unique = true)
    private String address;
    @Column
    private String cuisine;
    @Column
    private Integer rating;

    @ManyToMany(mappedBy = "favoriteRestaurants")
    private Set<TestUser> users;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRestaurant_name() {
        return name;
    }

    public void setRestaurant_name(String restaurant_name) {
        this.name = restaurant_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Set<TestUser> getUsers() {
        return Collections.unmodifiableSet(users);
    }

    public void setUsers(Set<TestUser> users) {
        this.users = users;
    }

    @Override
    public int hashCode() {
        return this.address.hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof TestRestaurant tR)) {
            return false;
        }
        return this.address.equals(tR.getAddress());
    }
}
