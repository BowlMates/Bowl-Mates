// React imports
import {useEffect, useState} from "react";

// Custom imports
import {useAuthHeader} from "react-auth-kit";
import {user_profile_other_address} from "../api-addresses";
import {matchProfileDetails} from "../data-types/userProfile";
import {stringify} from "querystring";

const useMathProfile = () => {
    const authHeader = useAuthHeader();
    const [matchID, setMatchID] = useState(-1);
    const [profile, setProfile] = useState<matchProfileDetails>({firstName : "", lastName: "", bio: "", pronouns: "", photo: ""});

    useEffect(()=>{
        if(matchID !== -1){
            fetchMatchProfile();
        }
        console.log(matchID);
    },[matchID])

    useEffect(()=>{
        console.log(profile);
    },[profile]);

    const fetchMatchProfile = () => {
        const headers = {
            "Authorization": authHeader(),
            "Content-Type" : "application/json",
        }

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
                setProfile(body);
            }
        });
    }

    return {profile, setMatchID};
}

export default useMathProfile;