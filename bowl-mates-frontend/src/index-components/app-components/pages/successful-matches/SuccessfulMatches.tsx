// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//Pre-Styling
//----------------------------------------------------------------------------
// You can pre-style components using the styled method/function
// Place the component type you want styled as an argument (in this case - Box)
// and then style the inside as if it were in-line styling or styling in a css
// file
const SuccessfulMatchesContainer = styled(Box)(({ theme }) => ({
    display : "flex",
    height : "calc(100% + 20px)",
    width : "calc(100% + 40px)",
    margin : "-20px",
}));

const ChatSelectionBox = styled(Box)(({ theme }) => ({
    height : "calc(100% + 20px)",
    width : "280px",
    backgroundColor : "black",
}));

const ChatBox = styled(Box)(({ theme }) => ({
    height : "calc(100% + 20px)",
    width : "calc(100vw - 280px)",
    backgroundColor : "purple",
}));



function SuccessfulMatches () {

    return (
        <SuccessfulMatchesContainer>
            <ChatSelectionBox></ChatSelectionBox>
            <ChatBox></ChatBox>
        </SuccessfulMatchesContainer>
    )
}

export default SuccessfulMatches