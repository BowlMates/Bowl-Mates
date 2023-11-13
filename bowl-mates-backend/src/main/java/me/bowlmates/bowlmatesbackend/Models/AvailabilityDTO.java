package me.bowlmates.bowlmatesbackend.Models;

public class AvailabilityDTO {

    private Integer day;
    private Integer time;

    public AvailabilityDTO(Integer day, Integer time) {
        this.day = day;
        this.time = time;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getDay() {
        return this.day;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public int getTime() {
        return this.time;
    }
}
