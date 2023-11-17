package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

/**
 * A model representing a user in the application
 */
@Entity // This tells Hibernate to make a table out of this class
@Table(name = "test_user")
public class TestUser implements UserDetails {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(unique = true)
    private Integer id;

    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(
            name="user_role_junction",
            joinColumns = {@JoinColumn(name="user_id")},
            inverseJoinColumns = {@JoinColumn(name="role_id")}
    )
    private Set<Role> authorities;
    @Column
    private String name;

    @Column(unique = true) // Make the 'email' field unique
    private String email;
    @Column(unique = true) // Make the 'username' field unique
    private String username;
    @Column
    private String password;

    @ManyToMany
    @JoinTable(name = "user_availability")
    private Set<TestAvailability> availability;

    @ManyToMany
    @JoinTable(name = "user_favorite_restaurants")
    private Set<TestRestaurant> favoriteRestaurants;

    /**
     * a default constructor to make a user with no details
     */
    public TestUser() {
        super();
        authorities = new HashSet<>();
        favoriteRestaurants = new HashSet<>();
        availability = new HashSet<>();
    }

    /**
     * An all field constructor for a user that sets all details
     *
     * @param userId an integer that represents the user
     * @param name the name of the user
     * @param username the username of the user
     * @param password the password of the user
     * @param email the email of the user
     * @param authorities the authorities of the user
     * @param rests the restaurants the user prefers
     */
    public TestUser(Integer userId,
                    String name,
                    String username,
                    String password,
                    String email,
                    Set<Role> authorities,
                    Set<TestRestaurant> rests) {
        super();
        this.id = userId;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.authorities = authorities;
        this.favoriteRestaurants = rests;
        this.availability = new HashSet<>();
    }

    /**
     * gets the id of the user
     *
     * @return the id of the user
     */
    public Integer getId() {
        return id;
    }

    /**
     * sets the id of the user
     *
     * @param id the id to be set
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * gets the name of the user
     *
     * @return the name of the user
     */
    public String getName() {
        return name;
    }

    /**
     * sets the name of the user
     *
     * @param name the name to be set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * gets the email of the user
     *
     * @return the email of the user
     */
    public String getEmail() {
        return email;
    }

    /**
     * sets the email of the user
     *
     * @param email the email to be set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    /**
     * sets the username of the user
     *
     * @param userName sets the name of the user
     */
    public void setUsername(String userName) {
        this.username = userName;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    /**
     * sets the password of the user
     *
     * @param password the password to be set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * gets the restaurants the user enjoys
     *
     * @return a set of restaurants
     */
    public Set<TestRestaurant> getFavoriteRestaurants() {
        return Collections.unmodifiableSet(this.favoriteRestaurants);
    }

    /**
     * sets the users favorite restaurants
     *
     * @param favoriteRestaurants a set of restaurants the user prefers
     */
    public void setFavoriteRestaurants(Set<TestRestaurant> favoriteRestaurants) {
        this.favoriteRestaurants = favoriteRestaurants;
    }

    /**
     * sets the authorities of the user
     *
     * @param authorities the authorities to be set
     */
    public void setAuthorities(Set<Role> authorities) {
        this.authorities = authorities;
    }

    /**
     * gets the availability of the user
     *
     * @return a set of the user's availability
     */
    public Set<TestAvailability> getAvailability() {
        return Collections.unmodifiableSet(availability);
    }

    /**
     * sets the availabilities of the user
     *
     * @param availability the availabilities to be set
     */
    public void setAvailability(Set<TestAvailability> availability) {
        this.availability = availability;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public int hashCode() {
        return this.email.hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof TestUser tU)) {
            return false;
        }
        return this.email.equals(tU.email);
    }
}
