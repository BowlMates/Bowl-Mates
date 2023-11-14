package me.bowlmates.bowlmatesbackend.Models;

public class RestaurantDTO {

    private Integer id;
    private String name;
    private String address;
    private String cuisine;
    private Integer rating;

    public RestaurantDTO() {
        super();
    }

    public RestaurantDTO(TestRestaurant restaurant) {
        super();
        this.id = restaurant.getId();
        this.name = restaurant.getRestaurant_name();
        this.address = restaurant.getAddress();
        this.cuisine = restaurant.getCuisine();
        this.rating = restaurant.getRating();
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString(){
        return "Restaurant info: name: " + this.name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
