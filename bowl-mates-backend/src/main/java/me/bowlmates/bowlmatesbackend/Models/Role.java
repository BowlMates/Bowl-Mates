package me.bowlmates.bowlmatesbackend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

/**
 * Used to determine user permissions
 */
@Entity
@Table(name="roles")
public class Role implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="role_id")
    private Integer roleId;

    private String authority;

    /**
     * Default Contructor
     */
    public Role() {
        super();
    }

    /**
     * Constructor
     *
     * @param authority Authority value to assign to this
     */
    public Role(String authority) {
        this.authority = authority;
    }

    /**
     * Constructor
     *
     * @param roleId id number to assign to this
     * @param authority Authority value to assign to this
     */
    public Role(Integer roleId, String authority) {
        this.roleId = roleId;
        this.authority = authority;
    }

    /**
     * Get Authority value of this
     *
     * @return authority field of this
     */
    @Override
    public String getAuthority() {
        // TODO Auto-generated method stub
        return this.authority;
    }

    /**
     * Sets authority of this
     *
     * @param authority Authority value to set field in this to
     */
    public void setAuthority(String authority) {
        this.authority = authority;
    }

    /**
     * Gets roleId of this
     *
     * @return roleId field of this
     */
    public Integer getRoleId() {
        return this.roleId;
    }

    /**
     * Sets roleId of this
     *
     * @param roleId value to set field in this to
     */
    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }
}
