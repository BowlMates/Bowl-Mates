// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {restaurant} from "../../../../data-types/restaurants";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";

// Custom Imports
import {useGetRestaurants} from "../../../../hooks/useGetRestaurants";
import React, {useEffect, useMemo, useState} from "react";
import useSaveRestaurant from "../../../../hooks/useSaveRestaurants";


function FavoriteRestaurants () {

    // Custom hooks for managing restaurant data and favorites
    const {favRes, setFavRes, postRestaurants, getRestaurants} = useGetRestaurants();
    const { saveRestaurant } = useSaveRestaurant();

    const memoizedFavs = useMemo(() => favRes, [favRes]);

    const theme = useTheme();

    const [boolFavs, setBoolFavs] = useState([false, false, false, false, false, false]);

    // Fetch favorite restaurants on component mount
    useEffect(()=>{
        getRestaurants();
    },[]);

    // Update the state for favorited restaurants
    useEffect(()=>{
        let favs = [false, false, false, false, false, false];
        for (let i = 0; i < favRes.length; i++) {
            // @ts-ignore
            favs[favRes[i].id] = true;
        }
        setBoolFavs(favs);
    },[favRes]);

    // Helper function to check if a restaurant has been favorited
    function hasRestaurant (id : number) {
        for (let i = 0; i < favRes.length; i++) {
            // @ts-ignore
            if (id === favRes[i].id) {
                return i;
            }
        }
        return -1;
    }

    // Render the component
    return (

        <Box sx = {{ flexGrow:1, padding: theme.spacing(3)}}>
            <Typography
                variant="h4"
                component="h2"
                align="center"
                gutterBottom
                sx={{
                    color:'#54804D',
                    fontFamily:'"Inter", italic'
                }}
            >
                your favorites
            </Typography>
            <Grid container spacing = {3}>
                {memoizedFavs.map((restaurant: restaurant, index) => (
                    <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                        <Card sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            backgroundColor: '#54804D',
                            color: '#FDF5F5',
                            justifyContent: 'space-between', // Align content space-between
                            alignItems: 'center', // Center the content vertically
                        }}>
                            <CardContent>
                                <img
                                    src={restaurant.reference}
                                    alt={`${restaurant.name}`}
                                    style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}
                                />
                                <Typography gutterBottom variant="h5" component="div">
                                    {restaurant.name}
                                </Typography>
                                <Typography variant="body2" color="#FDF5F5">
                                    Cuisine: {restaurant.cuisine}
                                </Typography>
                                <Typography variant="body2" color="#FDF5F5">
                                    Address: {restaurant.address}
                                </Typography>
                                <Typography variant="body2" color="#FDF5F5">
                                    Rating: {restaurant.rating}
                                </Typography>
                            </CardContent>
                            <IconButton
                                sx={{
                                    marginTop: 'auto', // Align the icon to the bottom of the Card
                                }}
                                onClick = {() => {
                                    console.log(restaurant.name);
                                    saveRestaurant(restaurant);
                                    getRestaurants();
                                }}
                            >
                                <FavoriteIcon />
                            </IconButton>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default React.memo(FavoriteRestaurants)