<<<<<<< HEAD

// React Imports
import React, {useEffect, useMemo} from "react";
=======
import React from "react";
>>>>>>> backend-convo
import useNearbyPlaces from "../../../../hooks/useNearbyPlaces";
import MapComponent from "./find-restaurants-components/MapComponent";
import {useGetRestaurants} from "../../../../hooks/useGetRestaurants";
import {restaurant} from "../../../../data-types/restaurants";

// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useGetPhotos from "../../../../hooks/useGetPhotos";
<<<<<<< HEAD
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import RestaurantList from "./find-restaurants-components/RestaurantList";
import FavoriteList from "./find-restaurants-components/FavoriteList";
=======
import RestaurantList from "./find-restaurants-components/RestaurantList";

>>>>>>> backend-convo

// The FindRestaurants component is responsible for calling the getNearbyRestaurants function and then
// displaying all the data returned by the API to the user
function FindRestaurants(userLocation: {lat: number; lng: number}) {
<<<<<<< HEAD
    const {restaurants, placesError} = useNearbyPlaces(userLocation);
    const {photos, photosError} = useGetPhotos(restaurants);
    const {favRes, getRestaurants} = useGetRestaurants();
    const memoizedRestaurants = useMemo(() => restaurants, [restaurants]);
    const memoizedPhotos = useMemo(() => photos, [photos]);

    let restaurantWithPhotos: restaurant[] = [];

    for(let i = 0; i < memoizedRestaurants.length; i++){
        let splicedRest: restaurant = {
            id: memoizedRestaurants[i].id,
            name: memoizedRestaurants[i].name,
            address: memoizedRestaurants[i].address,
            cuisine: memoizedRestaurants[i].cuisine,
            rating: memoizedRestaurants[i].rating,
            latitude: memoizedRestaurants[i].latitude,
            longitude: memoizedRestaurants[i].longitude,
            reference: memoizedPhotos[i]
        }

        restaurantWithPhotos.push(splicedRest);
    }

    const isSessionValid = useIsUserSessionValid();

    useEffect(()=>{
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
    });

    // Fetch favorite restaurants on component mount
    useEffect(()=>{
        getRestaurants();
    },[favRes]);
=======
    const {restaurants, placesLoading, placesError} = useNearbyPlaces(userLocation);
    const {photos, photosLoading, photosError} = useGetPhotos(restaurants);

    if (placesError) {
        return <div>Error: {placesError.message}</div>;
    }
>>>>>>> backend-convo

    if(photosError){
        return <div>Error: {photosError.message}</div>
    }

    if (placesError) {
        return <div>Error: {placesError.message}</div>;
    }

    //TODO: Answer the "button" question (i.e. how are we going to implement batch updates
    return (
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="stretch"
            justifyContent="center"
            padding={3}
            height="100%">

            {/* Nearby Restaurants Column */}
            <Box
                flex={{ xs: 1, md: 1 }}
                marginRight={{ md: 2 }}
                border={{ md: '3px solid #000000' }}
                borderRadius={{ md: '4px' }}
                maxHeight="100%"
                display="flex"
                flexDirection="column">
                <Typography variant="h5" sx={{ padding: 1, backgroundColor: 'transparent', color: '#54804D', fontSize: '34px', textAlign: 'center' }}>
                    Nearby Restaurants
                </Typography>
                <Box sx={{ padding: 2, maxHeight: '100%', overflowY: 'auto'}}>
                    <RestaurantList restaurants={restaurantWithPhotos}/>
                </Box>
            </Box>

            {/* Map Column */}
            <Box
                flex={{ xs: 1, md: 1 }}
                border={{ md: '3px solid #000000' }}
                borderRadius={{ md: '4px' }}
                marginRight={{ xs: 0, md: 2 }}
                height="100%">
                <MapComponent restaurants={restaurants} userLocation={userLocation} />
            </Box>

            {/* Favorite Restaurants Column */}
            <Box flex={{ xs: 1, md: 1 }}
                 border={{ md: '3px solid #000000' }}
                 borderRadius={{ md: '4px' }}
                 maxHeight="100%"
                 display="flex"
                 flexDirection="column">
                <Typography variant="h5" sx={{ padding: 1, backgroundColor: 'transparent', color: '#54804D', fontSize: '34px', textAlign: 'center' }}>
                    Favorite Restaurants
                </Typography>
                <Box sx={{ padding: 2, maxHeight: '100%', overflowY: 'auto'}}>
                    <FavoriteList favRestaurants={favRes} />
                </Box>
                {/*<Button variant="contained" onClick={saveFavorites} sx={{ m: 2, mt: 'auto', color: '#54804D' }}>*/}
                {/*    Save Favorites*/}
                {/*</Button>*/}
            </Box>
        </Box>
    );
}

export default FindRestaurants