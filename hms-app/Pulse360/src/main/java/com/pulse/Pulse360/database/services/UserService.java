package com.pulse.Pulse360.database.services;

import com.pulse.Pulse360.database.models.User;
import com.pulse.Pulse360.database.JPArepositories.UserCRUD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserService {
    @Autowired
    private UserCRUD userCRUD;

    @Autowired
    private EncryptionService encryptionService;

    public User addUser(User user) {
        String encryptedEmail = encryptionService.encrypt(user.getEmail());
        String encryptedPhoneNumber = encryptionService.encrypt(user.getPhoneNumber());
        String encryptedAddress = encryptionService.encrypt(user.getAddress());
        user.setEmail(encryptedEmail);
        user.setPhoneNumber(encryptedPhoneNumber);
        user.setAddress(encryptedAddress);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        return userCRUD.save(user);

    }

    public boolean isLoginUser(User rawUser) {
        List<User> userList = userCRUD.findAll();
        boolean isLogin = false;
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        for (User user : userList) {
            String decryptedEmail = encryptionService.decrypt(user.getEmail());
            if (decryptedEmail.equals(rawUser.getEmail())) {
                boolean passwordMatch = passwordEncoder.matches(rawUser.getPassword(), user.getPassword());
                boolean roleMatch = user.getRole().equals(rawUser.getRole());
                if (passwordMatch && roleMatch) {
                    isLogin = true;
                }

            }


        }
        return isLogin;


    }


}
