package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.Availability;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * An interface to access Availability data from a database
 */
public interface AvailRepo extends JpaRepository<Availability, Integer> {

    /**
     * finds an availability in a database based on its hash
     *
     * @param hash the hash to be queried
     * @return the information of the queried availability
     */
    Availability findByHash(Integer hash);
}
