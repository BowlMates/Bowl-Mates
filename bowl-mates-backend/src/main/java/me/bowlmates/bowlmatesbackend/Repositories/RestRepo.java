package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.TestRestaurant;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * An interface to access restaurant data from a database
 */
public interface RestRepo extends JpaRepository<TestRestaurant, Integer> {

    /**
     * finds a restaurant in a database based on its address
     *
     * @param address the address to be queried
     * @return the information of the queried restaurant
     */
    TestRestaurant findByAddress(String address);

    /**
     * finds a restaurant in a database based on its name
     *
     * @param name the name of the restaurant
     * @return the information of the queried restaurant
     */
    TestRestaurant findByName(String name);
}
