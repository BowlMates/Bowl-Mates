// MUI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button";
import React, {useEffect} from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

//Custom Imports
import UserCard from "../../UserCard";
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import {useGetProfile} from "../../../../hooks/useGetProfile";

function Matching () {
    const isSessionValid = useIsUserSessionValid();
    const { userProfile, getProfile } = useGetProfile();

    useEffect(()=>{
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
    });

    // Fetch profile details on component mount
    useEffect( () => {
        getProfile();
    }, []);

    /**
     * Returns the page where you swipe left and right on various user cards
     * will update matches list and potential matches queue as the user interacts
     */
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box component="section" sx={{ p: 2}}><UserCard userProfile={userProfile} userImage={''} /></Box>
                </Grid>
                <Grid item xs={6}>
                    <Button color="error" variant="outlined" fullWidth={true} startIcon={<WestIcon />}>
                        Swipe left
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button color="success" variant="outlined" fullWidth={true} endIcon={<EastIcon />}>
                        Swipe right
                    </Button>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Matching