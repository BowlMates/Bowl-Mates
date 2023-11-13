// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import Button from "@mui/material/Button";
import {useUserLogin} from "../../../../hooks/useUserLogin";
import {useNavigate} from "react-router-dom";

const GreenText = styled(Typography)(({theme}) => ({
    fontStyle: 'italic',
    color: theme.palette.secondary.main,
    fontSize: "10vw"
}));


function Login() {

    const theme = useTheme();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {userLogin} = useUserLogin();
    const navigate = useNavigate();
    return (
        <Box display={"flex"} sx={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <GreenText variant={"h1"}>
                let's
            </GreenText>
            <GreenText variant={"h1"}>
                eat!
            </GreenText>
            <TextField
                sx={{backgroundColor: "white", width: "20vw", marginBottom: "1vh", marginTop: "1vh"}}
                label="Username"
                variant="standard"
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            >{username}</TextField>
            <TextField
                sx={{backgroundColor: "white", width: "20vw", marginBottom: "1vh", marginTop: "2vh"}}
                label="Password"
                variant="standard"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            >{password}</TextField>
            <Button
                sx={{"height": "6vh", width: "20vw", backgroundColor: theme.palette.secondary.main}}
                onClick={async () => {
                    let result: { success: boolean, message: string } = await userLogin(username, password).then((res) => {
                        return res
                    });
                    if (result.success) {
                        console.log(result.message);
                        navigate("/app");
                    } else {
                        console.log(result.message);
                    }
                }}
            >
                Login
            </Button>

        </Box>
    )
}

export default Login