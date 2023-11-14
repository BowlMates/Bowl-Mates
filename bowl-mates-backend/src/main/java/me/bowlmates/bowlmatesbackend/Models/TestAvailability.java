package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * Object to interface server with restaurant info in database
 */
@Entity
@Table(name = "test_availability")
public class TestAvailability {
    @jakarta.persistence.Id
    @GeneratedValue(strategy= GenerationType.AUTO)

    private final int NUM_TIMES = getNumTimes();

    @ManyToMany(mappedBy = "availability")
    private Set<TestUser> users;

    @Column
    private Integer hour;
    @Column
    private Integer day;
    @Column(unique = true)
    private Integer hash;

    /**
     * Default constructor
     */
    public TestAvailability() {
        this.day = 0;
        this.hour = 0;
        this.hash = 0;
        this.users = new HashSet<>();
    }

    /**
     * Static method for finding the hash without a TestAvailability object
     *
     * @param day day value
     * @param hour hour value
     * @param numTimes number of times day is subdivided into
     * @return hash based on above args
     */
    public static int calculateHash(int day,
                                    int hour,
                                    int numTimes) {
        return day * numTimes + hour;
    }

    /**
     * Sets hour field of this
     *
     * @param hour value to set field in this to
     */
    public void setHour(int hour) {
        this.hour = hour;
        this.hash = this.hashCode();
    }

    /**
     * Gets hour field of this
     *
     * @return hour field of this
     */
    public int getHour() {
        return this.hour;
    }

    /**
     * Sets day field of this
     *
     * @param day value to set day field of this to
     */
    public void setDay(int day) {
        this.day = day;
        this.hash = this.hashCode();
    }

    /**
     * Gets day field of this
     *
     * @return day field of this
     */
    public int getDay() {
        return this.day;
    }

    /**
     * Ties user to this availability time slot
     *
     * @param user User being tied to this
     */
    public void addUser(TestUser user) {
        users.add(user);
    }

    /**
     * Static method to keep num times in one place in case of change later
     *
     * @return Number of time slots in a day
     */
    public static int getNumTimes() {
        // magic numbers are bad style. fix later
        return 11;
    }

    @Override
    public int hashCode() {
        return calculateHash(day, hour, NUM_TIMES);
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof TestAvailability tA)) {
            return false;
        }
        return Objects.equals(this.day, tA.day) && Objects.equals(this.hour, tA.hour);
    }
}
