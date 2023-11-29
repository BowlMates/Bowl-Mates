import React from "react";
import { restaurant } from "../../../../../data-types/restaurants";
import useSaveRestaurant from "../../../../../hooks/useSaveRestaurants";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {grey, red} from "@mui/material/colors";
import Card from "@mui/material/Card";


interface RestaurantCardProps {
    restaurant: restaurant;
    isFavorite: boolean;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, isFavorite }) => {
    const { saveRestaurant } = useSaveRestaurant();

    return (
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
                <Typography variant="body2" color="text.secondary">
                    Cuisine: {restaurant.cuisine}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Address: {restaurant.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {restaurant.rating}
                </Typography>
                {/* Add more restaurant details as needed */}
            </CardContent>
            <IconButton
                sx={{
                    marginTop: 'auto', // Align the icon to the bottom of the Card
                }}
                onClick={() => {
                    console.log(restaurant.name);
                    saveRestaurant(restaurant);
                }}>
                <FavoriteIcon style={{ color: isFavorite ? red[500] : grey[500] }} />
            </IconButton>
        </Card>
    )
}

export default RestaurantCard;