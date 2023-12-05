// MUI Imports
import Typography from "@mui/material/Typography";

// Custom Imports
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import {useEffect} from "react";
// import our MatchCard heeeereeeeee

function Home () {
    const isSessionValid = useIsUserSessionValid();

    // Need:
    // state for storing username of logged in user
    // state for storing list of user's approved matches
    //      idea: display users top 5 most recent matches
    //          make an api endpoint that fetches them
    // MORE IDEAS FOR WHAT Y'ALL WANT ON THE HOME PAGE

    useEffect(()=>{
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();

        // When component mounts:
        // Fetch username
        // Fetch top five matches
    });

    // PLACEHOLDER FUNCTION
    // Function to fetch username from database if we don't already have
    // const fetchUserName = async () => {
    //      // Replace with actual API call to fetch username
    //      const response = await fetch('/api/matches/username');
    //      const data = await response.json();
    //      setMatches(data.username);
    // }

    // PLACEHOLDER FUNCTION
    // Function to fetch top five matches
    // const fetchMatches = async () => {
    //      // Replace with non-fictitous API call to fetch matches
    //      const response = await fetch('/api/matches/top5');
    //      const data = await response.json();
    //      setMatches(data.matches);
    // }

    // PLACEHOLDER FUNCTION
    // Function to render user cards for each match
    // const renderMatches = () => {
    //      // Map each match to a MatchCard component
    //      return matches.map(match => (
    //          <MatchCard key={match.id} match={match} />
    //      ));
    // };

    return (
        <>
            <Typography variant={"h1"}>
                Welcome home, son!
            </Typography>
            <img alt={"Adam watching yo, he is."} src={"https://i.ibb.co/TmJw9kS/IMG-3336.jpg"} style={{height : "100%", width : "100%"}}/>
        </>

        // JASP EDIT FOR ABOVE, TO BECOME BELOW:
        // <>
        //     <Typography variant="h1">
        //         Welcome back, {username}!
        //     </Typography>
        //     <div style={{marginTop: '20px'}}>
        //         {renderMatches()}
        //     </div>
        // </>
    )
}

export default Home