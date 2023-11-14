// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

import bm from "../../../../images/BOWLMATES-LOGO.png";

function Landing() {

    // Hook for navigation
    const navigate = useNavigate();

    // Handler for navigating to the login page.
    const handleLogin = () => {
        navigate("/login")
    };

    // Handler for navigating to the sign-up page.
    const handleSignUp = () => {
        navigate('sign-up')
    };

    // Main return statement for the Landing component
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            p={3}
            bgcolor="#FFD9DF"
            color="text.primary"
        >
            <Box
                component="img"
                src={bm}
                alt="Logo"
                sx={{width: 300, height: 'auto', marginBottom: 2}}
            >
            </Box>
            <Typography
                variant="h2"
                component="h1"
                sx={{fontStyle: 'italic', color: 'green', marginBottom: 2}}
            >
                connection through cuisine
            </Typography>
            <Button
                variant="contained"
                onClick={handleLogin}
                sx={{
                    padding: '10px 20px',
                    fontSize: '2rem',
                    minWidth: '150px',
                    height: '55px',
                    backgroundColor: '#54804D',
                    color:'#FDF5F5',
                    '&:hover': {
                        backgroundColor:'#FDF5F5',
                        color:'#54804D'
                    },
                    borderRadius: 50, // adjust for ellipsis shape
                    marginBottom: 1
                }}
            >
                login
            </Button>
            <Button
                variant="contained"
                onClick={handleSignUp}
                sx={{
                    padding: '10px 20px',
                    fontSize: '2rem',
                    minWidth: '150px',
                    height: '55px',
                    backgroundColor:'#FDF5F5',
                    color:'#54804D',
                    '&:hover': {
                        backgroundColor:'#54804D',
                        color:'#FDF5F5',
                    },
                    borderRadius: 50, // adjust for ellipsis shape
                    marginBottom: 1
                }}
            >
                sign up
            </Button>
        </Box>

    )
}

export default Landing