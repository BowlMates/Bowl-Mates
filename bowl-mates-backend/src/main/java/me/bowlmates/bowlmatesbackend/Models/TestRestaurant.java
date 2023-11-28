package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import org.hibernate.annotations.UuidGenerator;

import java.util.Collections;
import java.util.Set;

/**
 * Interfaces server and database restaurant data
 */
@Entity
@Table(name = "restaurants")
public class TestRestaurant {
    // TODO Find a way to not have auto generated keys
    @jakarta.persistence.Id
    @Column(unique = true)
    private String id; // Change to String type as that's what is being returned by Google api
    @Column
    private String name;
    @Column(unique = true)
    private String address;
    @Column
    private String cuisine;
    @Column
    private Float rating;
    @Column
    private Float latitude;
    @Column
    private Float longitude;
    @Column
    private String reference;


    @ManyToMany(mappedBy = "favoriteRestaurants")
    private Set<TestUser> users;

    public TestRestaurant() {
        super();
    }

    // Constructor to take objects returned to front end and convert them into objects for use in back end
    public TestRestaurant(RestaurantDTO restaurantDTO) {
        this.id = restaurantDTO.getId();
        this.name = restaurantDTO.getName();
        this.address = restaurantDTO.getAddress();
        this.cuisine = restaurantDTO.getCuisine();
        this.rating = restaurantDTO.getRating();
        this.latitude = restaurantDTO.getLatitude();
        this.longitude = restaurantDTO.getLongitude();
        this.reference = restaurantDTO.getReference();
    }

    /**
     * Gets id
     *
     * @return id field of this
     */
    public String getId() {
        return id;
    }

    /**
     * Sets id
     *
     * @param id value to set id field of this to
     */
    public void setId(String id) {
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
    public Float getRating() {
        return rating;
    }

    /**
     * Sets rating
     *
     * @param rating value to set rating field of this to
     */
    public void setRating(Float rating) {
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

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }
}
