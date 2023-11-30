package me.bowlmates.bowlmatesbackend.Models;

import java.io.Serializable;

/**
 * A node representing the matching potential of a given user
 */
public class QueueNode implements Serializable, Comparable<QueueNode> {
    private int key;
    private int value;

    /**
     * constructs this
     *
     * @param key the int key of this that represents the user
     * @param value the int value of this that represents the matching potential
     */
    public QueueNode(int key, int value) {
        this.key = key;
        this.value = value;
    }

    /**
     * sets the key to a given value
     *
     * @param key the key to be set
     */
    public void setKey(int key) {
        this.key = key;
    }

    /**
     * Gets the key of this
     *
     * @return the key
     */
    public int getKey() {
        return key;
    }

    /**
     * sets the value of this
     *
     * @param value the value to be set
     */
    public void setValue(int value) {
        this.value = value;
    }

    /**
     * gets the value of this
     *
     * @return this value
     */
    public int getValue() {
        return value;
    }

    @Override
    public int compareTo(QueueNode other) {
        return Integer.compare(other.value, this.value);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        QueueNode that = (QueueNode) obj;
        return key == that.key;
    }

    @Override
    public int hashCode() {
        return this.key;
    }
}

