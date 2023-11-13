import { useEffect, useState } from 'react';
import {restaurant, restaurantJSON} from "../data-types/restaurants";

// Assuming a type for the hook return
interface UseNearbyPlacesResult {
    restaurants: restaurant[];
    loading: boolean;
    error: Error | null;
}
const useNearbyPlaces = (): UseNearbyPlacesResult => {
    const [restaurants, setRestaurants] = useState<restaurant[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    //TODO: Figure out how to get user location data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const uwCoords = {
                    lat: 47.6550,
                    lng: -122.3080,
                };
                const apiKey = "AIzaSyBQ_hQeijI05VaIoVXCStdM9ff-yc9T3jA"

                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Goog-Api-Key': apiKey,
                        'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.primaryType,places.rating'
                        },
                    body: JSON.stringify({
                        includedTypes: ['restaurant'],
                        maxResultCount: 20,
                        locationRestriction: {
                            circle: {
                                center: {
                                    latitude: uwCoords.lat,
                                    longitude: uwCoords.lng,
                                },
                                radius: 1000.0,
                            },
                        },
                    }),
                };

                const response = await fetch('https://places.googleapis.com/v1/places:searchNearby', requestOptions);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();


                const restaurantData = data.places.map((place: restaurantJSON) => ({
                    id: place.id || '',
                    name: place.displayName?.text || 'Unknown Name',
                    address: place.formattedAddress || 'Unknown Address',
                    rating: place.rating || 0,
                    cuisine: place.primaryType || 'Unknown Cuisine',
                }));

                console.log(restaurantData)

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
