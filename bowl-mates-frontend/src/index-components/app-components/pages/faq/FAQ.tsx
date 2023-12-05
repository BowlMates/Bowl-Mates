import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "@mui/material/Link";
import carly from "../../../../images/carly the cauliflower.png";
import brock from "../../../../images/brock the broccoli.png";
import Grid from "@mui/material/Grid";
import { useIsUserSessionValid } from "../../../../hooks/useIsUserSessionValid";

function FAQ() {
    const isSessionValid = useIsUserSessionValid();

    useEffect(() => {
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
    });

    const faqData = [
        {
            question: "What is Bowlmates?",
            answer: "It is a way to meet new people by matching based on availability and favorite restaurants."
        },
        {
            question: "Do you have a user manual?",
            answer: "Yes, it is linked here: ",
            link: "https://docs.google.com/document/d/1XaWdXT156YKWg6wizoMOhZdTV7eUF3p0ckaLsWxtqPk/edit?usp=sharing",
            linkText: "User Manual"
        },
        {
            question: "How can I report bugs?",
            answer: "Here is a link to report bugs: ",
            link: "https://docs.google.com/document/d/1XaWdXT156YKWg6wizoMOhZdTV7eUF3p0ckaLsWxtqPk/edit?usp=sharing",
            linkText: "Bug Report Form"
        },
        {
            question: "Who is the BowlMates team?",
            answer: "Jasper Balinas, Cade Dillon,  Tim Dillon, " +
                "Dan Johnson, Stephen Cushman, and Geoffrey Aldrich"
        }
        // Add more question-answer pairs as needed
    ];

    const linkStyles = {
        color: "blue", // Set the color to blue
        textDecoration: "none", // Remove underline (optional)
        '&:hover': {
            textDecoration: "underline", // Add underline on hover (optional)
        }
    };

    return (

        <Grid container spacing={2}>
            <Grid item xs={3}>
                <img src={carly} alt="carly" width="300px"/>
            </Grid>
            <Grid item xs={6}>
                    <Container maxWidth="sm">
                        <Typography variant="h1">FAQ</Typography>
                        {faqData.map((faq, index) => (
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                >
                                    <Typography>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {faq.answer}
                                        {faq.link && (
                                            <Link href={faq.link} sx={linkStyles}>
                                                {faq.linkText || "Link"}
                                            </Link>
                                        )}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Container>
            </Grid>
            <Grid item xs={3}>
                <img src={brock} alt="brock" width="300px"/>
            </Grid>
        </Grid>
    );
}

export default FAQ;
