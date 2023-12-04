// MUI Imports

// Custom Imports
import SuccessfulMatchesContainer from "./successful-matches-components/sidebar/SuccessfulMatchesContainer";
import SuccessfulMatchesSidebar from "./successful-matches-components/sidebar/SuccessfulMatchesSidebar";
import ChatBody from "./successful-matches-components/body/ChatBody";
import SidebarCard from "./successful-matches-components/sidebar/SidebarCard";
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import {useEffect, useState} from "react";
import MessageBubble from "./successful-matches-components/body/MessageBubble";

// Data Imports
import dummyData from "../../../../frontend-api-specs/match-chat-initial/fromBackend-match-chat-initial.json"
import useMatchChats from "../../../../hooks/chat-hooks/useMatchChats";
import EmptyChatBody from "./successful-matches-components/body/EmptyChatBody";

//Changing this num changes the width of the sidebar and the various widths pertaining to the sidebar
const chatSidebarWidthNum : number = 320;
const chatSidebarWidth : string = chatSidebarWidthNum + "px";
const chatSidebarWidthMinusSomeValue : string = (chatSidebarWidthNum - 18) + "px";

interface sidebarMeasurementType {
    chatSidebarWidthNum : number,
    chatSidebarWidth : string,
    chatSidebarWidthMinusSomeValue : string,
}

export const sidebarMeasurements : sidebarMeasurementType = {
    chatSidebarWidthNum : chatSidebarWidthNum,
    chatSidebarWidth : chatSidebarWidth,
    chatSidebarWidthMinusSomeValue : chatSidebarWidthMinusSomeValue,
}

function SuccessfulMatches() {
    const isSessionValid = useIsUserSessionValid();
    useEffect(()=>{
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
    });

    const {sidebarData, keyedChatData, fetchUserChats} = useMatchChats();
    const [selectedMatch, setSelectedMatch] = useState(-1);
    return (
        <SuccessfulMatchesContainer>
            <SuccessfulMatchesSidebar>
                {
                    Array.from(sidebarData).map((item, index)=>{
                        if(selectedMatch === -1 && index === 0){
                            setSelectedMatch(item[0]);
                        }
                        return (
                            <SidebarCard
                                key={item[0]}
                                matchID={item[0]}
                                firstName={item[1].firstName}
                                lastName={item[1].lastName}
                                imageURL={item[1].imageURL}
                                timeInMilliseconds={item[1].timeInMilliseconds}
                                message={item[1].message}
                                selected={selectedMatch === item[0] || (selectedMatch === -1 && index === 0)}
                                setChatWindow={(newSelection : number)=>{setSelectedMatch(newSelection)}}
                            />
                        )
                    })
                }
                {/* Historical Reference*/}
                {/*<SidebarCard*/}
                {/*    conversationID={1}*/}
                {/*    firstName={"Adam"}*/}
                {/*    lastName={"Savage"}*/}
                {/*    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}*/}
                {/*    timeInMilliseconds={1700002426821}*/}
                {/*    message={"You want some pie with that meaty sausage?"}*/}
                {/*    selected={true}*/}
                {/*    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}*/}
                {/*/>*/}
            </SuccessfulMatchesSidebar>
            {
                selectedMatch === -1 ? <EmptyChatBody/> :
                <ChatBody
                    matchID={selectedMatch}
                    messages={keyedChatData.has(selectedMatch) ? keyedChatData.get(selectedMatch)! : []}
                    fetchMessages={fetchUserChats}
                />
            }

        </SuccessfulMatchesContainer>
    )
}

export default SuccessfulMatches