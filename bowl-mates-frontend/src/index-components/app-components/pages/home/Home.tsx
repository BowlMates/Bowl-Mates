// MUI Imports
import Typography from "@mui/material/Typography";

// Custom Imports
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import {useEffect} from "react";

function Home () {
    const isSessionValid = useIsUserSessionValid();
    useEffect(()=>{
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
    });

    return (
        <>
            <Typography variant={"h1"}>
                This is the home page!
            </Typography>
            <img alt={"Adam watching yo, he is."} src={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"} style={{height : "100%", width : "100%"}}/>
        </>
    )
}

export default Home