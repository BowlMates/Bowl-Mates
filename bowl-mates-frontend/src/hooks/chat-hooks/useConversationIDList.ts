// React imports
import {useEffect, useState} from "react";

// Custom imports
import {user_successful_matches_address} from "../../api-addresses";
import {useInterval} from "../useSetInterval";
import {useAuthHeader} from "react-auth-kit";
import {successfulMatchList} from "../../data-types/successfulMatchList";

const useConversationIDList = (delay : number) => {

    const authHeader = useAuthHeader();
    const [conversationIDList, setConversationIDList] = useState<successfulMatchList[]>([]);

    const fetchUserMatchChatIDList = () => {
        const headers = {
            "Authorization": authHeader(),
            "Content-Type" : "application/json",
        }

        fetch(user_successful_matches_address, {
            headers: headers,
            method: "get",
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
                setConversationIDList(body);
            }
        });
    }

    useEffect(()=>{
        fetchUserMatchChatIDList();
    }, [])

    useInterval(fetchUserMatchChatIDList, delay);

    return {conversationIDList};
}

export default useConversationIDList;