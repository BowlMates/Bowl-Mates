import React, {useEffect, useState} from "react";

// MUI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

//Custom Imports
import MatchCard from "../../MatchCard";
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import useGetMatches from "../../../../hooks/useGetMatches";
import useGetAcceptMatch from "../../../../hooks/useGetAcceptMatch";
import useGetRejectMatch from "../../../../hooks/useGetRejectMatch";
import useMathProfile from "../../../../hooks/useMatchProfile";
import Loading from "../../Loading";

function Matching () {
    const isSessionValid = useIsUserSessionValid();
    // state for managing queue of matches and current index
    const { matchesQueue, isLoading: isLoadingMatches } = useGetMatches();
    const { approveMatch, isLoading: isLoadingApprove } = useGetAcceptMatch();
    const { rejectMatch, isLoading: isLoadingReject } = useGetRejectMatch();
    const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
    const [currentMatch, setCurrentMatch] = useState(-1);
    const {profile, setMatchID} = useMathProfile();

    useEffect(()=>{
        // CHECKS IF SESSION IS CURRENTLY VALID BEFORE DRAWING COMPONENT
        isSessionValid();
    }, [isSessionValid]);

    useEffect(()=>{
        setMatchID(currentMatch);
    },[currentMatch]);

    useEffect(()=>{
        if(matchesQueue.length !== 0) {
            setCurrentMatch(matchesQueue[currentMatchIndex]);
        }
    }, [matchesQueue])

    useEffect(()=>{

    }, [matchesQueue])

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
    //

    // Check if there are no more matches
    // if (isLoadingMatches || isLoadingApprove || isLoadingReject) {
    //     // Maybe replace this with a cuter loading component
    //     return <div>Loading... </div>
    // }
    //
    // if (!currentMatch) {
    //     return <div>No more matches... For now!</div>
    // }

    /**
     * Returns the page where you swipe left and right on various user cards
     * will update matches list and potential matches queue as the user interacts
     */
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box component="section" sx={{ p: 2}}>
                        <MatchCard match={profile}/>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleSwipeLeft} color="error" variant="outlined" fullWidth={true} startIcon={<WestIcon />}>
                        Reject match
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleSwipeRight} color="success" variant="outlined" fullWidth={true} endIcon={<EastIcon />}>
                        Approve match
                    </Button>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Matching