import { Grid, Button, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserCard from '../../UserCard';
import useSaveProfile from '../../../../hooks/useSaveProfile';
import { userProfileDetails } from '../../../../data-types/userProfile';
import { useGetProfile } from '../../../../hooks/useGetProfile';
import DetailsForm from "./profile-components/DetailsForm";

const Profile = () => {
    const { userProfile, getProfile } = useGetProfile();
    const { saveProfileDetails } = useSaveProfile();
    const [ profilePicture, setProfilePicture] = useState<string>('')

    const handleProfileSave = async (userProfileDetails: userProfileDetails) => {
        let result = await saveProfileDetails(userProfileDetails).then((res) => {return res});
        if(result.success){
            getProfile();
        }
    }

    const handlePictureUpload = (file: string) => {
        setProfilePicture(file);
    }

    // Fetch profile details on component mount
    useEffect( () => {
        getProfile();
    }, []);

    console.log(userProfile);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={5} md={4}>
                <UserCard userProfile={userProfile} userImage={profilePicture} />
            </Grid>
            <DetailsForm userDetails={userProfile} handleProfileSave={handleProfileSave} handlePictureUpload={handlePictureUpload} />
        </Grid>
    );
};

export default Profile;
