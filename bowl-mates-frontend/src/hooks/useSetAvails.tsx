import {useAuthHeader} from "react-auth-kit";
import {user_avail_save_address} from "../api-addresses";
import {avail} from "../data-types/avail";
import {useState} from "react";

const useSetAvails = () => {
    const authHeader = useAuthHeader();
    const [currentlyPosting, setCurrentlyPosting] = useState<boolean>(false);

    const setAvails = async (avails : avail[]) : Promise<boolean> => {
        const token = authHeader();
        setCurrentlyPosting(true);
        return fetch(user_avail_save_address, {
            headers: {
                "Authorization" : token,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(avails)
        }).then((res) => {
            if (res.ok) {
                setCurrentlyPosting(false);
                console.log("Successfully posted");
                return true;
            } else {
                setCurrentlyPosting(false);
                console.log(res)
                console.log("Failed to post");
                return false;
            }
        }).catch(()=>{
            setCurrentlyPosting(false);
            console.log("An Error occurred during posting");
            return false;
        });
    }
    return {setAvails, currentlyPosting}
}

export default useSetAvails;