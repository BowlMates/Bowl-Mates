import React from "react";
import useNearbyPlaces from "../../../../hooks/useNearbyPlaces";
import MapComponent from "./find-restaurants-components/MapComponent";

// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useGetPhotos from "../../../../hooks/useGetPhotos";
import RestaurantList from "./find-restaurants-components/RestaurantList";


// The FindRestaurants component is responsible for calling the getNearbyRestaurants function and then
// displaying all of the data returned by the API to the user
function FindRestaurants(userLocation: {lat: number; lng: number}) {
    const {restaurants, placesLoading, placesError} = useNearbyPlaces(userLocation);
    const {photos, photosLoading, photosError} = useGetPhotos(restaurants);

    // Handle cases where there's an error or the hook hasn't finished returning yet
    if (placesLoading || photosLoading) {
        return <div>Loading...</div>;
    }

    if (placesError) {
        return <div>Error: {placesError.message}</div>;
    }

    if(photosError){
        return <div>Error: {photosError.message}</div>
    }

    // TODO: Add favoriting functionality to the restaurant finder tool as per mock up
    return (
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="stretch"
            justifyContent="center"
            padding={3}
            height="100%"
        >
            {/* Map Component Box */}
            <Box
                flex={{ xs: 1, md: 1 }}
                marginBottom={{ xs: 2, md: 0 }}
                border={{ md: '3px solid #000000' }}
                borderRadius={{ md: '4px' }}
                height="100%"
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

            {/* Nearby Restaurants List Box with Scrollbar */}
            <Box
                flex={{ xs: 1, md: 1 }}
                marginLeft={{ md: 2 }}
                border={{ md: '3px solid #000000' }}
                borderRadius={{ md: '4px' }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                overflow="auto" // Add overflow property for scrollbar
                maxHeight="100%" // Set a fixed height to trigger the scrollbar
                padding="20px"
            >
                <Typography variant="h5" gutterBottom>
                    Nearby Restaurants:
                </Typography>
                <RestaurantList restaurants={restaurants} photos={photos}/>
            </Box>
        </Box>
    );
}
export default FindRestaurants