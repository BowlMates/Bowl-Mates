// React Imports
import React from "react";

// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledBody = styled(Box)(() => ({
    height: "100px",
    width: "100px",
    backgroundColor: "greenyellow",
}));

interface Props {}

function MessageBubble(props : Props){

    return (<StyledBody/>);
    // return (<></>);
}

export default MessageBubble
