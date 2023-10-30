package me.bowlmates.bowlmatesbackend;

import org.springframework.data.repository.CrudRepository;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepo extends CrudRepository<TestUser, Integer> {
    TestUser findByEmail(String email);
    TestUser findByUsername(String username);
}
