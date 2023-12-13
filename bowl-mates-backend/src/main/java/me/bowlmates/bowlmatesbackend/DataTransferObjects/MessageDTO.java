package me.bowlmates.bowlmatesbackend.DataTransferObjects;

public class MessageDTO {

    private Integer matchId;
    private Long date;
    private Integer chatterId;
    private String message;

    public MessageDTO() {
        this.matchId = 0;
        this.date = 0L;
        this.chatterId = 0;
        this.message = "";
    }

    public MessageDTO(int matchId,
                      long date,
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

    public long getDate() {
        return this.date;
    }

    public void setDate(long date) {
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
