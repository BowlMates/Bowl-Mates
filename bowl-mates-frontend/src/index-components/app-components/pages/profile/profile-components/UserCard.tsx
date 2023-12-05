import { Card, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import logo from "../../../../../images/BOWLMATES LOGO V2.png";
import React from "react";
import {userProfileDetails} from "../../../../../data-types/userProfile";


const defaultImage = logo;

interface UserCardProps {
    userProfile: userProfileDetails;
    userImage: string;
}

const UserCard: React.FC<UserCardProps> = ({userProfile, userImage}) => {
    return (
        <Card
            sx={{
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '90%', // Set a fixed height for the Card
                border: '1px solid black',
                borderRadius: 4,
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
        }}>
            <CardMedia
                component="img"
                height="70%" // Set a fixed height for the image
                width="100%"
                image={userImage === '' ? defaultImage : userImage}
                alt="user photo"
            />
            <CardContent
                sx={{
                    marginTop: 'auto', // Push the content to the bottom
                }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    {userProfile.firstName + ' ' + userProfile.lastName}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    {userProfile.pronouns}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {userProfile.bio}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;