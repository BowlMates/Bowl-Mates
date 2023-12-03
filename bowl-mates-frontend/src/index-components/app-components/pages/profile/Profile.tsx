import { Grid, Button, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserCard from '../../UserCard';
import useSaveProfile from '../../../../hooks/useSaveProfile';
import { userProfileDetails } from '../../../../data-types/userProfile';
import { useGetProfile } from '../../../../hooks/useGetProfile';
import DetailsForm from "./profile-components/DetailsForm";
import useSaveImageRef from "../../../../hooks/useSaveImageRef";
import {useGetImageRef} from "../../../../hooks/useGetImageRef";
import {useGetImage} from "../../../../hooks/useGetImage";

const Profile = () => {
    const { userProfile, getProfile } = useGetProfile();
    const { userImageRef, getImageRef } = useGetImageRef();
    const { image, getImage } = useGetImage(userImageRef);

    const { saveProfileDetails } = useSaveProfile();
    const { saveImage } = useSaveImageRef();

    const handleProfileSave = async (userProfileDetails: userProfileDetails) => {
        let result = await saveProfileDetails(userProfileDetails).then((res) => {return res});
        if(result.success){
            getProfile();
        }
    }

    const handlePictureUpload = async (image: File | null) => {
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
        getImageRef();
    }, []);

    // Fetch user image on component mount
    useEffect( () => {
        getImage();
    }, [userImageRef]);



    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={5} md={4}>
                <UserCard userProfile={userProfile} userImage={image} />
            </Grid>
            <DetailsForm userDetails={userProfile} handleProfileSave={handleProfileSave} handlePictureUpload={handlePictureUpload} />
        </Grid>
    );
};

export default Profile;
