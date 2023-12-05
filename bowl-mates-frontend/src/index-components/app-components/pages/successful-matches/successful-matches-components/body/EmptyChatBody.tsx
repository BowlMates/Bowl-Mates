// React Imports
import React, {useState} from "react";

// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ChatBodyContainer = styled(Box)(() => ({
    height: "100%",
    flexGrow: 1,
    minWidth: "400px",
    padding: "20px",
}));

function EmptyChatBody(){
    return (
        <ChatBodyContainer>
            <Typography variant={"h2"} sx={{textAlign: "center"}}>
                Try getting going through your match lists to get new matches!
            </Typography>
        </ChatBodyContainer>
    )
}

export default EmptyChatBody
