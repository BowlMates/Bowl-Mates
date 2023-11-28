package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

//TODO: Documentation
@Entity
@Table(name = "table_message")
public class TestMessage {
    @jakarta.persistence.Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(unique = true)
    private Integer id; // Change to Integer type as it's typically used for IDs
    @Column
    private Integer matchId;
    @Column
    private Integer date;
    @Column
    private Integer chatterId;
    @Column
    private String message;

    public int getId() {
        return this.id;
    }

    public int getMatchId() {
        return this.matchId;
    }

    public void setMatchId(int matchId) {
        this.matchId = matchId;
    }

    public int getDate() {
        return this.date;
    }

    public void setDate(int date) {
        this.date = date;
    }

    public int getChatterId() {
        return this.chatterId;
    }

    public void setChatterId(int chatterId) {
        this.chatterId = chatterId;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public int hashCode() {
        return this.id;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof TestMessage tm)) {
            return false;
        }
        return this.id.equals(tm.id);
    }

}
