// Interface for restaurant objects to be used throughout the entirety of the app
export interface restaurant {
    id : number,
    name : string,
    address : string,
    cuisine : string,
    rating : number
    latitude: number
    longitude: number
}


// Created a new interface for parsing the JSON api response and converting it into regular restaurant objects
// Anytime we want to pull new information from the api we just update this interface
export interface restaurantJSON{
    id: string;
    formattedAddress: string;
    location: {
        latitude: number
        longitude: number
    }
    rating: string;
    displayName: {
        text: string;
        languageCode: string;
    };
    primaryType: string;
}