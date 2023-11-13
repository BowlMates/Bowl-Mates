package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "test_availability")
public class TestAvailability {
    @jakarta.persistence.Id
    @GeneratedValue(strategy= GenerationType.AUTO)

    private final int num_times = 11;

    @Column
    private Integer hour;
    @Column
    private Integer day;
    @Column(unique = true)
    private Integer hash;

    public TestAvailability() {
        hour = 0;
        day = 0;
        hash = 0;
    }

    private int calculateHash() {
        return this.day * num_times + this.hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
        this.hash = calculateHash();
    }

    public int getHour() {
        return this.hour;
    }

    public void setDay(int day) {
        this.day = day;
        this.hash = calculateHash();
    }

    public int getDay() {
        return this.day;
    }

    @Override
    public int hashCode() {
        return this.day * num_times + this.hour;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof TestAvailability tA)) {
            return false;
        }
        return Objects.equals(this.day, tA.day) && Objects.equals(this.hour, tA.hour);
    }
}
