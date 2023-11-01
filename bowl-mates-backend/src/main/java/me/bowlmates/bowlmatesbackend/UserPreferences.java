package me.bowlmates.bowlmatesbackend;
import jakarta.persistence.*;
@Entity
@Table(name = "UserPreference")
public class UserPreferences {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private TestUser user;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private TestRestaurant testRestaurant;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}