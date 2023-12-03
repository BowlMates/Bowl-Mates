import {Button, Grid, TextField, Typography} from "@mui/material";
import {userProfileDetails} from "../../../../../data-types/userProfile";
import UploadImg from "./UploadImg";
import React, {useState} from "react";

interface DetailsFormProps {
    userDetails: userProfileDetails,
    handleProfileSave: (userProfileDetails: userProfileDetails) => void;
}

const DetailsForm: React.FC<DetailsFormProps> = ({userDetails, handleProfileSave}) => {
    const [firstName, setFirstName] = useState(userDetails.firstName);
    const [lastName, setLastName] = useState(userDetails.lastName);
    const [pronouns, setPronouns] = useState(userDetails.pronouns);
    const [bio, setBio] = useState(userDetails.bio);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h3">Give us the details</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                id="filled-basic"
                                label="First name"
                                variant="filled"
                                fullWidth
                                inputProps={{ maxLength: 30 }}
                                value={firstName}
                                onChange={(event) => {
                                    setFirstName(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                id="filled-basic"
                                label="Last name"
                                variant="filled"
                                fullWidth
                                inputProps={{ maxLength: 30 }}
                                value={lastName}
                                onChange={(event) => {
                                    setLastName(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                id="filled-basic"
                                label="Pronouns"
                                variant="filled"
                                fullWidth
                                inputProps={{ maxLength: 30 }}
                                value={pronouns}
                                onChange={(event) => {
                                    setPronouns(event.target.value);
                                }}
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
                        onChange={(event) => {
                            setBio(event.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            let details: userProfileDetails = {
                                firstName: firstName,
                                lastName: lastName,
                                pronouns: pronouns,
                                bio: bio,
                            };

                            handleProfileSave(details);
                        }}
                    >
                        Submit Info
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    Choose an image file for your profile photo:
                    <UploadImg />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained">Submit Photo</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DetailsForm;