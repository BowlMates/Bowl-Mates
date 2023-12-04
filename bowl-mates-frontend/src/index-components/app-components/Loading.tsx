import logo from "../../images/BOWLMATES LOGO V2.png";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";

function Loading() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            {/* Logo */}
            <img src={logo} alt="Bowlmates Logo" style={{ width: '200px', marginBottom: '20px' }} />

            {/* Text */}
            <Typography variant="h4" sx={{ color: '#54804D', marginBottom: '20px' }}>
                Searching for some yummy places to eat!
            </Typography>

            {/* CircularProgress */}
            <CircularProgress sx={{ color: '#54804D', width: '200px', height: '200px' }} />
        </Box>
    )
}



export default Loading;