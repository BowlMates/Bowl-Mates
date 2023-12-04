// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import {ToggleButton} from "@mui/material";
import React from "react";

// Sidebar Measurement import from Successful Matches Page
import {sidebarMeasurements} from "../../SuccessfulMatches";

//Custom Imports
import {getDayMonthYear, getClockTime} from "../timestamps";

const MatchBox = styled(Box)(() => ({
    height: "70px",
    width: sidebarMeasurements.chatSidebarWidthMinusSomeValue,
    minWidth: sidebarMeasurements.chatSidebarWidthMinusSomeValue,
    display: "flex",
    alignItems: "center",
    padding: "3px",
    paddingRight: "0px",

    // Uses the selected property of css - but for MUI
    "&& .Mui-selected": {
        background: "rgba(20, 100, 256, 0.3)",
        // Selects all child Mui Dividers and sets display to none
        ".MuiDivider-root": {
            display: "none",
        },
    },
}));

const MatchBoxContentContainerWithToggle = styled(ToggleButton)(() => ({
    flexGrow: 1,
    border: "0px",
    textTransform: "revert",
    padding: "5px",
    height: "100%",
    width: "100%"
}));

const AvatarContainer = styled(Box)(() => ({
    paddingLeft: "10px",
    paddingRight: "10px"
}));

const MatchBoxTextContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    flexGrow: 1,
    height: "100%",
    justifyContent: "center",
    maxWidth: "calc(100% - 60px)",
}));

const NameDateContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
}));

const NameText = styled(Typography)(() => ({
    color: "black",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
}));

const DateText = styled(Typography)(() => ({
    color: "grey",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
}));

const LastMessageText = styled(Typography)(() => ({
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    flexGrow: 2,
}));


interface Props {
    matchID: number,
    firstName: string,
    lastName: string,
    imageURL: string,
    timeInMilliseconds: number,
    message: string,
    selected: boolean,
    setChatWindow: (newSelection : number) => void,
}

function SidebarCard(props: React.PropsWithChildren<Props>) {

    const currentDate = new Date();
    const currentDayMonthYear = getDayMonthYear(currentDate);
    const chatDate = new Date(props.timeInMilliseconds);
    const chatDayMonthYear = getDayMonthYear(chatDate);
    const chatClockTime = getClockTime(chatDate)
    const displayTime = currentDayMonthYear === chatDayMonthYear ? chatClockTime : chatDayMonthYear;

    const fullName: string = props.firstName + " " + props.lastName;

    return (
        <MatchBox>
            <MatchBoxContentContainerWithToggle
                value={props.matchID}
                selected={props.selected}
                onClick={()=>{props.setChatWindow(props.matchID)}}
            >
                <AvatarContainer>
                    <Avatar alt={fullName} src={props.imageURL}/>
                </AvatarContainer>
                <MatchBoxTextContainer>
                    <NameDateContainer>
                        <NameText variant={"body1"}>{fullName}</NameText>
                        <DateText variant={"body2"}>{props.timeInMilliseconds !== -1 ? displayTime : ""}</DateText>
                    </NameDateContainer>
                    <LastMessageText variant={"body2"}>{props.message}</LastMessageText>
                    <Divider/>
                </MatchBoxTextContainer>
            </MatchBoxContentContainerWithToggle>
        </MatchBox>
    )
}

export default SidebarCard