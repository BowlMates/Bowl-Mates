import {useAuthHeader} from "react-auth-kit";
import {user_profile_address} from "../api-addresses";
import {userProfileDetails} from "../data-types/userProfile";
import {useState} from "react";

const defaultProfile: userProfileDetails = {
    firstName: "",
    lastName: "",
    pronouns: "",
    bio: ""
}

export const useGetProfile = () => {
    const[userProfile, setUserProfile] = useState<userProfileDetails>(defaultProfile);
    const[profileLoading, setProfileLoading] = useState<boolean>(true);
    const authHeader = useAuthHeader();

    const getProfile = ()=> {
        fetch(user_profile_address, {
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
                console.log("Unable to get profile");
                setUserProfile(defaultProfile);
                setProfileLoading(false);
            } else {
                let temp: userProfileDetails = body;
                setUserProfile(temp);
                setProfileLoading(false);
            }
        });

    }

    return {userProfile, profileLoading, setUserProfile, getProfile}
}


