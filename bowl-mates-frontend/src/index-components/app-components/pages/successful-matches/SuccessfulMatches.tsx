// MUI Imports

// Custom Imports
import SuccessfulMatchesContainer from "./successful-matches-components/sidebar/SuccessfulMatchesContainer";
import SuccessfulMatchesSidebar from "./successful-matches-components/sidebar/SuccessfulMatchesSidebar";
import ChatBody from "./successful-matches-components/body/ChatBody";
import SidebarCard from "./successful-matches-components/sidebar/SidebarCard";
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import {useEffect} from "react";
import MessageBubble from "./successful-matches-components/body/MessageBubble";

// Data Imports
import dummyData from "../../../../frontend-api-specs/match-chat-initial/fromBackend-match-chat-initial.json"

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

    return (
        <SuccessfulMatchesContainer>
            <SuccessfulMatchesSidebar>
                <SidebarCard
                    conversationID={1}
                    firstName={"Adam"}
                    lastName={"Savage"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700002426821}
                    message={"You want some pie with that meaty sausage?"}
                    selected={true}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"FRED"}
                    lastName={"Saucy Bakka"}
                    imageURL={"https://cdn.media.amplience.net/i/partycity/P853205?$large$&fmt=auto&qlt=default"}
                    timeInMilliseconds={1700300074024}
                    message={"Today is a good time for me"}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Velma"}
                    lastName={"Jinkers"}
                    imageURL={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60085341-4442-4819-bfa0-d2793122a55e/deywqhh-105bed09-e203-4d43-be5c-7131bea48b71.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwMDg1MzQxLTQ0NDItNDgxOS1iZmEwLWQyNzkzMTIyYTU1ZVwvZGV5d3FoaC0xMDViZWQwOS1lMjAzLTRkNDMtYmU1Yy03MTMxYmVhNDhiNzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4DkT8FZ3gD6Ad4L6M3tHKZamYazwB2mohxbNrfaZBew"}
                    timeInMilliseconds={1700208001000}
                    message={"Jinkies! I've think I've found a clue! SUGOI-NE"}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1600208001000}
                    message={"Do you also remember the potato famine?"}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"BIGGEST of Potatoes"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1200208001000}
                    message={"I have the biggest potato in all of the land! Your potatoes dwarf in the presence of mine!"}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1800208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
                <SidebarCard
                    conversationID={1}
                    firstName={"Adamn"}
                    lastName={"Potato"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700208001000}
                    message={"Yesterday was a good time for me :("}
                    selected={false}
                    setChatWindow={()=>{console.log("nothing happened! haha!!!")}}
                />
            </SuccessfulMatchesSidebar>
            <ChatBody messages={dummyData}/>
        </SuccessfulMatchesContainer>
    )
}

export default SuccessfulMatches