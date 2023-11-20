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
import {useEffect, useState} from "react";

// TODO: Get rid of these hard coded values
let restaurants : restaurant[] = [
    {
        id: 5,
        name: "Cactus",
        address: "535 Bellevue Square, Bellevue, WA 98004",
        cuisine: "Mexican",
        rating: 3,
        latitude: 0.0,
        longitude: 0.0,
        reference: ''
    },
    {
        id: 4,
        name: "Canlis",
        address: "2576 Aurora Ave N, Seattle, WA 98109",
        cuisine: "Fine Dining",
        rating: 5,
        latitude: 0.0,
        longitude: 0.0,
        reference: ''
    },
    {
        id: 3,
        name: "The Pink Door",
        address: "1919 Post Alley, Seattle, WA 98101",
        cuisine: "Italian",
        rating: 5,
        latitude: 0.0,
        longitude: 0.0,
        reference: ''
    },
    {
        id: 1,
        name: "Kamonegi",
        address: "1054 N 39th St, Seattle, WA 98103",
        cuisine: "Japanese",
        rating: 5,
        latitude: 0.0,
        longitude: 0.0,
        reference: ''
    },
    {
        id: 2,
        name: "Homer",
        address: "3013 Beacon Ave S, Seattle, WA 98144",
        cuisine: "Mediterranean",
        rating: 5,
        latitude: 0.0,
        longitude: 0.0,
        reference: ''
    }
]

function FavoriteRestaurants () {

    // Custom hooks for managing restaurant data and favorites
    const {favRes, setFavRes, postRestaurants, getRestaurants} = useGetRestaurants();
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
                {restaurants.map((restaurant, index) => (
                    <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                        <Card sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            backgroundColor: '#54804D',
                            color: '#FDF5F5'
                        }}>
                            <CardContent>
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
                                onClick = {() => {
                                    let index = hasRestaurant(restaurant.id);
                                    if (index >= 0) {
                                        let resArrayCopy = [...favRes];
                                        resArrayCopy.splice(index, 1);
                                        setFavRes(resArrayCopy);
                                    } else {
                                        let resArrayCopy = [...favRes, restaurant];
                                        // @ts-ignore
                                        setFavRes(resArrayCopy);
                                    }
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

export default FavoriteRestaurants