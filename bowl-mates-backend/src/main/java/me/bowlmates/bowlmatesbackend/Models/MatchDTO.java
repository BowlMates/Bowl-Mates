package me.bowlmates.bowlmatesbackend.Models;

public class MatchDTO {

    private Integer matchID;
    private String matchFirstName;
    private String matchLastName;
    private String pronouns;
    private String matchPhotoURL;

    public MatchDTO(int matchID,
                    String matchFirstName,
                    String matchLastName,
                    String pronouns,
                    String matchPhotoURL) {
        this.matchID = matchID;
        this.matchFirstName = matchFirstName;
        this.matchLastName = matchLastName;
        this.pronouns = pronouns;
        this.matchPhotoURL = matchPhotoURL;
    }
}
