import {restaurant} from "../../../../../data-types/restaurants";
import React from "react";
import Grid from "@mui/material/Grid";
import RestaurantCard from "./RestaurantCard";

interface RestaurantListProps {
    restaurants: restaurant[],
    favRes: restaurant[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, favRes }) => {

    //TODO: Finish splicing algorithm


    // for(let i = 0; i < restaurants.length; i++){
    //     for(let j = 0; j < favRes.length; j++){
    //         if(restaurants[i].address === favRes[j].address){
    //             restaurants = restaurants.splice(i, 1)
    //         }
    //     }
    // }

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