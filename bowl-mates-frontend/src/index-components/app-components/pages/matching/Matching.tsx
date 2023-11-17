// MUI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

import UserCard from "../../UserCard";

function Matching () {
    /**
     * Returns the page where you swipe left and right on various user cards
     * will update matches list and potential matches queue as the user interacts
     */
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box component="section" sx={{ p: 2}}><UserCard /></Box>
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