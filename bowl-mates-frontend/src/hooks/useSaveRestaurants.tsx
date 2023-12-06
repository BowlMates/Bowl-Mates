import {restaurant} from "../data-types/restaurants";
import {useAuthHeader} from "react-auth-kit";
import {user_prefs_save_address} from "../api-addresses";


const useSaveRestaurant = () => {
    const authHeader = useAuthHeader();

    const saveRestaurant = async (restaurant: restaurant) : Promise<{ success: boolean }> => {
        const token = authHeader();

        return await fetch(user_prefs_save_address, {
            headers: {
                "Authorization" : token,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(restaurant)
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully posted");
                return {success: true};
            } else {
                console.log(res);
                console.log("Failed to post");
                return {success: false};
            }
        });
    }

    return {saveRestaurant}
}


export default useSaveRestaurant;