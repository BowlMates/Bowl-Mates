// MUI Imports
import Typography from "@mui/material/Typography";
import Container from  "@mui/material/Container";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "@mui/material/Link";


function FAQ () {
    // returns an FAQ of common questions and has a link to our user manual
    return (
        /**
         * Creates a centered container that contains a list of questions that expand to
         * display the answers to said listed questions on click
         */
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
                        It is a way to meet new people by matching based on availability and favorite restaurants.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Do you have a user manual?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes it is linked here:
                    </Typography>
                    <Link href="https://docs.google.com/document/d/1XaWdXT156YKWg6wizoMOhZdTV7eUF3p0ckaLsWxtqPk/edit?usp=sharing">User Manual</Link>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How can we report bugs?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Report any bugs you encounter using this form:
                    </Typography>
                    <Link href="https://docs.google.com/document/d/1XaWdXT156YKWg6wizoMOhZdTV7eUF3p0ckaLsWxtqPk/edit?usp=sharing">Bug Report Form</Link>
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
                        Jasper Balinas, Cade Dillon,  Tim Dillon,
                        Dan Johnson, Stephen Cushman, and Geoffrey Aldrich
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default FAQ