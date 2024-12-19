package com.pulse.Pulse360.database.repositories;

import com.pulse.Pulse360.database.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCRUD extends JpaRepository<User, Integer> {

    
}
