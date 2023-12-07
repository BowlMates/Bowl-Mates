import React from 'react';
import {To, useNavigate} from 'react-router-dom';
import photo from '../../../../images/map-2.png';

// MUI Imports
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";

// Custom Imports
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import {useEffect} from "react";
import {useAuthUser} from "react-auth-kit";


const Home = () => {
    useIsUserSessionValid();
    const navigate = useNavigate();
    const authUser = useAuthUser();

    const navigateTo = (path: To) => {
        navigate(path);
    };

    return (
        <>

            <Typography variant="h3" style={{ textAlign: 'center', color: 'black'}}>
                Welcome back, {authUser()!.firstName}!
            </Typography>
            {/*change to https://bowlmates.me/app/ later on*/}

            {/* Div to control the size and position of the Accordion */}
            <Box sx={{
                maxWidth: '600px', // Adjust the width as needed
                margin: '20px auto', // Centers the div
                padding: '0 10px', // Optional padding
                alignContent: "center"
            }}>
                {/* Accordion for Instructions */}
                <Accordion style={{ margin: '20px 0' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{
                            display: 'flex',
                            justifyContent: 'center', // Center horizontally
                            alignItems: 'center', // Center vertically
                            textAlign: 'center', // Ensure text is centered
                        }}
                    >
                        <Typography style={{ flex:1, color:'#54804D'}} >
                            How to Use This Site
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Step 1: Customize your profile
                            <br />
                            Step 2: Add your favorite restaurants around you
                            <br />
                            Step 3: Add your availability
                            <br />
                            Step 4: Find matches
                            <br />
                            Step 5: Chat with your matches, go eat!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>


            <Box sx={{ margin: "auto", justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                <img src={photo} alt="BowlMates banner" style={{height: "35vw", marginTop: "-50px"}} />
            </Box>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'space-around'
            }}>
                <Button onClick={() => navigateTo("find-restaurants")} variant="contained" style={{ fontSize: "0.8vw", backgroundColor: '#54804D', color: 'white' }}>
                    Find places to eat
                </Button>

                <Button onClick={() => navigateTo("matching")} variant="contained" style={{ fontSize: "0.8vw", backgroundColor: '#54804D', color: 'white' }}>
                    Find people to eat with
                </Button>

                <Button onClick={() => navigateTo("successful-matches")} variant="contained" style={{ fontSize: "0.8vw", backgroundColor: '#54804D', color: 'white' }}>
                    Chat with your matches
                </Button>

                <Button onClick={() => navigateTo("availability")} variant="contained" style={{ fontSize: "0.8vw", backgroundColor: '#54804D', color: 'white' }}>
                    Update your availability
                </Button>

                <Button onClick={() => navigateTo("settings")} variant="contained" style={{ fontSize: "0.8vw", backgroundColor: '#54804D', color: 'white' }}>
                    Edit your profile
                </Button>
            </Box>

        </>
    )
}

export default Home