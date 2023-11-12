// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Google APi imports
import MapComponent from "../../MapComponent";

function FindRestaurants() {
    const theme = useTheme();
    return (
        <Box display={"flex"} sx={{flexDirection : "column", alignItems : "center", justifyContent : "center"}}>
            <Typography variant={"h3"}>
                This is the restaurant finder tool!
                <MapComponent />
            </Typography>
        </Box>
    )
}

export default FindRestaurants