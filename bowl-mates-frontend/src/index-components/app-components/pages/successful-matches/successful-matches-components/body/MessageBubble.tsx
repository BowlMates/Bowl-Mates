// React Imports
import React, {useEffect, useRef} from "react";

// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//Custom Imports
import {getDayMonthYear, getClockTime} from "../timestamps";

interface Props {
    message : string,
    timestamp: number,
    isUser : boolean,
    isLastMessage: boolean
}

function MessageBubble(props : Props){


    const bubbleDate : Date = new Date(props.timestamp);
    const bubbleClockTime : string = getClockTime(bubbleDate);
    const bubbleDateTime : string = getDayMonthYear(bubbleDate);
    const messageSentToday : boolean = getDayMonthYear(bubbleDate) === getDayMonthYear(new Date(Date.now()));
    const bubbleDateString : string = messageSentToday ? bubbleClockTime : bubbleDateTime + " " + bubbleClockTime;
    const ref = useRef(null);

    const scrollToElement = () => {
        // @ts-ignore
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToElement();
    }, []);

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
        <BubbleContainer ref={ref}>
            <Typography sx={{textAlign: props.isUser ? "right" : "left"}} variant={"subtitle2"}>
                {bubbleDateString}
            </Typography>
            <ChatBubble>
                <Typography>
                    {props.message}
                </Typography>
            </ChatBubble>
        </BubbleContainer>
    );
}

export default MessageBubble
