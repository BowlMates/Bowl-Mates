package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.sql.rowset.serial.SerialBlob;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.*;

/**
 * A model representing a user in the application
 */
@Entity // This tells Hibernate to make a table out of this class
@Table(name = "test_user")
public class User implements UserDetails {
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

    @Column(unique = true) // Make the 'email' field unique
    private String email;
    @Column(unique = true) // Make the 'username' field unique
    private String username;
    @Column
    private String password;

    @ManyToMany
    @JoinTable(name = "user_availability")
    private Set<Availability> availability;

    @ManyToMany
    @JoinTable(name = "user_favorite_restaurants")
    private Set<Restaurant> favoriteRestaurants;

    @ManyToMany
    @JoinTable(name = "matches")
    private Set<User> matches;

    @ManyToMany
    @JoinTable(name = "approvals")
    private Set<User> approvals;

    @ManyToMany
    @JoinTable(name = "rejects")
    private Set<User> rejects;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Profile profile;

    @Lob
    private Blob serializedQueue;

    /**
     * a default constructor to make a user with no details
     */
    public User() {
        super();
        authorities = new HashSet<>();
        favoriteRestaurants = new HashSet<>();
        availability = new HashSet<>();
        profile = new Profile();
        matches = new HashSet<>();
        approvals = new HashSet<>();
        rejects = new HashSet<>();
        // is there a better way to initialize this array?
        try {
            serializedQueue= new SerialBlob(new byte[0]);
        } catch (SQLException e) {
            // Handle SQLException
            e.printStackTrace();
        }
    }

    /**
     * An all field constructor for a user that sets all details
     *
     * @param userId an integer that represents the user
     * @param username the username of the user
     * @param password the password of the user
     * @param email the email of the user
     * @param authorities the authorities of the user
     * @param rests the restaurants the user prefers
     * @param queue the matching queue of the user
     */
    public User(Integer userId,
                String username,
                String password,
                String email,
                Set<Role> authorities,
                Set<Restaurant> rests,
                Set<User> matches,
                Set<User> approvals,
                Set<User> rejects,
                byte[] queue) {
        super();
        this.id = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.authorities = authorities;
        this.favoriteRestaurants = rests;
        this.profile = new Profile();
        this.availability = new HashSet<>();
        this.matches = matches;
        this.approvals = approvals;
        this.rejects = rejects;
        try {
            this.serializedQueue = new SerialBlob(queue);

        } catch (SQLException e) {
            // Handle SQLException
            e.printStackTrace();
        }
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
    public String getFirstName() {
        return this.profile.getFirstName();
    }

    /**
     * sets the name of the user
     *
     * @param name the name to be set
     */
    public void setFirstName(String name) {
        this.profile.setFirstName(name);
    }

    /**
     * gets the name of the user
     *
     * @return the name of the user
     */
    public String getLastName() {
        return this.profile.getLastName();
    }

    /**
     * sets the name of the user
     *
     * @param name the name to be set
     */
    public void setLastName(String name) {
        this.profile.setLastName(name);
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
    public Set<Restaurant> getFavoriteRestaurants() {
        return Collections.unmodifiableSet(this.favoriteRestaurants);
    }

    /**
     * sets the users favorite restaurants
     *
     * @param favoriteRestaurants a set of restaurants the user prefers
     */
    public void setFavoriteRestaurants(Set<Restaurant> favoriteRestaurants) {
        this.favoriteRestaurants = favoriteRestaurants;
    }

    /**
     * gets the matches of the user
     *
     * @return the matches of the user
     */
    public Set<User> getMatches() {
        return this.matches;
    }

    /**
     * sets the matches of the user
     *
     * @param matches the matches to be set
     */
    public void setMatches(Set<User> matches) {
        this.matches = matches;
    }

    /**
     * gets the approvals of the user
     *
     * @return the approvals of the user
     */
    public Set<User> getApprovals() {
        return this.approvals;
    }

    /**
     * sets the approvals of the user
     *
     * @param approvals the approvals to be set
     */
    public void setApprovals(Set<User> approvals) {
        this.approvals = approvals;
    }

    /**
     * gets the rejects of the user
     *
     * @return the rejects of the user
     */
    public Set<User> getRejects() {
        return this.rejects;
    }

    /**
     * sets the rejects of the user
     *
     * @param rejects the rejects to be set
     */
    public void setRejects(Set<User> rejects) {
        this.rejects = rejects;
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
    public Set<Availability> getAvailability() {
        return Collections.unmodifiableSet(availability);
    }

    /**
     * sets the availabilities of the user
     *
     * @param availability the availabilities to be set
     */
    public void setAvailability(Set<Availability> availability) {
        this.availability = availability;
    }

    /**
     * gets the matching queue of the user
     *
     * @return the serialized form of the matching queue
     */
    public byte[] getSerializedQueue() {
        byte[] byteArray = new byte[0];
        try (InputStream inputStream = serializedQueue.getBinaryStream()) {
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            byte[] buffer = new byte[4096]; // You can adjust the buffer size as needed

            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }

            // Convert the data to a byte array
            byteArray = outputStream.toByteArray();

            // 'byteArray' now contains the data from the Blob in byte array format
        } catch (SQLException | IOException e) {
            // Handle exceptions
            e.printStackTrace();
        }
        return byteArray;
//        return serializedQueue;
    }

    /**
     * sets the matching queue of the user
     *
     * @param serializedQueue a serialized form of the queue to be set
     */
    public void setSerializedQueue(byte[] serializedQueue) {
        try {
            if (serializedQueue != null) {
                this.serializedQueue = new SerialBlob(serializedQueue);
            } else {
                this.serializedQueue = null; // or set it to whatever default you need
            }
        } catch (SQLException e) {
            // Handle SQLException
            e.printStackTrace();
        }
    }

    /**
     * Setter for profile
     *
     * @param profile updated value of profile
     */
    public void setProfile(Profile profile) {
        this.profile = profile;
    }

    /**
     * Getter for profile
     *
     * @return profile field of this
     */
    public Profile getProfile() {return this.profile;}

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
        if (!(o instanceof User tU)) {
            return false;
        }
        return this.email.equals(tU.email);
    }
}
