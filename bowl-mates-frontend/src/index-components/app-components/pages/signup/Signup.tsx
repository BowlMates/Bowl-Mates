// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useRef, useState} from "react";

//Pre-Styling
//----------------------------------------------------------------------------
// You can pre-style components using the styled method/function
// Place the component type you want styled as an argument (in this case - Box)
// and then style the inside as if it were in-line styling or styling in a css
// file

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

async function sendDataToApi (email: string, password: string, confirmPassword: string) {
    try {
        const response = await fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                confirmPassword
            })
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('API Response:', responseData);
        } else {
            console.error('Error occurred while sending data to API');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

function Signup() {

    //Notes about some MUI component types you will probably use the most
    //----------------------------------------------------------------------------
    //Note: Box is a better div (pls don't use divs)
    //Note: Typography is a better version of html text tags (h1, p, etc...).
    //      you can set the type of typography using variant={"h1"} within the tag
    //Note: There is usually an MUI replacement for everything so try to stick with
    //      this family of components since they will be most cohesive together
    //      while also allowing us to change theming easier and possibly implement
    //      dark theme functionality

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    // Retrieves input values from email, pw, confirm pw
    // fix the null issue later
    function handleSubmission() {
        // @ts-ignore
        const email = emailRef.current.textContent;
        // @ts-ignore
        const password = passwordRef.current.textContent;
        // @ts-ignore
        const confirmPassword = confirmPasswordRef.current.textContent;

        // Perform input validation logic here

        sendDataToApi(email, password, confirmPassword)

    }
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

                {/*// ref={emailRef}*/}
                {/*// contentEditable="true"*/}
                {/*// suppressContentEditableWarning={true}*/}

                <Rectangle
                    bgcolor="#FDF5F5">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={(e) => e.target.value === 'e-mail' && setEmail('')}
                        placeholder="e-mail"
                        style= {{
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
                        style= {{
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
                        type="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onFocus={(e) => e.target.value === 'confirmPassword' && setConfirmPassword('')}
                        placeholder="confirm password"
                        style= {{
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
                        style = {{
                            fontSize:'40px',
                            fontFamily: 'Inter, sans-serif',
                            color:'#FDF5F5'
                        }}
                        >
                            submit
                    </Typography>
                </Rectangle>
            </Box>
        </Box>

    )
}

export default Signup