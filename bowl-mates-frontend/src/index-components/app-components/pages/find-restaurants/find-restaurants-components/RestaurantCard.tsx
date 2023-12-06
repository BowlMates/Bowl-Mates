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
    handleRestaurantFavorite: (restaurant: restaurant) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, isFavorite, handleRestaurantFavorite }) => {
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
            border: '1px solid black', // Black border with a width of 3px
            borderRadius: 4, // Rounded edges with a radius of 12px
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Drop shadow with 4px vertical offset, 8px blur, and 0.1 alpha
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
                    Type: {restaurant.cuisine}
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
                    handleRestaurantFavorite(restaurant);
                }}>
                <FavoriteIcon style={{ color: isFavorite ? red[500] : grey[500] }} />
            </IconButton>
        </Card>
    )
}

export default RestaurantCard;