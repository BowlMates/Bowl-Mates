import {useAuthHeader} from "react-auth-kit";
import {user_profile_save_address} from "../api-addresses";
import {userProfileDetails} from "../data-types/userProfile";


const useSaveProfileDetails = () => {
    const authHeader = useAuthHeader();

    const saveProfileDetails = async (profileDetails: userProfileDetails) : Promise<{ success: boolean }> => {
        const token = authHeader();
        console.log(profileDetails)

        return await fetch(user_profile_save_address, {
            headers: {
                "Authorization" : token,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(profileDetails)
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully posted profile details");
                return {success: true};
            } else {
                console.log(res)
                console.log("Failed to post profile details");
                return {success: false};
            }
        });
    }

    return {saveProfileDetails}
}


export default useSaveProfileDetails;