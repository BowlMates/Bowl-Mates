import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { userProfileDetails } from "../../../../../data-types/userProfile";
import UploadImg from "./UploadImg";
import Box from "@mui/material/Box";

interface DetailsFormProps {
    userDetails: userProfileDetails;
    handleProfileSave: (userProfileDetails: userProfileDetails) => void;
    handlePictureUpload: (image: File | null) => void;
}

const DetailsForm: React.FC<DetailsFormProps> = ({userDetails, handleProfileSave, handlePictureUpload,}) => {
    const [firstName, setFirstName] = useState(userDetails.firstName || "");
    const [lastName, setLastName] = useState(userDetails.lastName || "");
    const [pronouns, setPronouns] = useState(userDetails.pronouns || "");
    const [bio, setBio] = useState(userDetails.bio || "");

    return (

        <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="h4">
                Personal Details
            </Typography>
            <Box display={"flex"}>
            <Grid spacing={2}>
                <Box paddingTop={"10px"}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="filled-basic"
                                label="First Name"
                                variant="filled"
                                fullWidth
                                inputProps={{ maxLength: 30 }}
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="filled-basic"
                                label="Last Name"
                                variant="filled"
                                fullWidth
                                inputProps={{ maxLength: 30 }}
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="filled-basic"
                                label="Pronouns"
                                variant="filled"
                                fullWidth
                                inputProps={{ maxLength: 30 }}
                                value={pronouns}
                                onChange={(event) => setPronouns(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Grid item xs={12} paddingTop={"20px"} paddingBottom={"20px"}>
                    <TextField
                        id="filled-multiline-static"
                        label="Bio"
                        multiline
                        rows={4}
                        variant="filled"
                        fullWidth
                        inputProps={{ maxLength: 300 }}
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                    />
                </Grid>
                <Button
                    variant="contained"
                    onClick={() => {
                        let details: userProfileDetails = {
                            firstName,
                            lastName,
                            pronouns,
                            bio,
                        };

                        handleProfileSave(details);
                    }}
                >
                    Save Details
                </Button>
            </Grid>
                <Box paddingTop={"1vh"}>
                    <UploadImg handlePictureUpload={handlePictureUpload} />
                </Box>
            </Box>
        </Box>

    );
};

export default DetailsForm;
