// React Imports
import React, {useState} from "react";

// MUI Imports
import Alert from '@mui/material/Alert';
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {chatMessage} from "../../../../../../data-types/chatMessage";
import MessageBubble from "./MessageBubble";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import IconButton from "@mui/material/IconButton";
import usePostNewMessage from "../../../../../../hooks/chat-hooks/usePostNewMessage";
import {useAuthUser} from "react-auth-kit";

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
    paddingRight: "44px",
    overflow: "auto",
    display: "inline-block",
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
    const [issueSendingMessage, setIssueSendingMessage] = useState(false);
    const [messageThatHadIssue, setMessageThatHadIssue] = useState("");
    const {postNewMessage} = usePostNewMessage();
    const auth = useAuthUser();

    return (
        <ChatBodyContainer>
            {
                issueSendingMessage ?
                <Alert severity={"error"} onClose={() => {setIssueSendingMessage(false)}} sx={{position: "absolute", zIndex: 3}}>
                {"Issue Sending your last message: " + messageThatHadIssue}
                </Alert> : <></>
            }
            <ChatBox>
                {
                    props.messages.map((chatMessage,index)=>{
                        return (
                            <MessageBubble
                                key={chatMessage.date}
                                timestamp={chatMessage.date}
                                message={chatMessage.message}
                                isUser={auth()?.userID === chatMessage.chatterId}
                                isLastMessage={index === props.messages.length - 1}
                            />
                        )
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
                                setIssueSendingMessage(false);
                                setNewMessage("");
                            } else {
                                setIssueSendingMessage(true);
                                setMessageThatHadIssue(newMessage);
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
