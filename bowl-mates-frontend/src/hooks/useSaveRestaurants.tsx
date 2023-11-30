import {restaurant} from "../data-types/restaurants";
import {useAuthHeader} from "react-auth-kit";
import {user_prefs_save_address} from "../api-addresses";


const useSaveRestaurant = () => {
    const authHeader = useAuthHeader();

    const saveRestaurant = (restaurant: restaurant)=> {
        const token = authHeader();

        fetch(user_prefs_save_address, {
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
            }
        });
    }

    return {saveRestaurant}
}


export default useSaveRestaurant;