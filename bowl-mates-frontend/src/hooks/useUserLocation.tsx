import React, { useEffect, useState } from 'react';

interface UserLocation{
    latitude: number;
    longitude: number;
}
interface UseUserLocationResult{
    location: UserLocation | null;
    error: string | null;
}

// Hook to get user location data from their browser using navigator.geolocation library
const useUserLocation = (): UseUserLocationResult => {
    const [location, setLocation] = useState<UserLocation | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getLocation = () => {
            // All this does is check if the browser allows for geolocation data
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    // In success case, get the coordinate data and set it to these variables and then
                    // pass them to the state update function as UserLocation type
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude } as UserLocation);
                    },
                    (err) => {
                        // In error case, set error state from response
                        setError(err.message);
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };

        getLocation();

        // Clean up any subscriptions or resources if needed
        return () => {
            // Cleanup code goes here
        };
    }, []);

    return {location, error};
}

export default useUserLocation;