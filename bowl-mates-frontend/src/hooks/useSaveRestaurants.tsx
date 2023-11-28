import {restaurant} from "../data-types/restaurants";
import {useAuthHeader} from "react-auth-kit";

const useSaveRestaurant = () => {
    const authHeader = useAuthHeader();

    const saveRestaurant = (restaurant: restaurant)=> {
        let postRestTestLink : string = "http://localhost:8080/user/prefs/save";
        //let postRestProdLink : string = "https://backend.bowlmates.me/user/prefs/save";

        const token = authHeader();

        fetch(postRestTestLink, {
            headers: {
                "Authorization" : token,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(restaurant)
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully posted");
            } else {
                console.log(res)
                console.log("Failed to post");
                JSON.stringify(restaurant);
            }
        });
    }

    return {saveRestaurant}
}


export default useSaveRestaurant;