// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/material";

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


function Availability () {

    //Notes about some MUI component types you will probably use the most
    //----------------------------------------------------------------------------
    //Note: Box is a better div (pls don't use divs)
    //Note: Typography is a better version of html text tags (h1, p, etc...).
    //      you can set the type of typography using variant={"h1"} within the tag
    //Note: There is usually an MUI replacement for everything so try to stick with
    //      this family of components since they will be most cohesive together
    //      while also allowing us to change theming easier and possibly implement
    //      dark theme functionality

    return (
        <Box>
            <Box>

            <Typography variant="h2"
                        style={
                            {
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 300,
                            fontSize: '48px',
                            lineHeight: '1.2'}}
                        align="left"
                        color="000000">
                when are you
        </Typography></Box>
            <Box>
        <Typography variant="h2"
                    style={
                        {
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 100,
                            fontSize: '128px',
                            lineHeight: '1.2'}}
                    align="left"
                    color="000000">
            free?
        </Typography></Box>
        </Box>
    )
}

export default Availability