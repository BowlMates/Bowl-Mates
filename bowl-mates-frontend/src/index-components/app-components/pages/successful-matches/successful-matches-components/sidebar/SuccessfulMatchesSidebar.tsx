// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";

// Sidebar Measurement import from Successful Matches Page
import {sidebarMeasurements} from "../../SuccessfulMatches";

const ChatSidebarContainer = styled(Box)(() => ({
    className: "chat-sidebar-container",
    height: "100%", // Needs an extra 20 to fill the side otherwise background shows
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

interface Props {}

function SuccessfulMatchesSidebar(props : React.PropsWithChildren<Props>) {
    return (
        <ChatSidebarContainer>
            <ChatSidebar>
                {/*SidebarCards go here*/}
                {props.children}
            </ChatSidebar>
        </ChatSidebarContainer>
    );
}
export default SuccessfulMatchesSidebar