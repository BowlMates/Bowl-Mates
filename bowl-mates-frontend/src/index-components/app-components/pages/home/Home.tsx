import React from 'react';
import {To, useNavigate} from 'react-router-dom';
import photo from '../../../../images/map-2.png';

// MUI Imports
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

            <Typography variant="h1" style={{ textAlign: 'center', color: 'black'}}>
                Welcome back, {authUser()!.firstName}!
            </Typography>
            {/*change to https://bowlmates.me/app/ later on*/}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'space-around'
            }}>
            <Button onClick={() => navigateTo("find-restaurants")} variant="contained" style={{ backgroundColor: '#54804D', color: 'white' }}>
                    Find places to eat
                </Button>

                <Button onClick={() => navigateTo("matching")} variant="contained" style={{ backgroundColor: '#54804D', color: 'white' }}>
                    Find people to eat with
                </Button>

                <Button onClick={() => navigateTo("successful-matches")} variant="contained" style={{ backgroundColor: '#54804D', color: 'white' }}>
                    Chat with your matches
                </Button>

                <Button onClick={() => navigateTo("availability")} variant="contained" style={{ backgroundColor: '#54804D', color: 'white' }}>
                    Update your availability
                </Button>

                <Button onClick={() => navigateTo("settings")} variant="contained" style={{ backgroundColor: '#54804D', color: 'white' }}>
                    Edit your profile
                </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={photo} alt="BowlMates banner" style={{ marginTop: '-100px' }} />
            </div>

        </>
    )
}

export default Home