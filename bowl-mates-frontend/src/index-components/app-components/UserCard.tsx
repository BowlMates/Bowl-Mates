import { Card, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import {userProfileDetails} from "../../data-types/userProfile";
import React from "react";

const user = {
    name: "Hedy Lamarr",
    pronouns: "she/her",
    bio: "I am a baddie you cannot stop me",
    image: "https://i.imgur.com/yXOvdOSs.jpg",
};

interface UserCardProps {
    userProfile: userProfileDetails;
}

const UserCard: React.FC<UserCardProps> = ({userProfile}) => {
    return (
        <Card>

            <CardMedia
                component="img"
                height="auto" // Allow the height to adjust automatically based on the content
                width="100%" // Use 100% of the parent container's width
                image={user.image}
                alt="user photo"
            />
            <CardContent>
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
