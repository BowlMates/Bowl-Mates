package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "test_availability")
public class TestAvailability {
    @jakarta.persistence.Id
    @GeneratedValue(strategy= GenerationType.AUTO)

    private final int NUM_TIMES = 11;

    @ManyToMany(mappedBy = "availability")
    private Set<TestUser> users;

    @Column
    private Integer hour;
    @Column
    private Integer day;
    @Column(unique = true)
    private Integer hash;

    public static int calculateHash(int day, int hour, int numTimes) {
        return day * numTimes + hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
        this.hash = this.hashCode();
    }

    public int getHour() {
        return this.hour;
    }

    public void setDay(int day) {
        this.day = day;
        this.hash = this.hashCode();
    }

    public int getDay() {
        return this.day;
    }

    public void addUser(TestUser user) {
        users.add(user);
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
