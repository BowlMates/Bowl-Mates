package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

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
}
