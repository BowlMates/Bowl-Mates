// React Imports
import React from "react";

// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
    message : string,
    isUser : boolean,
}

function MessageBubble(props : Props){

    const BubbleContainer = styled(Box)(() => ({
        maxWidth: "40%",
        width: "fit-content",
        padding: "10px",
        marginLeft: props.isUser ? "auto" : "0px",
    }));

    const ChatBubble = styled(Box)(() => ({
        position: "relative",
        padding: "10px 20px 10px 20px",
        background: props.isUser ? "lightGreen" : "hotPink",
        borderRadius: props.isUser ? "30px 30px 0px 30px" : "30px 30px 30px 0px",
        overflowWrap: "break-word",
    }));

    return (
        <BubbleContainer>
            <ChatBubble>
                <Typography>
                    {props.message}
                </Typography>
            </ChatBubble>
        </BubbleContainer>
    );
}

export default MessageBubble
