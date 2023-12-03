import React, {useEffect, useState} from "react";

// MUI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

//Custom Imports
import UserCard from "../../UserCard";
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import useGetMatches from "../../../../hooks/useGetMatches";
import useGetAcceptMatch from "../../../../hooks/useGetAcceptMatch";
import useGetRejectMatch from "../../../../hooks/useGetRejectMatch";
// TODO:
// 1. Manage current match index/queue of matches
//      - Have a function to fetch matches queue (`fetchMatchesQueue' is placeholder here)
//      - Have a function to update database when match accepted ('addMatchToDatabase' is placeholder here)
// 2. Handle swipe actions
//      - 'handleSwipeLeft' --> removes current match from queue
//      - 'handleSwipeRight' --> removes from queue, adds to database
// 3. Displaying user cards
//      - card component displays info based on current match
//      - pass current match as prop to this component

function Matching () {
    const isSessionValid = useIsUserSessionValid();
    // state for managing queue of matches and current index
    const { matchesQueue, isLoading: isLoadingMatches } = useGetMatches();
    const { approveMatch, isLoading: isLoadingApprove } = useGetAcceptMatch();
    const { rejectMatch, isLoading: isLoadingReject } = useGetRejectMatch();

    const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

    useEffect(() => {
        isSessionValid();
    }, [isSessionValid]);

    const handleSwipeLeft = () => {
        const matchId = matchesQueue[currentMatchIndex];
        // Reject a user match
        rejectMatch(matchId);
        // Advance to next match
        setCurrentMatchIndex(currentMatchIndex + 1);
    };

    const handleSwipeRight = () => {
        const matchId = matchesQueue[currentMatchIndex];
        // Accept a user match
        approveMatch(matchId);
        // Advance to next match
        setCurrentMatchIndex(currentMatchIndex + 1);
    }

    // Fetch current match from the queue
    const currentMatch = matchesQueue[currentMatchIndex];

    // Check if there are no more matches
    if (isLoadingMatches || isLoadingApprove || isLoadingReject) {
        // Maybe replace this with a cuter loading component
        return <div>Loading... </div>
    }

    if (!currentMatch) {
        return <div>No more matches... For now!</div>
    }

    /**
     * Returns the page where you swipe left and right on various user cards
     * will update matches list and potential matches queue as the user interacts
     */
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box component="section" sx={{ p: 2}}>
                        <UserCard match={currentMatch}/>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleSwipeLeft} color="error" variant="outlined" fullWidth={true} startIcon={<WestIcon />}>
                        Swipe left
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleSwipeRight} color="success" variant="outlined" fullWidth={true} endIcon={<EastIcon />}>
                        Swipe right
                    </Button>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Matching