// React imports
import {useEffect, useState} from "react";

// Custom imports
import {useAuthHeader} from "react-auth-kit";
import {user_profile_other_address} from "../api-addresses";
import {matchProfileDetails} from "../data-types/userProfile";


const useMatchProfile = () => {
    const authHeader = useAuthHeader();
    const [matchID, setMatchID] = useState(-1);
    const [profile, setProfile] = useState<matchProfileDetails>({firstName : "", lastName: "", bio: "", pronouns: "", photo: ""});

    useEffect(()=>{
        if(matchID !== -1 && matchID !== undefined){
            fetchMatchProfile();
        }
    },[matchID])

    const fetchMatchProfile = () => {
        const headers = {
            "Authorization": authHeader(),
            "Content-Type" : "application/json",
        }
        console.log(matchID);
        fetch(user_profile_other_address, {
            headers: headers,
            method: "post",
            body: matchID + ""
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return null;
            }
        }).then((body) => {
            if (body == null) {
                console.log("failed to retrieve match list");
            } else {
                console.log("setting fetched profile")
                setProfile(body);
                console.log(body.photo);
            }
        });
    }

    return {profile, setMatchID};
}

export default useMatchProfile;