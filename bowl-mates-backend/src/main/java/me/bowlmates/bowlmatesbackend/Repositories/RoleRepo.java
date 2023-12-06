package me.bowlmates.bowlmatesbackend.Repositories;

import java.util.Optional;

import me.bowlmates.bowlmatesbackend.Models.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * An interface to access role data from a database
 */
@Repository
public interface RoleRepo extends JpaRepository<Role, Integer> {

    /**
     * finds a role in a database based on their authority
     *
     * @param authority the authority to be queried
     * @return the information of the queried authority
     */
    Optional<Role> findByAuthority(String authority);
}
