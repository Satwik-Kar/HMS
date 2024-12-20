package com.pulse.Pulse360.database.repositories;

import com.pulse.Pulse360.database.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserCRUD extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

}
