import React, {useState} from "react";
import useNearbyPlaces from "../../../../hooks/useNearbyPlaces";
import MapComponent from "./find-restaurants-components/MapComponent";
import {useGetRestaurants} from "../../../../hooks/useGetRestaurants";
import {restaurant} from "../../../../data-types/restaurants";

// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import {red, grey} from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import Button from '@mui/material/Button';



// The FindRestaurants component is responsible for calling the getNearbyRestaurants function and then
// displaying all the data returned by the API to the user
function FindRestaurants(userLocation: {lat: number; lng: number}) {
    const {restaurants, loading, error} = useNearbyPlaces(userLocation);
    const { favRes, setFavRes } = useGetRestaurants();

    // State to manage favorite restaurants
    const [favorites, setFavorites] = useState<restaurant[]>(favRes);

    // Check if a restaurant is a favorite
    const isFavorite = (id: number) => {
        return favorites.some(fav => fav.id === id);
    }

    // Toggle favorite status
    const toggleFavorite = (restaurant: restaurant) => {
        if (isFavorite(restaurant.id)) {
            // If it's already a favorite, remove it
            setFavorites(favorites.filter(fav => fav.name !== restaurant.name));
        } else {
            // If it's not a favorite, add it
            setFavorites([...favorites, restaurant]);
        }
    };

    // Save favorites to local storage or server
    const saveFavorites = () => {
        // Implement saving logic
        // For example, save to local storage or send to a server
        // @ts-ignore
        setFavRes(favorites);
    };

    // Render restaurant card
    const renderRestaurantCard = (restaurant: restaurant, isFav: any) => (
        <Card sx={{ marginBottom:2, border: '1px solid #ccc', borderRadius: '4px' }}>
            {/* Placeholder for restaurant photo */}
            <CardMedia
                component="img"
                height="140"
                image="/placeholder-image.jpg" // Replace with actual image path
                alt={restaurant.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {restaurant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {restaurant.address}
                </Typography>
                {/* Add more restaurant details as needed */}
            </CardContent>
            <IconButton onClick={() => toggleFavorite(restaurant)}>
                <FavoriteIcon style={{ color: isFav ? red[500] : grey[500] }} />
            </IconButton>
        </Card>
    );

    // Handle cases where there's an error or the hook hasn't finished returning yet
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // TODO: Add favorite functionality to the restaurant finder tool as per mock up
    return (
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="stretch" justifyContent="center" padding={3}>

            {/* Nearby Restaurants Column */}
            <Box flex={{ xs: 1, md: 1 }} marginRight={{ md: 2 }} border={{ md: '3px solid #000000' }} borderRadius={{ md: '4px' }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ padding: 1, backgroundColor: 'transparent', color: '#54804D', fontSize: '34px' }}>
                    Nearby Restaurants
                </Typography>
                <Box sx={{ padding: 2, maxHeight: '600px', overflowY: 'auto' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}> {/* Remove default padding and margin */}
                        {restaurants.map((restaurant) => (
                            <li key={restaurant.id}>
                                {renderRestaurantCard(restaurant, isFavorite(restaurant.id))}
                            </li>
                        ))}
                    </ul>
                </Box>
            </Box>

            {/* Map Column */}
            <Box flex={{ xs: 1, md: 1 }} border={{ md: '3px solid #000000' }} borderRadius={{ md: '4px' }} marginRight={{ xs: 0, md: 2 }}>
                <MapComponent restaurants={restaurants} userLocation={userLocation} />
            </Box>

            {/* Favorite Restaurants Column */}
            <Box flex={{ xs: 1, md: 1 }} border={{ md: '3px solid #000000' }} borderRadius={{ md: '4px' }} display="flex" flexDirection="column">
                <Typography variant="h5" gutterBottom component="div" sx={{ padding: 1, backgroundColor: 'transparent', color: '#54804D', fontSize: '34px' }}>
                    Favorite Restaurants
                </Typography>
                <Box sx={{ padding: 2, maxHeight: 'calc(600px - 48px)', overflowY: 'auto', flexGrow: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {favorites.map((favorite) => (
                            <li key={favorite.id}>
                                {renderRestaurantCard(favorite, true)}
                            </li>
                        ))}
                    </ul>
                </Box>
                <Button variant="contained" onClick={saveFavorites} sx={{ m: 2, mt: 'auto', color: '#54804D' }}>
                    Save Favorites
                </Button>
            </Box>
        </Box>
    );
}
export default FindRestaurants