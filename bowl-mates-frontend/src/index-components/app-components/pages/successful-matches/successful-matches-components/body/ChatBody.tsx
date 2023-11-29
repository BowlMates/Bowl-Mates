// React Imports
import React, {useState} from "react";

// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {chatMessage} from "../../../../../../data-types/chatMessage";
import MessageBubble from "./MessageBubble";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import IconButton from "@mui/material/IconButton";

const sendBoxSize = "90px";

const ChatBodyContainer = styled(Box)(() => ({
    height: "100%",
    flexGrow: 1,
    minWidth: "200px",
    padding: "20px",
}));

const ChatBox = styled(Box)(() => ({
    height: "calc(100% - " + sendBoxSize + ")",
    flexGrow: 1,
    padding: "20px",
    overflow: "auto",
}));

const SendContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    height: sendBoxSize,
    flexGrow: 1,
}));

const SendForm = styled(TextField)(() => ({
    flexGrow: 2,
    margin: "auto",
    paddingRight: "10px",
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'darkGrey',
        },
        '&:hover fieldset': {
            borderColor: 'darkGrey',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'darkGreen',
        },
    }
}));

const ModifiedIconButton = styled(IconButton)(() => ({
    margin: "auto",
    padding: "15px",
}));


interface Props {
    messages : chatMessage[]
}

function ChatBody(props : Props){

    const [newMessage, setNewMessage] = useState("");

    return (
        <ChatBodyContainer>
            <ChatBox>
                {
                    props.messages.map((chatMessage,index)=>{
                        return <MessageBubble message={chatMessage.message} isUser={index % 2 === 1}/>
                    })
                }
            </ChatBox>
            <SendContainer>
                <SendForm value={newMessage}
                          onChange={(event)=>{
                              setNewMessage(event.target.value);
                          }}/>
                <ModifiedIconButton>
                    <SendIcon/>
                </ModifiedIconButton>
            </SendContainer>
        </ChatBodyContainer>
    )
}

export default ChatBody
