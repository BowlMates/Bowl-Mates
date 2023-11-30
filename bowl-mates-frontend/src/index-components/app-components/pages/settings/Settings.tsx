// MUI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import React, {useEffect} from "react";
import UploadImg from "../../UploadImg";

// Custom Imports
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";

function Settings () {
    const isSessionValid = useIsUserSessionValid();
    useEffect(()=>{
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
    });

    // need to add photo upload functionality
    return (
        /**
         * A page with two halves, the left side displays the user's own user card and the right side has
         * text fields with default or exiting user info where you can edit your info and change the profile picture
         */
        <Container maxWidth="sm">
            <Typography variant="h1">
                give us the details
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField id="filled-basic" label="display name" variant="filled" fullWidth={true}
                               inputProps={{maxLength: 30}}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="filled-basic" label="pronouns" variant="filled" fullWidth={true}
                               inputProps={{maxLength: 30}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="filled-multiline-static"
                        label="bio"
                        multiline
                        rows={4}
                        defaultValue="don't be shy, give the people something to relate to!"
                        variant="filled"
                        fullWidth={true}
                        inputProps={{maxLength: 300}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained">select photo</Button>
                    <UploadImg />
                </Grid>
                <Grid item xs={6}>
                    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>photo preview</Box>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained">submit</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Settings