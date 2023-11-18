import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";

import {sidebarMeasurements} from "../SuccessfulMatches";

const Body = styled(Box)(() => ({
    height: "calc(100% + 20px)",
    width: "calc(100vw - " + sidebarMeasurements.chatSidebarWidth + ")",
    backgroundColor: "white",
}));


function ChatBody() {

    return (
        <Body/>
    )
}

export default ChatBody
