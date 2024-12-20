package com.pulse.Pulse360.database.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.encrypt.TextEncryptor;

@Service
public class EncryptionService {

    private final TextEncryptor textEncryptor;

    @Autowired
    public EncryptionService(TextEncryptor textEncryptor) {
        this.textEncryptor = textEncryptor;
    }

    /**
     * Encrypts the given data.
     *
     * @param data The data to encrypt.
     * @return The encrypted data as a string.
     */
    public String encrypt(String data) {
        return textEncryptor.encrypt(data);
    }

    /**
     * Decrypts the given encrypted data.
     *
     * @param encryptedData The encrypted data to decrypt.
     * @return The decrypted data as a string.
     */
    public String decrypt(String encryptedData) {
        return textEncryptor.decrypt(encryptedData);
    }
}
