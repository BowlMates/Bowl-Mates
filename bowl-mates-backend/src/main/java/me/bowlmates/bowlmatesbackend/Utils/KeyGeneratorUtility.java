package me.bowlmates.bowlmatesbackend.Utils;

import java.security.KeyPair;
import java.security.KeyPairGenerator;

/**
 * Utility class for generating cryptographic keys.
 */
public class KeyGeneratorUtility {

    /**
     * Generates a new RSA KeyPair.
     *
     * @return the generated {@link KeyPair}
     * @throws IllegalStateException if an error occurs during key generation
     */
    public static KeyPair generateRsaKey() {

        KeyPair keyPair;
        try {
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            keyPairGenerator.initialize(2048);
            keyPair = keyPairGenerator.generateKeyPair();

        } catch(Exception e){
            throw new IllegalStateException();
        }
        return keyPair;
    }

}