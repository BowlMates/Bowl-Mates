package me.bowlmates.bowlmatesbackend.Repositories;
import me.bowlmates.bowlmatesbackend.Models.TestRestaurant;
import org.springframework.data.repository.CrudRepository;

public interface RestRepo extends CrudRepository<TestRestaurant, Integer>{
    TestRestaurant findByAddress(String address);
}
