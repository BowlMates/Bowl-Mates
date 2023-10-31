package me.bowlmates.bowlmatesbackend;

import java.util.List;
import java.util.ArrayList;

//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//import java.io.ByteArrayInputStream;
//import java.io.ByteArrayOutputStream;
//import java.io.ObjectInputStream;
//import java.io.ObjectOutputStream;
//import java.io.Serializable;

public class User {
    private String username;
    // we may want to abstract away the password field somehow. Storing it in every java object
    // seems a bit sketchy.
    private String password;
    private List<String> matches;
    private List<String> rejections;
    private List<String> approved;
    // private OurPriorityQueue matchingQueue;

    /*
     * This will be the javadoc comment for the constructor
     *
     * @param username a String representing the user id
     * @param password a String representing the user password
     */

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        matches = new ArrayList<>();
        rejections = new ArrayList<>();
        approved = new ArrayList<>();
    }

    /**
     *
     * @return username
     */
    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public List<String> getMatches() {
        return this.matches;
    }

    public List<String> getRejections() {
        return this.rejections;
    }

    public  List<String> getApproved() {
        return this.approved;
    }

    public boolean setUsername(String username) {
        return true;
    }

    public boolean setPassword(String password) {
        return true;
    }

    public boolean setMatches(List<String> matches) {
        return true;
    }

    public boolean setRejections(List<String> rejections) {
        return true;
    }

    public boolean setApproved(List<String> approved) {
        return true;
    }

    public boolean approve() {
        return true;
    }

    public boolean reject() {
        return true;
    }

    public boolean match() {
        return true;
    }


}
