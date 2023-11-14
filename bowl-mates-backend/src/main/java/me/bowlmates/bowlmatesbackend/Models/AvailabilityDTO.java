package me.bowlmates.bowlmatesbackend.Models;

/**
 * Used for passing availability info frontend <-> backend
 */
public class AvailabilityDTO {

    private Integer day;
    private Integer time;

    /**
     * Constructor for this
     * @param day day value to set
     * @param time time value to set
     */
    public AvailabilityDTO(Integer day, Integer time) {
        this.day = day;
        this.time = time;
    }

    /**
     * Sets day
     * @param day value to be set to
     */
    public void setDay(int day) {
        this.day = day;
    }

    /**
     * Gets day
     * @return day field of this
     */
    public int getDay() {
        return this.day;
    }

    /**
     * Sets time
     * @param time value to be set to
     */
    public void setTime(int time) {
        this.time = time;
    }

    /**
     * Gets time
     * @return time field of this
     */
    public int getTime() {
        return this.time;
    }
}
