package me.bowlmates.bowlmatesbackend.Models;

public class MessageDTO {

    private Integer matchId;
    private Integer date;
    private Integer chatterId;
    private String message;

    public MessageDTO() {
        this.matchId = 0;
        this.date = 0;
        this.chatterId = 0;
        this.message = "";
    }

    public MessageDTO(int matchId,
                      int date,
                      int chatterId,
                      String message) {
        this.matchId = matchId;
        this.date = date;
        this.chatterId = chatterId;
        this.message = message;
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

}
