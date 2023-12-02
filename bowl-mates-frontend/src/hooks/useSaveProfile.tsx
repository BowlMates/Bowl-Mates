import {useAuthHeader} from "react-auth-kit";
import {user_profile_save_address} from "../api-addresses";
import {userProfileDetails} from "../data-types/userProfile";


const useSaveProfileDetails = () => {
    const authHeader = useAuthHeader();

    const saveProfileDetails = (profileDetails: userProfileDetails)=> {
        const token = authHeader();
        console.log(profileDetails)
        fetch(user_profile_save_address, {
            headers: {
                "Authorization" : token,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(profileDetails)
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully posted profile details");
            } else {
                console.log(res)
                console.log("Failed to post profile details");
            }
        });
    }

    return {saveProfileDetails}
}


export default useSaveProfileDetails;