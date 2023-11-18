// MUI Imports

// Custom Imports
import SuccessfulMatchesContainer from "./successful-matches-components/SuccessfulMatchesContainer";
import SuccessfulMatchesSidebar from "./successful-matches-components/SuccessfulMatchesSidebar";
import ChatBody from "./successful-matches-components/ChatBody";
import SidebarCard from "./successful-matches-components/SidebarCard";

//Changing this num changes the width of the sidebar and the various widths pertaining to the sidebar
const chatSidebarWidthNum : number = 320;
const chatSidebarWidth : string = chatSidebarWidthNum + "px";
const chatSidebarWidthPlusScrollbar : string = (chatSidebarWidthNum + 20) + "px";
const chatSidebarWidthMinusSomeValue : string = (chatSidebarWidthNum - 18) + "px";

interface sidebarMeasurementType {
    chatSidebarWidthNum : number,
    chatSidebarWidth : string,
    chatSidebarWidthPlusScrollbar : string,
    chatSidebarWidthMinusSomeValue : string,
}

export const sidebarMeasurements : sidebarMeasurementType = {
    chatSidebarWidthNum : chatSidebarWidthNum,
    chatSidebarWidth : chatSidebarWidth,
    chatSidebarWidthPlusScrollbar : chatSidebarWidthPlusScrollbar,
    chatSidebarWidthMinusSomeValue : chatSidebarWidthMinusSomeValue,
}

function SuccessfulMatches() {


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
                    firstName={"Adamn"}
                    lastName={"Brown"}
                    imageURL={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"}
                    timeInMilliseconds={1700300074024}
                    message={"Today is a good time for me"}
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
            <ChatBody/>
        </SuccessfulMatchesContainer>
    )
}

export default SuccessfulMatches