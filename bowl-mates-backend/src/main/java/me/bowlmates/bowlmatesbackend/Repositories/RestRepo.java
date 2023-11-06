package me.bowlmates.bowlmatesbackend.Repositories;
import me.bowlmates.bowlmatesbackend.Models.TestRestaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestRepo extends JpaRepository<TestRestaurant, Integer>{
    TestRestaurant findByAddress(String address);
    TestRestaurant findByName(String name);
}
