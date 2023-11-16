package me.bowlmates.bowlmatesbackend;

import me.bowlmates.bowlmatesbackend.Models.TestRestaurant;
import me.bowlmates.bowlmatesbackend.Models.TestUser;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TestRestaurantJUnitTest {

    TestRestaurant r1;

    @BeforeAll
    private void setUp() {
        r1 = new TestRestaurant();
    }

    @Test
    public void TestRestaurantIDFunctions() {
        r1.setId(1);
        assertEquals(1, r1.getId());
        r1.setId(2);
        assertEquals(2, r1.getId());
    }

    @Test
    public void TestRestaurantNameFunctions() {
        r1.setRestaurant_name("r1");
        assertEquals("r1", r1.getRestaurant_name());
        r1.setRestaurant_name("notr1");
        assertEquals("notr1", r1.getRestaurant_name());
    }

    @Test
    public void TestRestaurantAddressFunctions() {
        r1.setAddress("123 Street St");
        assertEquals("123 Street St", r1.getAddress());
        r1.setAddress("124 notstreet st");
        assertEquals("124 notstreet st", r1.getAddress());
    }

    @Test
    public void TestRestaurantCuisineFunctions() {
        r1.setCuisine("Generic");
        assertEquals("Generic", r1.getCuisine());
        r1.setCuisine("notGeneric");
        assertEquals("notGeneric", r1.getCuisine());
    }

    @Test
    public void TestRestaurantRatingFunctions() {
        r1.setRating(1);
        assertEquals(1, r1.getRating());
        r1.setRating(2);
        assertEquals(2, r1.getRating());
    }

    @Test
    public void TestRestaurantUserFunctions() {
        TestUser u1 = new TestUser();
        u1.setEmail("u1@mail.com");
        TestUser u2 = new TestUser();
        u2.setEmail("u2@mail.com");
        Set<TestUser> userSet = new HashSet<>();
        userSet.add(u1);
        r1.setUsers(userSet);
        assertTrue(r1.getUsers().contains(u1));
        assertFalse(r1.getUsers().contains(u2));
        userSet.add(u2);
        userSet.remove(u1);
        assertTrue(r1.getUsers().contains(u2));
        assertFalse(r1.getUsers().contains(u1));
    }
}
