import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
    const [jwt, setJwt] = useState('');
    const [testResponse, setTestResponse] = useState('');

    useEffect(() => {
        // Function to log in and obtain JWT
        async function loginAndGetJWT() {
            const loginData = {
                username: 'timdillon',
                password: 'pass',
            };

            try {
                const loginResponse = await fetch('http://localhost:8080/auth/login', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginData),
                });

                if (!loginResponse.ok) {
                    throw new Error('Login failed');
                }

                const { jwt } = await loginResponse.json();

                setJwt(jwt);
                console.log('JWT Token:', jwt);

// Request /user/test with JWT as Bearer token
                const requestHeaders = {
                    'Authorization': `Bearer ${jwt}`,
                };
                const testResponse = await fetch('http://localhost:8080/user/test', {
                    method: 'get',
                    headers: requestHeaders,
                });

                if (!testResponse.ok) {
                    throw new Error('Test request failed');
                }

                const testResult = await testResponse.json();
                setTestResponse(testResult.message); // Assuming "message" is the key in the JSON response
                console.log('Test Response:', testResult.message);


                const adminTestResponse = await fetch('http://localhost:8080/admin/test', {
                    method: 'get',
                    headers: requestHeaders,
                });

                if (!testResponse.ok) {
                    throw new Error('Test request failed');
                }

                const adminTestResult = await adminTestResponse.json();
                setTestResponse(adminTestResult.message); // Assuming "message" is the key in the JSON response
                console.log('Test Response:', adminTestResult.message);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        loginAndGetJWT();
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>Header goes here</header>
            <p>JWT: {jwt}</p>
            <p>Test Response: {testResponse}</p>
        </div>
    );
};

export default App;
