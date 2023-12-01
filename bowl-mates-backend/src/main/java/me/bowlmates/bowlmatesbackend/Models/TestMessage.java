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
    private Long date;
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

    public Long getDate() {
        return this.date;
    }

    public void setDate(Long date) {
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

    public MessageDTO toMessageDTO() {
        return new MessageDTO(this.matchId,
                this.date,
                this.chatterId,
                this.message);
    }

    public static int matchHash(int id1, int id2) {
        // Whatever this is, it needs to be the same, regardless of order
        return id1 * id2 - id1 - id2;
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
