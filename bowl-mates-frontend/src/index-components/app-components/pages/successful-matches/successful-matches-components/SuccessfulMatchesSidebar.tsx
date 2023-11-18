// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";

// Sidebar Measurement import from Successful Matches Page
import {sidebarMeasurements} from "../SuccessfulMatches";

const SuccessfulMatchesContainer = styled(Box)(() => ({
    display: "flex",
    height: "calc(100% + 20px)",
    width: "calc(100% + 40px)",
    margin: "-20px", // Fills in the padding from the bodyContainer
}));

const ChatSidebarContainer = styled(Box)(() => ({
    height: "calc(100% + 20px)", // Needs an extra 20 to fill the side otherwise background shows
    width: sidebarMeasurements.chatSidebarWidth,
    background: "rgba(256, 256, 256, 0.6)",
    display: "inline-block",
    overflow: "hidden",

    // Uses the hover property of css
    '&:hover': {
        overflowY: "auto",
        width: sidebarMeasurements.chatSidebarWidthPlusScrollbar
    },
}));

const ChatSidebar = styled(Box)(() => ({
    height: "calc(100% + 20px)",
    width: sidebarMeasurements.chatSidebarWidth,
}));

const ChatBody = styled(Box)(() => ({
    height: "calc(100% + 20px)",
    width: "calc(100vw - " + sidebarMeasurements.chatSidebarWidth + ")",
    backgroundColor: "white",
}));

interface Props {}

function SuccessfulMatchesSidebar(props : React.PropsWithChildren<Props>) {
    return (
        <SuccessfulMatchesContainer>
            <ChatSidebarContainer>
                <ChatSidebar>
                    {/*SidebarCards go here*/}
                    {props.children}
                </ChatSidebar>
            </ChatSidebarContainer>
            <ChatBody></ChatBody>
        </SuccessfulMatchesContainer>
    )
}
export default SuccessfulMatchesSidebar