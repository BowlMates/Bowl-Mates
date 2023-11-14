package me.bowlmates.bowlmatesbackend.Models;


/**
 * Used to receive user info from frontend registration
 */
public class RegistrationDTO {

    private String name;
    private String username;
    private String password;
    private String email;

    /**
     * Default constructor
     */
    public RegistrationDTO() {
        super();
    }

    /**
     * Constructor
     *
     * @param name name field for user
     * @param username username field for user
     * @param password password field for user
     * @param email email field for user
     */
    public RegistrationDTO(String name,
                           String username,
                           String password,
                           String email) {
        super();
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    /**
     * Gets name
     *
     * @return name field of this
     */
    public String getName() {
        return this.name;
    }

    /**
     * Sets name
     *
     * @param name String to set name field of this to
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets username
     *
     * @return username field of this
     */
    public String getUsername() {
        return this.username;
    }

    /**
     * Sets username
     *
     * @param username String to set username field of this to
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * Gets password
     *
     * @return password field of this
     */
    public String getPassword() {
        return this.password;
    }

    /**
     * Sets password
     *
     * @param password String to set password field of this to
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * Gets email
     *
     * @return password field of this
     */
    public String getEmail() {
        return this.email;
    }

    /**
     * Sets email
     *
     * @param email String to set email field of this to
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Represents fields of this as string
     *
     * @return this formatted as a String with fields labeled
     */
    public String toString() {
        return "Registration info: name: " + this.name + "username: " +
                this.username + " password: " + this.password + " email: " + this.email;
    }
}
