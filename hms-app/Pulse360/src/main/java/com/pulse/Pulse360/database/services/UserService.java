package com.pulse.Pulse360.database.services;

import com.pulse.Pulse360.config.SecurityConfig;
import com.pulse.Pulse360.database.models.User;
import com.pulse.Pulse360.database.repositories.UserCRUD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.stereotype.Service;


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

//    public boolean loginUser(String email, String password,String role) {
//        Optional<User> userOptional = userCRUD.findByEmail(email);
//        if(userOptional.isEmpty()) {
//
//
//            return false;
//        }
//        User user = userOptional.get();
//
//    }


}
