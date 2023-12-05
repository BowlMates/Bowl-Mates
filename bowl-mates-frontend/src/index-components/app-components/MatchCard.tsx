import React, {useEffect} from 'react';
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useGetImageRef} from "../../hooks/useGetImageRef";
import {useGetImage} from "../../hooks/useGetImage";
import {matchProfileDetails} from "../../data-types/userProfile";

interface UserCardProps {
    match: matchProfileDetails;
}


const MatchCard: React.FC<UserCardProps> = ({match}) => {

    const { userImageRef, imageRefLoading, getImageRef } = useGetImageRef();
    const { image: refImage, setAddress } = useGetImage(userImageRef);

    // Fetch user image on component mount
    useEffect( () => {
        setAddress(userImageRef);
    }, [userImageRef]);

    const defaultMatch = {
        firstName: 'Adam',
        lastName: "Fuegman",
        pronouns: 'adam/adam',
        bio: 'A reoccurring character',
        //image: 'https://i.ibb.co/TmJw9kS/IMG-3336.jpg'
    }
    const { firstName, lastName, pronouns, bio} = match || defaultMatch;

    return (
        <Card>
            <CardMedia
                component="img"
                image={refImage}
                alt="user photo"
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {firstName + lastName}
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
