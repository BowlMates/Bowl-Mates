// React Imports
import {useState} from "react";

// React Auth Kit Imports
import {useAuthHeader} from 'react-auth-kit'
import {user_prefs_address, user_prefs_save_address} from "../api-addresses";
import {restaurant} from "../data-types/restaurants";



export const useGetRestaurants = () => {
    const [favRes, setFavRes] = useState<restaurant[]>([]);
    const authHeader = useAuthHeader();

    const getRestaurants = () => {

        fetch(user_prefs_address, {
            headers: {
                "Authorization": authHeader(),
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*",
            },
            method: "GET",
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return null;
            }
        }).then((body) => {
            if (body == null) {
                console.log("Unable to get Restaurants");
                setFavRes([]);
            } else {
                let temp: restaurant[] = body;
                temp.sort((a,b) => {
                    // Primary sort by 'name'
                    const nameComparison = a.name.localeCompare(b.name);

                    // Secondary sort by 'rating' if 'name' is the same
                    return nameComparison !== 0 ? nameComparison : b.rating - a.rating;
            })
                setFavRes(temp);
            }
        });

    }

    const postRestaurants = () => {

        fetch(user_prefs_save_address, {
            headers: {
                "Authorization" : authHeader(),
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(favRes)
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully posted");
            } else {
                console.log("Failed to post");
                JSON.stringify(favRes);
            }
        });
    }

    return {favRes, setFavRes, postRestaurants, getRestaurants};
}