package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

import java.util.Collections;
import java.util.Set;

/**
 * Interfaces server and database restaurant data
 */
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

    /**
     * Gets id
     *
     * @return id field of this
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets id
     *
     * @param id value to set id field of this to
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets name
     *
     * @return name field of this
     */
    public String getRestaurant_name() {
        return name;
    }

    /**
     * Sets name
     *
     * @param restaurant_name value to set name field in this to
     */
    public void setRestaurant_name(String restaurant_name) {
        this.name = restaurant_name;
    }

    /**
     * Gets address
     *
     * @return address field of this
     */
    public String getAddress() {
        return address;
    }

    /**
     * Sets address
     *
     * @param address value to set address of this to
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * Gets cuisine
     *
     * @return cuisine field of this
     */
    public String getCuisine() {
        return cuisine;
    }

    /**
     * Sets cuisine
     *
     * @param cuisine value to set cuisine field of this to
     */
    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    /**
     * Gets rating
     *
     * @return rating field of this
     */
    public Integer getRating() {
        return rating;
    }

    /**
     * Sets rating
     *
     * @param rating value to set rating field of this to
     */
    public void setRating(Integer rating) {
        this.rating = rating;
    }

    /**
     * Gets users who have this restaurant as a favorite
     *
     * @return Set of these users
     */
    public Set<TestUser> getUsers() {
        return Collections.unmodifiableSet(users);
    }

    /**
     * Assigns users who have this restaurant as a favorite
     *
     * @param users Set to assign users field to
     */
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
