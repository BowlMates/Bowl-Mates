
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

const UserCard = () => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    Geoff Geoff
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    He/him
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is my bio, please swipe right!
                </Typography>
            </CardContent>

        </Card>
    );
}

export default UserCard;
