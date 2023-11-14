import { useEffect, useState } from 'react';
import {restaurant, restaurantJSON} from "../data-types/restaurants";
import useUserLocation from "./useUserLocation";

// Define a type interface so that the FindRestaurants component knows the type of the return
interface UseNearbyPlacesResult {
    restaurants: restaurant[];
    loading: boolean;
    error: Error | null;
}

// Constant for UW location data in case useUserLocation fails to retrieve user location data
const uwCoords = {
    lat: 47.6550,
    lng: -122.3080,
};

const useNearbyPlaces = (userLocation: {lat: number, lng: number}): UseNearbyPlacesResult => {
    // Initialize state variables and their set functions, restaurants will contain all of our data from the API call
    const [restaurants, setRestaurants] = useState<restaurant[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);


    // Probably bad but i don't know how else to do this
    const apiKey = "AIzaSyBQ_hQeijI05VaIoVXCStdM9ff-yc9T3jA"

    // Generate POST request to Google Nearby Places (New) API.
    // Documentation: https://developers.google.com/maps/documentation/places/web-service/nearby-search
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.primaryType,places.rating,places.location'
        },
        body: JSON.stringify({
            includedTypes: ['restaurant'],
            maxResultCount: 20,
            locationRestriction: {
                circle: {
                    center: {
                        latitude: userLocation.lat,
                        longitude: userLocation.lng,
                    },
                    radius: 5000.0,
                },
            },
        }),
    };

    useEffect(() => {
        const fetchData = async () => {
            try {

                // Send the POST request and await the response
                const response = await fetch('https://places.googleapis.com/v1/places:searchNearby', requestOptions);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                // Here we map the data from the api call onto our restaurant objects using an intermediary
                // See comment in restaurants interface for more info on restaurantJSON class
                const restaurantData = data.places.map((place: restaurantJSON) => ({
                    id: place.id || '',
                    name: place.displayName?.text || 'Unknown Name',
                    address: place.formattedAddress || 'Unknown Address',
                    rating: place.rating || 0,
                    cuisine: place.primaryType || 'Unknown Cuisine',
                    latitude: place.location.latitude || 0.0,
                    longitude: place.location.longitude || 0.0
                }));

                console.log(restaurantData)

                // Update the state and handle any errors
                setRestaurants(restaurantData)
                setLoading(false)
            } catch (error: any) {
                setError(error as Error);
                setLoading(false);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that the effect runs once when the component mounts


    return { restaurants, loading, error };
};

export default useNearbyPlaces;
