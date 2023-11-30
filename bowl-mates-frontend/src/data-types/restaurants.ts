// Interface for restaurant objects to be used throughout the entirety of the app
export interface restaurant {
    id : number;
    name : string;
    address : string;
    cuisine : string;
    rating : number;
    latitude: number;
    longitude: number;
    reference: string;
}


// Created a new interface for parsing the JSON api response and converting it into regular restaurant objects
// Anytime we want to pull new information from the api we just update this interface
export interface restaurantJSON{
    id: string;
    formattedAddress: string;
    location: {
        latitude: number;
        longitude: number;
    }
    rating: string;
    displayName: {
        text: string;
        languageCode: string;
    };
    primaryType: string;
    photos: photo[];
}

// Created photo data type to allow us to parse the array of photo information returned from Nearby Places (New) API
export interface photo {
    name: string;
    widthPx: number;
    heightPx: number;
    authorAttributions: {
        displayName: string;
        uri: string;
        photoUri: string;
    }
}