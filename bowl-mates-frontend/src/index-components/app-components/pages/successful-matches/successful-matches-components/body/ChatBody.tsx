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
import usePostNewMessage from "../../../../../../hooks/chat-hooks/usePostNewMessage";

const sendBoxSize = "90px";

const ChatBodyContainer = styled(Box)(() => ({
    height: "100%",
    flexGrow: 1,
    minWidth: "400px",
    padding: "20px",
}));

const ChatBox = styled(Box)(() => ({
    height: "calc(100% - " + sendBoxSize + ")",
    minWidth: "100%",
    width: "100%",
    flexGrow: 1,
    padding: "20px",
    overflow: "hidden",
    display: "inline-block",
    // Uses the hover property of css
    '&:hover': {
        overflowY: "auto",
    },
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
    matchID: number,
    messages: chatMessage[],
    fetchMessages: () => void;
}



function ChatBody(props : Props){

    const [newMessage, setNewMessage] = useState("");
    const {postNewMessage} = usePostNewMessage();

    return (
        <ChatBodyContainer>
            <ChatBox>
                {
                    props.messages.map((chatMessage,index)=>{
                        return <MessageBubble timestamp={chatMessage.date} message={chatMessage.message} isUser={index % 2 === 1}/>
                    })
                }
            </ChatBox>
            <SendContainer>
                <SendForm value={newMessage}
                          onChange={(event)=>{
                              setNewMessage(event.target.value);
                          }}/>
                <ModifiedIconButton
                    onClick={async ()=>{
                        if(newMessage !== "" && props.matchID !== -1){
                            if(await postNewMessage(props.matchID, newMessage)){
                                props.fetchMessages();
                                setNewMessage("");
                            } else {
                                console.log("Message Failed to send");
                            }
                        }
                    }}
                >
                    <SendIcon/>
                </ModifiedIconButton>
            </SendContainer>
        </ChatBodyContainer>
    )
}

export default ChatBody
