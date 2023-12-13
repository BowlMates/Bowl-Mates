package me.bowlmates.bowlmatesbackend.Models;

/**
 * Used for passing restaurant info frontend <-> backend
 */
public class RestaurantDTO {

    private String id;
    private String name;
    private String address;
    private String cuisine;
    private Float rating;
    private Float latitude;
    private Float longitude;
    private String reference;

    /**
     * Default constructor
     */
    public RestaurantDTO() {
        super();
    }

    /**
     * Constructor that takes TestRestaurant object
     *
     * @param restaurant TestRestaurant object to define fields of this
     */
    public RestaurantDTO(Restaurant restaurant) {
        super();
        this.id = restaurant.getId();
        this.name = restaurant.getRestaurant_name();
        this.address = restaurant.getAddress();
        this.cuisine = restaurant.getCuisine();
        this.latitude = restaurant.getLatitude();
        this.longitude = restaurant.getLongitude();
        this.rating = restaurant.getRating();
        this.reference = restaurant.getReference();
    }

    /**
     * Gets name
     *
     * @return name of this
     */
    public String getName() {
        return this.name;
    }

    /**
     * Sets name
     *
     * @param name String to set name of this to
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns name of this as String
     *
     * @return String with restaurant name labeled
     */
    public String toString(){
        return "Restaurant info: name: " + this.name;
    }

    /**
     * Gets address
     *
     * @return address of this
     */
    public String getAddress() {
        return address;
    }

    /**
     * Sets address
     *
     * @param address String to set address of this to
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * Gets cuisine
     *
     * @return cuisine field of this
     */
    public String getCuisine() {
        return cuisine;
    }

    /**
     * Sets cuisine
     *
     * @param cuisine String to set cuisine field of this to
     */
    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    /**
     * Gets rating
     *
     * @return rating field of this
     */
    public Float getRating() {
        return rating;
    }

    /**
     * Sets rating
     *
     * @param rating Integer to set rating of this to
     */
    public void setRating(Float rating) {
        this.rating = rating;
    }

    /**
     * Gets id
     *
     * @return id field of this
     */
    public String getId() {
        return id;
    }

    /**
     * Sets id
     *
     * @param id value to set id of this to
     */
    public void setId(String id) {
        this.id = id;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }
}
