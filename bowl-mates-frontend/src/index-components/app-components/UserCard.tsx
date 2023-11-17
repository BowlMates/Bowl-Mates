
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

// example user, we would use users from the matches queue to get the data
const user = {
    name: 'Hedy Lamarr',
    pronouns: 'she/her',
    bio: 'I am a baddie you cannot stop me',
    image: 'https://i.imgur.com/yXOvdOSs.jpg',
};

const UserCard = () => {
    // returns a user card containing pic, name, pronouns, and bio
    return (
        <Card>
            <CardMedia
                component="img"
                // height="500"
                image={user.image}
                alt="user photo"
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {user.name}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    {user.pronouns}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.bio}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default UserCard;
