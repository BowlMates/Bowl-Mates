import {useAuthHeader} from "react-auth-kit";
import {user_avail_save_address} from "../api-addresses";
import {avail} from "../data-types/avail";

const useSetAvails = () => {
    const authHeader = useAuthHeader();

    const setAvails = (avails : avail[]) => {
        const token = authHeader();

        fetch(user_avail_save_address, {
            headers: {
                "Authorization" : token,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(avails)
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully posted");
            } else {
                console.log(res)
                console.log("Failed to post");
            }
        });
    }
    return {setAvails}
}

export default useSetAvails;