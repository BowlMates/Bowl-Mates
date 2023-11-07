package me.bowlmates.bowlmatesbackend.Repositories;
import java.util.Optional;

import me.bowlmates.bowlmatesbackend.Models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<Role, Integer>{
    Optional<Role> findByAuthority(String authority);
}
