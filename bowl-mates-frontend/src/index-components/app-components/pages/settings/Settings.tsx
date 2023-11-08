// MUI Imports
import {styled} from "@mui/material/styles";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import React from "react";

//Pre-Styling
//----------------------------------------------------------------------------
// You can pre-style components using the styled method/function
// Place the component type you want styled as an argument (in this case - Box)
// and then style the inside as if it were in-line styling or styling in a css
// file
const ExampleStyledComponent = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    marginTop: "64px",
    p: 3, //padding
    backgroundColor: theme.palette.primary.main,
    height: "calc(100% - 64px)",
    width: "auto"
}));



function Settings () {

    //Notes about some MUI component types you will probably use the most
    //----------------------------------------------------------------------------
    //Note: Box is a better div (pls don't use divs)
    //Note: Typography is a better version of html text tags (h1, p, etc...).
    //      you can set the type of typography using variant={"h1"} within the tag
    //Note: There is usually an MUI replacement for everything so try to stick with
    //      this family of components since they will be most cohesive together
    //      while also allowing us to change theming easier and possibly implement
    //      dark theme functionality

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