// MUI Imports
import {styled} from "@mui/material/styles";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import React from "react";

function Settings () {

    // need to add photo upload functionality
    return (
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