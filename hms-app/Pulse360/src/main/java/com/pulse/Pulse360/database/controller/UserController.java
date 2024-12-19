package com.pulse.Pulse360.database.controller;

import com.pulse.Pulse360.database.models.User;
import com.pulse.Pulse360.database.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User postDetails(@RequestBody User user) {
        return userService.addUser(user);


    }

}
