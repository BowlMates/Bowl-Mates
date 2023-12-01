import {restaurant} from "../../../../../data-types/restaurants";
import React from "react";
import Grid from "@mui/material/Grid";
import RestaurantCard from "./RestaurantCard";

interface RestaurantListProps {
    restaurants: restaurant[],
    favRes: restaurant[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, favRes}) => {
    let displayRests: restaurant[] = [];

    if(restaurants.length > 0 && favRes.length > 0){
        for(let i = 0; i < restaurants.length; i++){
            let duplicate: boolean = false;
            for(let j = 0; j < favRes.length; j++){
                if(restaurants[i].address === favRes[j].address){
                    duplicate = true;
                }
            }
            if(!duplicate){
                displayRests.push(restaurants[i]);
            }
        }
    }

    return(
        <Grid container spacing={3}>
            {displayRests.map((restaurant) => (
                <Grid item xs={12} sm={6} key={restaurant.id}>
                    <RestaurantCard restaurant={restaurant} isFavorite={false} />
                </Grid>
            ))}
        </Grid>
    );
}
export default React.memo(RestaurantList);