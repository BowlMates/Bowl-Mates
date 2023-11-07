package me.bowlmates.bowlmatesbackend.Repositories;

import me.bowlmates.bowlmatesbackend.Models.TestUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepo extends JpaRepository<TestUser, Integer> {

    TestUser findByEmail(String email);
    TestUser findByUsername(String username);
}
