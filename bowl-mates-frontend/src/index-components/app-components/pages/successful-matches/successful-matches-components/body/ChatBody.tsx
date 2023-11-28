// React Imports
import React from "react";

// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

// Custom Imports
import {sidebarMeasurements} from "../../SuccessfulMatches";

const Body = styled(Box)(() => ({
    height: "100%",
    width: "calc(100vw - " + sidebarMeasurements.chatSidebarWidthNum + ")",
}));

interface Props {}

function ChatBody(props : React.PropsWithChildren<Props>){

    return (
        <Body>
            {props.children}
        </Body>
    )
}

export default ChatBody
