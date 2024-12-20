package com.pulse.Pulse360;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

import javax.crypto.KeyGenerator;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

@SpringBootApplication
@PropertySource("classpath:/.env")

public class Pulse360Application {

    public static void main(String[] args) {
        SpringApplication.run(Pulse360Application.class, args);
    }

}
