import React, {useEffect} from 'react';
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useGetImageRef} from "../../hooks/useGetImageRef";
import {useGetImage} from "../../hooks/useGetImage";
import {matchProfileDetails} from "../../data-types/userProfile";

interface UserCardProps {
    match: matchProfileDetails;
    photo: string
}


const MatchCard: React.FC<UserCardProps> = ({match, photo}) => {

    const defaultMatch = {
        firstName: 'Adam',
        lastName: "Fuegman",
        pronouns: 'adam/adam',
        bio: 'A reoccurring character',
        image: 'https://i.ibb.co/TmJw9kS/IMG-3336.jpg'
    }
    const { firstName, lastName, pronouns, bio} = match || defaultMatch;

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
                image={photo}
                alt="user photo"
            />
            <CardContent
                sx={{
                    marginTop: 'auto', // Push the content to the bottom
                }}
            >
                <Typography gutterBottom variant="h5" component="div">
                    {firstName + ' ' + lastName}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    {pronouns}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {bio}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MatchCard;
