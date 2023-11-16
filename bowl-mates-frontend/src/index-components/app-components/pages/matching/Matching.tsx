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

    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}><UserCard /></Box>
                </Grid>
                <Grid item xs={6}>
                    <Button color="error" variant="outlined" fullWidth={true} startIcon={<WestIcon />}>
                        new card
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button color="success" variant="outlined" fullWidth={true} endIcon={<EastIcon />}>
                        set date
                    </Button>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Matching