import {restaurant} from "../../../../../data-types/restaurants";
import React from "react";
import Grid from "@mui/material/Grid";
import RestaurantCard from "./RestaurantCard";

interface RestaurantListProps {
    restaurants: restaurant[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
    return(
        <Grid container spacing={3}>
            {restaurants.map((restaurant) => (
                <Grid item xs={12} sm={6} key={restaurant.id}>
                    <RestaurantCard restaurant={restaurant} isFavorite={false} />
                </Grid>
            ))}
        </Grid>
    );
}
export default React.memo(RestaurantList);