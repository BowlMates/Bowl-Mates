import { Grid} from '@mui/material';
import React, { useEffect } from 'react';
import useSaveProfile from '../../../../hooks/useSaveProfile';
import { userProfileDetails } from '../../../../data-types/userProfile';
import { useGetProfile } from '../../../../hooks/useGetProfile';
import DetailsForm from "./profile-components/DetailsForm";
import useSaveImageRef from "../../../../hooks/useSaveImageRef";
import {useGetImageRef} from "../../../../hooks/useGetImageRef";
import {useGetImage} from "../../../../hooks/useGetImage";
import Loading from '../../Loading';
import UserCard from "./profile-components/UserCard";

const Profile = () => {
    const { userProfile, profileLoading, getProfile } = useGetProfile();
    const { userImageRef, imageRefLoading, getImageRef } = useGetImageRef();
    const { image, imageLoading, setAddress } = useGetImage(userImageRef);

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
            if(result.success){
                console.log("saved picture, fetching reference")
                getImageRef();
            }
        }
    }

    // Fetch profile details on component mount
    useEffect( () => {
        getProfile();
    }, []);

    // Fetch user image on component mount
    useEffect( () => {
        getImageRef();
    }, [userProfile]);

    useEffect(()=>{
        setAddress(userImageRef);
    },[userImageRef]);


    if(profileLoading || imageRefLoading || imageLoading){
        return(
            <Loading displayMessage={1}/>
        )
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={5} md={4}>
                <UserCard userProfile={userProfile} userImage={image} />
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
                <DetailsForm userDetails={userProfile} handleProfileSave={handleProfileSave} handlePictureUpload={handlePictureUpload} />
            </Grid>
        </Grid>
    );

};

export default Profile;
