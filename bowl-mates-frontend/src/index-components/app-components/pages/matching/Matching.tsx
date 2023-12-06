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
import useMatchProfile from "../../../../hooks/useMatchProfile";
import Loading from "../../Loading";
import {useGetImage} from "../../../../hooks/useGetImage";
import Typography from "@mui/material/Typography";
import useRunMatchingAlgorithm from "../../../../hooks/useRunMatchingAlgorithm";

function Matching () {
    useIsUserSessionValid();
    // state for managing queue of matches and current index
    const { matchesQueue, fetchMatches, isLoading: isLoadingMatches } = useGetMatches();
    const { approveMatch, isLoading: isLoadingApprove } = useGetAcceptMatch();
    const { rejectMatch, isLoading: isLoadingReject } = useGetRejectMatch();
    const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
    const [currentMatch, setCurrentMatch] = useState(-1);
    const {profile, setMatchID} = useMatchProfile();
    const {image, setAddress} = useGetImage(profile.photo);
    const {loadingMatches, runMatchAlgorithm} = useRunMatchingAlgorithm();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setMatchID(currentMatch);
    },[currentMatch]);

    useEffect(()=>{
        console.log("resetting matching queue");
        if (currentMatchIndex >= matchesQueue.length) {
            setCurrentMatch(-1);
        } else {
            setCurrentMatch(matchesQueue[currentMatchIndex]);
        }
    }, [currentMatchIndex, matchesQueue]);

    useEffect(()=>{
        if(matchesQueue.length > 0){
            setCurrentMatchIndex(0);
        }
    }, [matchesQueue]);

    useEffect(()=>{
        setAddress(profile.photo);
    }, [profile]);

    useEffect(()=>{
        fetchMatches();
    }, [loadingMatches]);

    const handleSwipeLeft = () => {
        const matchId = matchesQueue[currentMatchIndex];

        // Reject a user match
        if(!isLoadingReject){
            rejectMatch(matchId).then(()=>{
                // Advance to next match
                setCurrentMatchIndex(currentMatchIndex + 1);
            });
        }
    };

    const handleSwipeRight = () => {
        const matchId = matchesQueue[currentMatchIndex];
        // Accept a user match
        if(!isLoadingApprove) {
            approveMatch(matchId).then(() => {
                // Advance to next match
                setCurrentMatchIndex(currentMatchIndex + 1);
            });
        }
    }

    setTimeout(() => {
        setIsLoading(false);
    }, 4000);


    if (isLoading){
        return (<Loading displayMessage={2}/>);
    }

    /**
     * Returns the page where you swipe left and right on various user cards
     * will update matches list and potential matches queue as the user interacts
     */
    return (
        <Container maxWidth="sm">
            {
                currentMatch === -1 ?
                    <Box display={"flex"} flexDirection={"column"}>
                        <Typography variant={"h1"} sx={{textAlign: "center"}}>
                            You currently have no matches to go through
                        </Typography>
                        <Button sx={{backgroundColor: "green"}} onClick={runMatchAlgorithm}>Click to find matches!</Button>
                        {
                            loadingMatches ? <Typography>Loading</Typography> : <></>
                        }
                    </Box>

                    :
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box component="section" sx={{p: 2}}>
                                <MatchCard match={profile} photo={image}/>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={()=>{handleSwipeLeft()}} color="error" variant="outlined" fullWidth={true}
                                    startIcon={<WestIcon/>}>
                                Reject match
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={()=>{handleSwipeRight()}} color="success" variant="outlined" fullWidth={true}
                                    endIcon={<EastIcon/>}>
                                Approve match
                            </Button>
                        </Grid>
                    </Grid>
            }
        </Container>

    )
}

export default Matching