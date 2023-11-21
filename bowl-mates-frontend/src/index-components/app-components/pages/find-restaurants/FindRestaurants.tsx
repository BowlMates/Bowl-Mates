// React Imports
import React, {useEffect} from "react";
import useNearbyPlaces from "../../../../hooks/useNearbyPlaces";
import MapComponent from "./find-restaurants-components/MapComponent";

// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Custom Imports
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";


// The FindRestaurants component is responsible for calling the getNearbyRestaurants function and then
// displaying all of the data returned by the API to the user
function FindRestaurants(userLocation: {lat: number; lng: number}) {
    const isSessionValid = useIsUserSessionValid();
    useEffect(()=>{
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
    });

    const {restaurants, loading, error} = useNearbyPlaces(userLocation);


    // Handle cases where there's an error or the hook hasn't finished returning yet
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // TODO: Add favoriting functionality to the restaurant finder tool as per mock up
    return (
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="stretch"
            justifyContent="center"
            padding={3}
        >
            <Box
                flex={{ xs: 1, md: 1 }}
                marginBottom={{ xs: 2, md: 0 }}
                border={{ md: '3px solid #000000' }}
                borderRadius={{ md: '4px' }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                >
                    <Typography variant="h4" gutterBottom>
                        Welcome to the Restaurant Finder Tool!
                    </Typography>
                    <MapComponent restaurants={restaurants} userLocation={userLocation}/>
                </Box>
            </Box>

            <Box
                flex={{ xs: 1, md: 1 }}
                marginLeft={{ md: 2 }}
                border={{ md: '3px solid #000000' }}
                borderRadius={{ md: '4px' }}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Typography variant="h5" gutterBottom>
                    Nearby Restaurants:
                </Typography>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id} style={{ marginBottom: '10px' }}>
                            <Typography variant="body1">
                                <strong>{restaurant.name}</strong> - {restaurant.address} - Rating: {restaurant.rating}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
}
export default FindRestaurants