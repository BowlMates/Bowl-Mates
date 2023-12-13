package me.bowlmates.bowlmatesbackend;

import me.bowlmates.bowlmatesbackend.Models.User;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UserJUnitTest {

    User u1;
    
    @BeforeAll
    private void setUp() {
        u1 = new User();
    }

    // Getter and Setter function tests
    // Verifies all class fields are mutable and not hard coded

    @Test
    public void TestUserEmailFunctions() {
        u1.setEmail("u1@mail.com");
        assertEquals("u1@mail.com", u1.getEmail());
        u1.setEmail("notu1@mail.com");
        assertEquals("notu1@mail.com", u1.getEmail());
    }

    @Test
    public void TestUsernameFunctions() {
        u1.setUsername("u1");
        assertEquals("u1", u1.getUsername());
        u1.setUsername("notu1");
        assertEquals("notu1", u1.getUsername());
    }

    @Test
    public void TestPasswordFunctions() {
        u1.setPassword("password");
        assertEquals("password", u1.getPassword());
        u1.setPassword("notPassword");
        assertEquals("notPassword", u1.getPassword());
    }
}
