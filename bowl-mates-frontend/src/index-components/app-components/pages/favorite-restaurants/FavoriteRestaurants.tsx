// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {restaurant} from "../../../../data-types/restaurants";
import {ToggleButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from "@mui/material/Button";

// Custom Imports
import {useGetRestaurants} from "../../../../hooks/useGetRestaurants";
import {useEffect, useState} from "react";

let restaurants : restaurant[] = [
    {
        id: 5,
        name: "Cactus",
        address: "535 Bellevue Square, Bellevue, WA 98004",
        cuisine: "Mexican",
        rating: 3
    },
    {
        id: 4,
        name: "Canlis",
        address: "2576 Aurora Ave N, Seattle, WA 98109",
        cuisine: "Fine Dining",
        rating: 5
    },
    {
        id: 3,
        name: "The Pink Door",
        address: "1919 Post Alley, Seattle, WA 98101",
        cuisine: "Italian",
        rating: 5
    },
    {
        id: 1,
        name: "Kamonegi",
        address: "1054 N 39th St, Seattle, WA 98103",
        cuisine: "Japanese",
        rating: 5
    },
    {
        id: 2,
        name: "Homer",
        address: "3013 Beacon Ave S, Seattle, WA 98144",
        cuisine: "Mediterranean",
        rating: 5
    }
]

function FavoriteRestaurants () {

    const {favRes, setFavRes, postRestaurants, getRestaurants} = useGetRestaurants();
    const theme = useTheme();

    const [boolFavs, setBoolFavs] = useState([false, false, false, false, false, false]);

    useEffect(()=>{
        getRestaurants();
    },[]);

    useEffect(()=>{
        let favs = [false, false, false, false, false, false];
        for (let i = 0; i < favRes.length; i++) {
            // @ts-ignore
            favs[favRes[i].id] = true;
        }
        setBoolFavs(favs);
    },[favRes]);

    function hasRestaurant (id : number) {
        for (let i = 0; i < favRes.length; i++) {
            // @ts-ignore
            if (id === favRes[i].id) {
                return i;
            }
        }
        return -1;
    }

    return (
        <Box display={"flex"} sx={{flexDirection : "column", alignItems : "center", justifyContent : "center"}}>
            <Box display={"flex"} sx={{paddingBottom: "20px"}}>
                {restaurants.map((item,index)=>{
                    return(
                        <Box
                            display={"flex"}
                            sx={{flexDirection : "column", alignItems : "center", justifyContent : "center"}}
                            key={item.id}
                        >
                            <Typography variant={"h4"}>
                                {item.name}
                            </Typography>
                            <Typography variant={"h6"}>
                                Cuisine: {item.cuisine}
                            </Typography>
                            <Typography variant={"h6"}>
                                Address: {item.address}
                            </Typography>
                            <Typography variant={"h6"}>
                                Rating: {item.rating}
                            </Typography>
                            <ToggleButton value={boolFavs[item.id]} selected={boolFavs[item.id]}
                            onClick={()=>{
                                let index = hasRestaurant(item.id);
                                if (index >= 0) {
                                    let resArrayCopy = [...favRes];
                                    resArrayCopy.splice(index, 1);
                                    setFavRes(resArrayCopy);
                                } else {
                                    let resArrayCopy = [...favRes, item];
                                    // @ts-ignore
                                    setFavRes(resArrayCopy);
                                }
                            }}>
                                <FavoriteIcon/>
                            </ToggleButton>
                        </Box>
                    )
                })}
            </Box>
            <Button sx={{backgroundColor: theme.palette.secondary.main}} onClick={()=>{
                console.log(JSON.stringify(favRes));
                postRestaurants();
            }}>
                Update Favorites
            </Button>
        </Box>
    )
}

export default FavoriteRestaurants