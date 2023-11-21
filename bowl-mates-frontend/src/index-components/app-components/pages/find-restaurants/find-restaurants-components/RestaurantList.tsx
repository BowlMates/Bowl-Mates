import {restaurant} from "../../../../../data-types/restaurants";
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useSaveRestaurant from "../../../../../hooks/useSaveRestaurants";

interface RestaurantListProps {
    restaurants: restaurant[];
    photos: string[];
}



const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, photos }) => {
    const { saveRestaurant } = useSaveRestaurant();

    return(
        <Grid container spacing={3}>
            {restaurants.map((restaurant, index) => (
                <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            backgroundColor: '#54804D',
                            color: '#FDF5F5',
                            justifyContent: 'space-between', // Align content space-between
                            alignItems: 'center', // Center the content vertically
                        }}
                    >
                        <CardContent>
                            <img
                                src={photos[index]}
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
                            onClick={() => {
                                console.log(restaurant.name)
                                saveRestaurant(restaurant);
                            }}
                        >
                            <FavoriteIcon />
                        </IconButton>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
export default RestaurantList;