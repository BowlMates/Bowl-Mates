import { Grid, Button, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserCard from '../../UserCard';
import useSaveProfile from '../../../../hooks/useSaveProfile';
import { userProfileDetails } from '../../../../data-types/userProfile';
import { useGetProfile } from '../../../../hooks/useGetProfile';
import DetailsForm from "./profile-components/DetailsForm";
import useSaveImage from "../../../../hooks/useSaveImage";
import {useGetImage} from "../../../../hooks/useGetImage";

const Profile = () => {
    const { userProfile, getProfile } = useGetProfile();
    const { userImage, getImage } = useGetImage();

    const { saveProfileDetails } = useSaveProfile();
    const { saveImage } = useSaveImage();

    const handleProfileSave = async (userProfileDetails: userProfileDetails) => {
        let result = await saveProfileDetails(userProfileDetails).then((res) => {return res});
        if(result.success){
            getProfile();
        }
    }

    // Broke:
    // const handlePictureUpload = (file: string) => {
    //     setProfilePicture(file);
    // }

    // Woke:
    const handlePictureUpload = async (image: File | null) => {
        console.log("here")
        console.log(image)
        if(image !== null){
            let result = await saveImage(image).then((res) => {return res});
        }
    }

    // Fetch profile details on component mount
    useEffect( () => {
        getProfile();
    }, []);

    // Fetch user image on component mount
    useEffect( () => {
        getImage();
    }, []);

    //console.log(userProfile);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={5} md={4}>
                <UserCard userProfile={userProfile} userImage={userImage} />
            </Grid>
            <DetailsForm userDetails={userProfile} handleProfileSave={handleProfileSave} handlePictureUpload={handlePictureUpload} />
        </Grid>
    );
};

export default Profile;
