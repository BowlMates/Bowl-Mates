package me.bowlmates.bowlmatesbackend.Models;

public class RestaurantDTO {

    private String name;

    public RestaurantDTO(){
        super();
    }

    public RestaurantDTO(String name){
        super();
        this.name = name;
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
}
