import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { userProfileDetails } from "../../../../../data-types/userProfile";
import UploadImg from "./UploadImg";

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
        <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h4" gutterBottom>
                Personal Details
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Choose a profile photo:</Typography>
                    <UploadImg handlePictureUpload={handlePictureUpload} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DetailsForm;
