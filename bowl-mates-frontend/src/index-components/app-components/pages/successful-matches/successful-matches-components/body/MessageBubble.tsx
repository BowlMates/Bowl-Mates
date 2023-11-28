// React Imports
import React from "react";

// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledBody = styled(Box)(() => ({
    maxWidth: "40%",
    backgroundColor: "greenyellow",
}));

interface Props {
    message : string;
}

function MessageBubble(props : Props){

    return (
        <StyledBody>
            <Typography>
                {props.message}
            </Typography>
        </StyledBody>
    );
    // return (<></>);
}

export default MessageBubble
