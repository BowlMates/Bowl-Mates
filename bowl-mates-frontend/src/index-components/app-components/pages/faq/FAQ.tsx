// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from  "@mui/material/Container";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';


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

function FAQ () {

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
        <Container maxWidth={"sm"}>
            <Typography variant={"h1"}>
                FAQ
            </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>What is Bowlmates?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            It is Geoffgeoff's favorite new app on the block hehe
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Why is Geoffgeoff so hot?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Some things are just laws of nature that you can't really question.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Who is the Bowlmates team?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Geoffgeoff, Jasper Balinas, Cade and Tim Dillon,
                        Dan Johnson, and Stephen Cushbear
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default FAQ