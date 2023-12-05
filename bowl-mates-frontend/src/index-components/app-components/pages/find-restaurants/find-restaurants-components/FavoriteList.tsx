import {restaurant} from "../../../../../data-types/restaurants";
import React from "react";
import Grid from "@mui/material/Grid";
import RestaurantCard from "./RestaurantCard";

interface FavoriteListProps {
    favRestaurants: restaurant[];
    handleRestaurantFavorite: (restaurant: restaurant) => void;

}

const FavoriteList: React.FC<FavoriteListProps> = ({favRestaurants, handleRestaurantFavorite}) => {
    console.log(favRestaurants);

    return(
        <Grid container spacing={3}>
        {favRestaurants.map((restaurant) => (
            <Grid item xs={12} sm={6} key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} isFavorite={true} handleRestaurantFavorite={handleRestaurantFavorite} />
            </Grid>
        ))}
        </Grid>
    );
}
export default React.memo(FavoriteList);