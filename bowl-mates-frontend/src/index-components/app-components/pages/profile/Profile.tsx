// MUI Imports
//import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import React, {useEffect, useState} from "react";
import UploadImg from "./profile-components/UploadImg";
import UserCard from "../../UserCard";
import useSaveProfile from "../../../../hooks/useSaveProfile";
import {userProfileDetails} from "../../../../data-types/userProfile";
import {useGetProfile} from "../../../../hooks/useGetProfile";


//this is just a placeholder, this will hold user data fetched from the server
const user = {
    name: 'Hedy Lamarr',
    pronouns: 'she/her',
    bio: 'I am a baddie you cannot stop me',
    image: 'https://i.imgur.com/yXOvdOSs.jpg',
};



function Profile () {

    const [firstName, setFirstName] = useState("First Name");
    const [lastName, setLastName] = useState("Last Name")
    const [pronouns, setPronouns] = useState("Pronouns");
    const [bio, setBio] = useState("Bio");

    const {userProfile, getProfile} = useGetProfile();
    const {saveProfileDetails} = useSaveProfile();

    // Fetch profile details on component mount
    useEffect(()=>{
        getProfile();
    },[]);

    console.log(userProfile);



    // need to add photo upload functionality
    return (
        /**
         * Container maxWidth="sm"
         *
         * A page with two halves, the left side displays the user's own user card and the right side has
         * text fields with default or exiting user info where you can edit your info and change the profile picture
         */
        <Grid container spacing={3}>
            <Grid item xs={5}>
                <UserCard />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h1">give us the details</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    id="filled-basic"
                                    label="first name"
                                    variant="filled"
                                    fullWidth={true}
                                    inputProps={{ maxLength: 30 }}
                                    value={firstName}
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="filled-basic"
                                    label="last name"
                                    variant="filled"
                                    fullWidth={true}
                                    inputProps={{ maxLength: 30 }}
                                    value={lastName}
                                    onChange={(event) => {
                                        setLastName(event.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="filled-basic"
                                    label="pronouns"
                                    variant="filled"
                                    fullWidth={true}
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
                            label="bio"
                            multiline
                            rows={4}
                            variant="filled"
                            fullWidth={true}
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
                                    bio: bio
                                }

                                saveProfileDetails(details);
                        }}>
                            submit info</Button>
                    </Grid>
                    <Grid item xs={6}>
                        Choose an image file for your profile photo:
                        <UploadImg />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">submit photo</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Profile