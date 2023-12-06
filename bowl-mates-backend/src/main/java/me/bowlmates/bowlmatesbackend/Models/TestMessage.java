package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.*;

import java.util.Objects;

/**
 * Model representing a message in the application
 */
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
    private Long date;
    @Column
    private Integer chatterId;
    @Column
    private String message;

    /**
     * Getter for id field
     *
     * @return id field of this
     */
    public int getId() {
        return this.id;
    }

    /**
     * Getter for matchId
     *
     * @return matchId field of this
     */
    public int getMatchId() {
        return this.matchId;
    }

    /**
     * Setter for matchId
     *
     * @param matchId updated value of matchId
     */
    public void setMatchId(int matchId) {
        this.matchId = matchId;
    }

    /**
     * Getter for date
     *
     * @return date field of this
     */
    public Long getDate() {
        return this.date;
    }

    /**
     * Setter for date
     *
     * @param date updated value of date
     */
    public void setDate(Long date) {
        this.date = date;
    }

    /**
     * Getter for chatter id
     *
     * @return chatterId field of this
     */
    public int getChatterId() {
        return this.chatterId;
    }

    /**
     * Setter for chatterId
     *
     * @param chatterId updated value of chatterId
     */
    public void setChatterId(int chatterId) {
        this.chatterId = chatterId;
    }

    /**
     * Getter for message
     *
     * @return message field of this
     */
    public String getMessage() {
        return this.message;
    }

    /**
     * Setter for message
     *
     * @param message updated value of message
     */
    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * Constructs MessageDTO from fields of this
     *
     * @return Message Data Transfer Object with fields from this
     */
    public MessageDTO toMessageDTO() {
        return new MessageDTO(this.matchId,
                this.date,
                this.chatterId,
                this.message);
    }

    /**
     * Static method to calculate hash that becomes matchId
     *
     * @param id1 id of first user
     * @param id2 id of second user
     * @return matchId based on the user ids
     */
    public static int matchHash(int id1, int id2) {
        // Whatever this is, it needs to be the same, regardless of order
        int first = Math.max(id1, id2);
        int second = Math.min(id1, id2);
        return Objects.hash(first, second);
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
