<<<<<<< HEAD


// React Imports
import React, {useEffect, useMemo} from "react";

=======
// React Imports
import React, {useEffect} from "react";
>>>>>>> backend-convo
import useNearbyPlaces from "../../../../hooks/useNearbyPlaces";
import MapComponent from "./find-restaurants-components/MapComponent";
import {useGetRestaurants} from "../../../../hooks/useGetRestaurants";
import {restaurant} from "../../../../data-types/restaurants";

// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
import useGetPhotos from "../../../../hooks/useGetPhotos";

import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import RestaurantList from "./find-restaurants-components/RestaurantList";
import FavoriteList from "./find-restaurants-components/FavoriteList";

=======

// Custom Imports
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
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

=======
    const isSessionValid = useIsUserSessionValid();
>>>>>>> backend-convo
    useEffect(()=>{
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
    });
<<<<<<< HEAD

    // Fetch favorite restaurants on component mount
    useEffect(()=>{
        getRestaurants();
    },[favRes]);
    // const {restaurants, placesLoading, placesError} = useNearbyPlaces(userLocation);
    // const {photos, photosLoading, photosError} = useGetPhotos(restaurants);
=======
>>>>>>> backend-convo

    const {restaurants, loading, error} = useNearbyPlaces(userLocation);


    // Handle cases where there's an error or the hook hasn't finished returning yet
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    //TODO: Answer the "button" question (i.e. how are we going to implement batch updates
    return (
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="stretch"
            justifyContent="center"
            padding={3}
<<<<<<< HEAD
            height="100%">

            {/* Nearby Restaurants Column */}
=======
        >
>>>>>>> backend-convo
            <Box
                flex={{ xs: 1, md: 1 }}
                marginRight={{ md: 2 }}
                border={{ md: '3px solid #000000' }}
                borderRadius={{ md: '4px' }}
<<<<<<< HEAD
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
=======
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

>>>>>>> backend-convo
            <Box
                flex={{ xs: 1, md: 1 }}
                border={{ md: '3px solid #000000' }}
                borderRadius={{ md: '4px' }}
<<<<<<< HEAD
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
=======
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
>>>>>>> backend-convo
            </Box>
        </Box>
    );
}

export default FindRestaurants