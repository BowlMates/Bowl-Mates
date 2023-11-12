// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Google APi imports
import MapComponent from "../../MapComponent";
import React from "react";
import getNearbyRestaurants from "../../../../hooks/getNearbyRestaurants";

function FindRestaurants() {
    const theme = useTheme();
    const { restaurants, loading, error } = getNearbyRestaurants();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box display={"flex"} sx={{flexDirection : "column", alignItems : "center", justifyContent : "center"}}>
            <Typography variant={"h3"}>
                This is the restaurant finder tool!
            </Typography>
            <MapComponent />
            <Box display={"flex"} sx={{paddingBottom: "20px"}}>
                <ul>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id}>
                            <strong>{restaurant.name}</strong>
                            - {restaurant.address} - Rating: {restaurant.rating}
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    )
}

export default FindRestaurants