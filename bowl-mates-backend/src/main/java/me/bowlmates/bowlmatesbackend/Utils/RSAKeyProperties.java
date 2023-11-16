package me.bowlmates.bowlmatesbackend.Utils;

import java.security.KeyPair;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

import org.springframework.stereotype.Component;

/**
 * Represents a class that holds RSA public and private keys.
 * This class provides methods to access and modify these keys.
 */
@Component
public class RSAKeyProperties {

    private RSAPublicKey publicKey;
    private RSAPrivateKey privateKey;

    /**
     * Default constructor that generates a new RSA key pair
     * and initializes the public and private keys.
     */
    public RSAKeyProperties(){
        KeyPair pair = KeyGeneratorUtility.generateRsaKey();
        this.publicKey = (RSAPublicKey) pair.getPublic();
        this.privateKey = (RSAPrivateKey) pair.getPrivate();
    }

    /**
     * Retrieves the RSA public key.
     *
     * @return The RSA public key
     */
    public RSAPublicKey getPublicKey() {
        return this.publicKey;
    }

    /**
     * Sets the public key
     *
     * @param publicKey the public key to be set
     */
    public void setPublicKey(RSAPublicKey publicKey) {
        this.publicKey = publicKey;
    }

    /**
     * Retrieves the RSA private key
     *
     * @return the RSA private key
     */
    public RSAPrivateKey getPrivateKey() {
        return this.privateKey;
    }

    /**
     * Sets the private key
     *
     * @param privateKey the private key to be set
     */
    public void setPrivateKey(RSAPrivateKey privateKey) {
        this.privateKey = privateKey;
    }

}