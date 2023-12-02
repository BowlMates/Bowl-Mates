package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

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

    @ManyToMany
    @JoinTable(name = "matches")
    private Set<TestUser> matches;

    @ManyToMany
    @JoinTable(name = "approvals")
    private Set<TestUser> approvals;

    @ManyToMany
    @JoinTable(name = "rejects")
    private Set<TestUser> rejects;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private TestProfile profile;

    @Lob
    private byte[] serializedQueue;

    /**
     * a default constructor to make a user with no details
     */
    public TestUser() {
        super();
        authorities = new HashSet<>();
        favoriteRestaurants = new HashSet<>();
        availability = new HashSet<>();
        profile = new TestProfile();
        matches = new HashSet<>();
        approvals = new HashSet<>();
        rejects = new HashSet<>();
        // is there a better way to initialize this array?
        serializedQueue = new byte[0];
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
    public TestUser(Integer userId,
                    String username,
                    String password,
                    String email,
                    Set<Role> authorities,
                    Set<TestRestaurant> rests,
                    Set<TestUser> matches,
                    Set<TestUser> approvals,
                    Set<TestUser> rejects,
                    byte[] queue) {
        super();
        this.id = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.authorities = authorities;
        this.favoriteRestaurants = rests;
        this.profile = new TestProfile();
        this.availability = new HashSet<>();
        this.matches = matches;
        this.approvals = approvals;
        this.rejects = rejects;
        this.serializedQueue = queue;
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
     * gets the matches of the user
     *
     * @return the matches of the user
     */
    public Set<TestUser> getMatches() {
        return this.matches;
    }

    /**
     * sets the matches of the user
     *
     * @param matches the matches to be set
     */
    public void setMatches(Set<TestUser> matches) {
        this.matches = matches;
    }

    /**
     * gets the approvals of the user
     *
     * @return the approvals of the user
     */
    public Set<TestUser> getApprovals() {
        return this.approvals;
    }

    /**
     * sets the approvals of the user
     *
     * @param approvals the approvals to be set
     */
    public void setApprovals(Set<TestUser> approvals) {
        this.approvals = approvals;
    }

    /**
     * gets the rejects of the user
     *
     * @return the rejects of the user
     */
    public Set<TestUser> getRejects() {
        return this.rejects;
    }

    /**
     * sets the rejects of the user
     *
     * @param rejects the rejects to be set
     */
    public void setRejects(Set<TestUser> rejects) {
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

    /**
     * gets the matching queue of the user
     *
     * @return the serialized form of the matching queue
     */
    public byte[] getSerializedQueue() {
        return serializedQueue;
    }

    /**
     * sets the matching queue of the user
     *
     * @param serializedQueue a serialized form of the queue to be set
     */
    public void setSerializedQueue(byte[] serializedQueue) {
        this.serializedQueue = serializedQueue;
    }

    // TODO: Document profile methods
    public void setProfile(TestProfile profile) {
        this.profile = profile;
    }

    public TestProfile getProfile() {return this.profile;}

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
