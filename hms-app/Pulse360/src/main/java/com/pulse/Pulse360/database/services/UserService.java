package com.pulse.Pulse360.database.services;

import com.pulse.Pulse360.database.models.User;
import com.pulse.Pulse360.database.repositories.UserCRUD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserCRUD userCRUD;

    public User addUser(User user) {


        return userCRUD.save(user);

    }



}
