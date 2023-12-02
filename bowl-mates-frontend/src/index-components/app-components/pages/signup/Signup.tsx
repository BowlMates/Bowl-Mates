import React, { useState } from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useUserSignup from "../../../../hooks/useUserSignup";
import {redirect, useNavigate} from "react-router-dom";

const Rectangle = styled(Box)({
    width: '120%',
    height: '100px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
});

interface StateFields {
    firstName: [string, React.Dispatch<React.SetStateAction<string>>],
    lastName: [string, React.Dispatch<React.SetStateAction<string>>],
    username: [string, React.Dispatch<React.SetStateAction<string>>];
    email: [string, React.Dispatch<React.SetStateAction<string>>];
    password: [string, React.Dispatch<React.SetStateAction<string>>];
    confirmPassword: [string, React.Dispatch<React.SetStateAction<string>>];
}

function Signup() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [usernameValid, setUsernameValid] = useState(true);

    const stateFields: StateFields = {
        firstName: [firstName, setFirstName],
        lastName: [lastName, setLastName],
        username: [username, setUsername],
        email: [email, setEmail],
        password: [password, setPassword],
        confirmPassword: [confirmPassword, setConfirmPassword],
    };

    const { userSignup } = useUserSignup();
    const navigate = useNavigate();

    const handleInputChange = (e: any, setter: any) => {
        const value = e.target.value;
        setter(value);
    };

    const handleInputFocus = (e: any, setter: any, placeholder: any) => {
        if (e.target.value === placeholder) {
            setter('');
        }
    };

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setIsValidEmail(isValid);

        let passwordsMatch: boolean;
        passwordsMatch = password === confirmPassword;
        setIsPasswordMatch(passwordsMatch);

        let validUsername: boolean;
        validUsername = username !== '';
        setUsernameValid(validUsername);

        // Perform signup if all validations pass
        if (isValidEmail && isPasswordMatch && usernameValid) {
            userSignup(firstName, lastName, username, email, password );
            navigate("/login");
        }
    };

    return (
        <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" height="75vh">
            <Typography
                variant="h1"
                style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '20vw',
                    paddingTop: '10vh',
                }}
                align="left"
                color="000000"
            >
                sign <br />
                up
            </Typography>

            <Box display="flex" flexDirection="column" alignItems="center" marginLeft="50px" marginTop="175px">
                {Object.entries(stateFields).map(([field, [value, setter]]) => (
                    <Rectangle bgcolor="#FDF5F5" key={field}>
                        <input
                            type={field === "password" || field === "confirmPassword" ? "password" : "text"}
                            value={value}
                            onChange={(e) => {
                                handleInputChange(e, setter);
                            }}
                            onFocus={(e) => handleInputFocus(e, setter, field)}
                            placeholder={field}
                            style={{
                                width: '100%',
                                border: 'none',
                                outline: 'none',
                                fontSize: '40px',
                                fontFamily: 'Inter, sans-serif',
                                textAlign: 'center',
                                backgroundColor: '#FDF5F5',
                                color: '#54804D',
                                borderColor: (field === "email" && !isValidEmail) || (field === "confirmPassword" && !isPasswordMatch) ? 'red' : 'initial',
                            }}
                        />
                    </Rectangle>
                ))}

                {!usernameValid && <p style={{ color: 'red', marginTop: '10px' }}>Please enter a valid username.</p>}
                {!isValidEmail && <p style={{ color: 'red', marginTop: '10px' }}>Please enter a valid email address.</p>}
                {!isPasswordMatch && <p style={{ color: 'red', marginTop: '10px' }}>Passwords do not match.</p>}

                <Rectangle bgcolor="#54804D" onClick={handleSubmit}>
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

export default Signup;
