import {user_successful_match_chats_address} from "../../api-addresses";
import {useAuthHeader} from "react-auth-kit";
import {useEffect, useState} from "react";
import {chatMessage} from "../../data-types/chatMessage";
import useConversationIDList from "./useConversationIDList";
import {sidebarCardData} from "../../data-types/sidebarCardData";

const useMatchChats = () => {
    const authHeader = useAuthHeader();
    const [chatList, setChatList] = useState<chatMessage[][]>([]);
    const {conversationIDList} = useConversationIDList(10000);
    const [conversationIDListNumsOnly, setConversationIDListNumsOnly] = useState<number[]>([]);
    const [sidebarData, setSidebarData] = useState<Map<number, sidebarCardData>>(new Map());
    const [keyedChatData, setKeyedChatData] = useState<Map<number, chatMessage[]>>(new Map());

    const headers = {
        "Authorization": authHeader(),
        "Content-Type" : "application/json",
    }

    useEffect(()=>{
        const sidebarCardData: Map<number, sidebarCardData> = new Map();
        const keyedMessageData: Map<number, chatMessage[]> = new Map();
        conversationIDList.map((item) => {
            console.log(item.matchID);
            sidebarCardData.set(item.matchID, {
                matchID: item.matchID,
                firstName: item.matchFirstName,
                lastName: item.matchLastName,
                imageURL: item.matchPhotoURL,
                timeInMilliseconds: -1,
                message: ""
            })
            return 0;
        });

        chatList.map((item) => {
            if(item.length !== 0) {
                if (sidebarCardData.has(item[0].matchId)) {
                    let tempCardData: sidebarCardData = sidebarCardData.get(item[0].matchId)!;
                    tempCardData!.message = item[item.length - 1].message;
                    tempCardData!.timeInMilliseconds = item[item.length - 1].date;
                    sidebarCardData.set(item[0].matchId, tempCardData);
                    keyedMessageData.set(item[0].matchId, item);
                }
            }
            return 0;
        });


        // @ts-ignore
        setSidebarData(new Map([...sidebarCardData].sort()));

        // @ts-ignore
        setKeyedChatData(new Map([...keyedMessageData].sort()));

    },[chatList, conversationIDList]);

    useEffect(()=>{
        setConversationIDListNumsOnly(conversationIDList.map((item)=>{return item.matchID;}));
    },[conversationIDList]);

    useEffect(()=>{
        if (conversationIDListNumsOnly.length !== 0) {
            fetchUserChats();
        }
    },[conversationIDListNumsOnly]);

    const fetchUserChats = () => {
        fetch(user_successful_match_chats_address, {
            headers: headers,
            method: "post",
            body: JSON.stringify(conversationIDListNumsOnly)
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return null;
            }
        }).then((body) => {
            if (body == null) {
                console.log("failed to retrieve user chats list");
            } else {
                setChatList(body);
            }
        });
    }

    return {conversationIDList, chatList, sidebarData, keyedChatData, fetchUserChats};
}

export default useMatchChats;