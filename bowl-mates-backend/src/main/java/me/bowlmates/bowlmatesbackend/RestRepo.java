package me.bowlmates.bowlmatesbackend;
import org.springframework.data.repository.CrudRepository;

public interface RestRepo extends CrudRepository<TestRestaurant, Integer>{
    TestRestaurant findByAddress(String address);
}
