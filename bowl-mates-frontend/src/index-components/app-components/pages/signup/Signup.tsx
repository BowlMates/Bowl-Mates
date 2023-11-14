// MUI Imports
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from "react";

const Rectangle = styled(Box)({
    width: '120%',
    height: '100px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    cursor: 'pointer'
});

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (

        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            height="75vh"
        >

            {/*SIGNUP TEXT*/}
            <Typography variant={"h1"}
                        style={
                            {
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 300,
                                fontSize: '20vw',
                                //lineHeight: '1.2px'
                                paddingTop: '10vh'
                            }
                        }
                        align="left"
                        color="000000"
            >
                sign <br/>
                up
            </Typography>

            {/*RECTANGLES*/}
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginLeft="50px"
                marginTop="175px"
            >

                <Rectangle
                    bgcolor="#FDF5F5">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={(e) => e.target.value === 'e-mail' && setEmail('')}
                        placeholder="e-mail"
                        style={{
                            width: '100%',
                            border: 'none',
                            outline: 'none',
                            fontSize: '40px',
                            fontFamily: 'Inter, sans-serif',
                            textAlign: 'center',
                            backgroundColor: '#FDF5F5',
                            color: '#54804D'
                        }}
                    />
                </Rectangle>
                <Rectangle
                    bgcolor="#FDF5F5">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={(e) => e.target.value === 'password' && setPassword('')}
                        placeholder="password"
                        style={{
                            width: '100%',
                            border: 'none',
                            outline: 'none',
                            fontSize: '40px',
                            fontFamily: 'Inter, sans-serif',
                            textAlign: 'center',
                            backgroundColor: '#FDF5F5',
                            color: '#54804D'
                        }}
                    />
                </Rectangle>
                <Rectangle
                    bgcolor="#FDF5F5">
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onFocus={(e) => e.target.value === 'confirmPassword' && setConfirmPassword('')}
                        placeholder="confirm password"
                        style={{
                            width: '100%',
                            border: 'none',
                            outline: 'none',
                            fontSize: '40px',
                            fontFamily: 'Inter, sans-serif',
                            textAlign: 'center',
                            backgroundColor: '#FDF5F5',
                            color: '#54804D'
                        }}
                    />

                </Rectangle>
                <Rectangle bgcolor="#54804D">
                    <Typography
                        variant="body1"
                        style={{
                            fontSize: '40px',
                            fontFamily: 'Inter, sans-serif',
                            color: '#FDF5F5'
                        }}
                    >
                        submit
                    </Typography>
                </Rectangle>
            </Box>
        </Box>
    );
}

export default Signup