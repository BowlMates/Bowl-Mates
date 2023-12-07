import logo from "../../images/mascots.png";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";

const messages: string[] = [
    'Searching for some yummy places to eat!',
    'Fetching your lovely details!',
    'Finding you new friends to eat with!',
    'Successfully registered! Redirecting...',
    'Getting ready to provide you with a delightful chatting experience'
];

interface LoadingProps {
    displayMessage: number;
}


const Loading: React.FC<LoadingProps> = ({displayMessage}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="auto"
        >
            {/* Logo */}
            <img src={logo} alt="Bowlmates Logo" style={{ width: '30vw', paddingBottom: '20px' }} />

            {/* Text */}
            <Typography variant="h4" sx={{ color: '#54804D', paddingBottom: '20px' }}>
                {messages[displayMessage]}
            </Typography>

            {/* CircularProgress */}
            <CircularProgress sx={{ color: '#54804D', width: '5vw', height: '5vw' }} />
        </Box>
    )
}



export default Loading;