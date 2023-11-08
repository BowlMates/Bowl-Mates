package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

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
//    @JoinTable(name = "user_favorite_restaurants",
//            joinColumns = {@JoinColumn(name = "user_id")},
//            inverseJoinColumns = {@JoinColumn(name = "restaurant_id")})
    private Set<TestRestaurant> favoriteRestaurants;

    public TestUser() {
        super();
        authorities = new HashSet<>();
    }

    public TestUser(Integer userId, String name, String username, String password,
                           String email, Set<Role> authorities, Set<TestRestaurant> rests) {
        super();
        this.id = userId;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.authorities = authorities;
        this.favoriteRestaurants = rests;

    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<TestRestaurant> getFavoriteRestaurants() {
        return this.favoriteRestaurants;
    }

    public void setFavoriteRestaurants(Set<TestRestaurant> favoriteRestaurants) {
        this.favoriteRestaurants = favoriteRestaurants;
    }

    public void setAuthorities(Set<Role> authorities) {
        this.authorities = authorities;
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

    public void addFavorite(TestRestaurant rest) {
        this.favoriteRestaurants.add(rest);
        rest.getUsers().add(this);
    }

//    public boolean[] getAvailability() {
//        return availability;
//    }

//    public void setAvailability(boolean[] availability) {
//        this.availability = availability;
//    }
}
