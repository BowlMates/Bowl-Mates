// React Imports
import {useState} from "react";

// React Auth Kit Imports
import {useAuthHeader} from 'react-auth-kit'



export const useGetRestaurants = () => {

    const [favRes, setFavRes] = useState([]);

    const authHeader = useAuthHeader();

    let getFavRestaurantsProductionLink : string = "https://backend.bowlmates.me/user/displaypref";
    //let getFavRestaurantsTestingLink : string = "http://localhost:8080/user/displaypref";

    let postFavRestaurantsProductionLink : string = "https://backend.bowlmates.me/user/pref";
    //let postFavRestaurantsTestingLink : string = "http://localhost:8080/user/pref";

    const getRestaurants = () => {

        fetch(getFavRestaurantsProductionLink, {
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
                setFavRes(body);
            }
        });

    }

    const postRestaurants = () => {

        fetch(postFavRestaurantsProductionLink, {
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
                console.log("Failed to posted");
                JSON.stringify(favRes);
            }
        });
    }

    return {favRes, setFavRes, postRestaurants, getRestaurants};
}