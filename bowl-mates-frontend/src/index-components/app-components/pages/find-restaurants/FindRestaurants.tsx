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
    // console.log(loading)
    // console.log(error)
    console.log(restaurants)
    // restaurants.forEach(restaurantJSON => {
    //     console.log(`Restaurant: ${restaurantJSON.displayName}, Address: ${restaurantJSON.formattedAddress},
    //     Rating: ${restaurantJSON.rating}, Type: ${restaurantJSON.primaryType}`)
    // })
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
                    {restaurants.map((restaurantJSON) => (
                        <li key={restaurantJSON.id}>
                            {/*<strong>{restaurantJSON.displayName.text}</strong> */}
                            - {restaurantJSON.formattedAddress} - Rating: {restaurantJSON.rating}
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    )
}

export default FindRestaurants