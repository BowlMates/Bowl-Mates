package me.bowlmates.bowlmatesbackend;

import me.bowlmates.bowlmatesbackend.Models.TestUser;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import static org.junit.jupiter.api.Assertions.assertEquals;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TestUserJUnitTest {

    TestUser u1;
    
    @BeforeAll
    private void setUp() {
        u1 = new TestUser();
    }

    @Test
    public void TestUserNameFunctions() {
        u1.setName("u1");
        assertEquals(u1.getName(), "u1");
    }

    @Test
    public void TestUserIDFunctions() {
        u1.setId(1);
        assertEquals(u1.getId(), 1);
    }

    @Test
    public void TestUserEmailFunctions() {
        u1.setEmail("u1@mail.com");
        assertEquals(u1.getEmail(), "u1@mail.com");
    }

    @Test
    public void TestUsernameFunctions() {
        u1.setUsername("u1");
        assertEquals(u1.getUsername(), "u1");
    }

    @Test
    public void TestPasswordFunctions() {
        u1.setPassword("password");
        assertEquals(u1.getPassword(), "password");
    }
}
