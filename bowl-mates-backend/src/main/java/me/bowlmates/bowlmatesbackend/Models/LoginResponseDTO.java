package me.bowlmates.bowlmatesbackend.Models;

/**
 * Used for passing login response to frontend
 */
public class LoginResponseDTO {
    private String username;
    private String jwt;
    private Integer id;

    /**
     * Default constructor
     */
    public LoginResponseDTO() {
        super();
    }

    /**
     * Constructor
     *
     * @param user TestUser to grab username from
     * @param jwt generated json web token
     */
    public LoginResponseDTO(TestUser user, String jwt) {
        this.username = user.getUsername();
        this.id = user.getId();
        this.jwt = jwt;
    }

    /**
     * Gets username
     *
     * @return username of this
     */
    public String getUser() {
        return this.username;
    }

    /**
     * Sets username
     *
     * @param username String to set username to
     */
    public void setUser(String username) {
        this.username = username;
    }

    public Integer getId() {return this.id;}

    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets jwt
     *
     * @return jwt stored in this
     */
    public String getJwt() {
        return this.jwt;
    }

    /**
     * Sets jwt
     *
     * @param jwt value to assign to jwt in this
     */
    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

}