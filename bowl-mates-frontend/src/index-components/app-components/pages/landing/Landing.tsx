// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

import bm from "../../../../images/BOWLMATES-LOGO.png";

function Landing() {

    //Notes about some MUI component types you will probably use the most
    //----------------------------------------------------------------------------
    //Note: Box is a better div (pls don't use divs)
    //Note: Typography is a better version of html text tags (h1, p, etc...).
    //      you can set the type of typography using variant={"h1"} within the tag
    //Note: There is usually an MUI replacement for everything so try to stick with
    //      this family of components since they will be most cohesive together
    //      while also allowing us to change theming easier and possibly implement
    //      dark theme functionality

    const navigate = useNavigate();
    const logo = ""; // put path to our logo here
    const handleLogin = () => {
        navigate('www.bowlmates.me/login') // replace with our login route
    };
    const handleSignUp = () => {
        navigate('www.bowlmates.me/signup') // replace with our signup route
    };

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
                    //size stuff
                    //borderRadius:50,
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