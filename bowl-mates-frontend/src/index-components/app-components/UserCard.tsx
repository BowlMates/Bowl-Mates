import React from 'react';
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

// Definition of type for match prop
type MatchType = {
    name: string;
    pronouns: string;
    bio: string;
    image: string;
};

interface UserCardProps {
    match: MatchType;
}


const UserCard: React.FC<UserCardProps> = ({match}) => {
    const { name, pronouns, bio, image } = match;

    // returns a user card containing pic, name, pronouns, and bio from their unique user number
    return (
        <Card>
            <CardMedia
                component="img"
                image={image}
                alt="user photo"
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {name}
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
}

export default UserCard;
