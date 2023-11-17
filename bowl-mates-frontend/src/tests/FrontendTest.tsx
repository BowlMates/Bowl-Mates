//import './FrontendTest.css';
import { useEffect, useState } from 'react';

const FrontendTest = () => {
    const [jwt, setJwt] = useState('');
    const [accessTestResponse, setAccessTestResponse] = useState('');
    const [restTestResponse, setRestTestResponse] = useState('');
    const [availTestResponse, setAvailTestResponse] = useState('');
    const [availSet, setAvailSet] = useState([{day: 0, time: 0}]);
    const [restSet, setRestSet] = useState();
    const [jwtFound, setJwtFound] = useState('not found');
    const debug : boolean = true;

    useEffect(() => {
        // Function to log in and obtain JWT
        async function loginAndGetJWT() {
            const loginData = {
                username: 'totallynew123',
                password: 'totallynew',
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
                if (jwt !== '') {
                    setJwtFound('found');
                }

            } catch (error) {
                console.error('Error:', error);
            }

        }

        async function accessTests() {
            try {
                // Request /user/test with JWT as Bearer token
                const requestHeaders = {
                    'Authorization': `Bearer ${jwt}`,
                };
                const testResponse = await fetch('http://localhost:8080/user/test', {
                    method: 'get',
                    headers: requestHeaders,
                });

                if (!testResponse.ok) {
                    throw new Error('User access test request failed');
                }

                const testResult = await testResponse.json();
                setAccessTestResponse(testResult.message); // Assuming "message" is the key in the JSON response
                console.log('Test Response:', testResult.message);


                const adminTestResponse = await fetch('http://localhost:8080/admin/test', {
                    method: 'get',
                    headers: requestHeaders,
                });

                if (!testResponse.ok) {
                    throw new Error('Admin access test request failed');
                }

                const adminTestResult = await adminTestResponse.json();
                setAccessTestResponse(adminTestResult.message); // Assuming "message" is the key in the JSON response
                console.log('Test Response:', adminTestResult.message);
            } catch (error) {
                    console.error('Error:', error);
            }
        }

        async function restTests() {
            try {
                // Request /user/test with JWT as Bearer token
                const requestHeaders = {
                    'Authorization': `Bearer ${jwt}`,
                };
                const postResponse1 = await fetch('http://localhost:8080/user/availability/save', {
                    method: 'post',
                    headers: requestHeaders,
                    body: JSON.stringify(availSet),
                });

                if (!postResponse1.ok) {
                    throw new Error('Avails test post request 1 failed');
                }

                const getResponse1 = await fetch('http://localhost:8080/user/availability', {
                    method: 'get',
                    headers: requestHeaders,
                });

                if (!getResponse1.ok) {
                    throw new Error('Avails test get request 1 failed');
                }
                const testAvailSet1 = await getResponse1.json();
                setAccessTestResponse('passed');
                if (availSet !== testAvailSet1) {
                    setAccessTestResponse('failed');
                }
                setAvailSet([{day: 1, time: 1}]);

                const postResponse2 = await fetch('http://localhost:8080/user/availability/save', {
                    method: 'post',
                    headers: requestHeaders,
                    body: JSON.stringify(availSet),
                });

                if (!postResponse2.ok) {
                    throw new Error('Avails test post request 1 failed');
                }

                const getResponse2 = await fetch('http://localhost:8080/user/availability', {
                    method: 'get',
                    headers: requestHeaders,
                });

                if (!getResponse2.ok) {
                    throw new Error('Avails test get request 1 failed');
                }
                const testAvailSet2 = await getResponse2.json();
                setAccessTestResponse('passed');
                if (availSet !== testAvailSet2) {
                    setAccessTestResponse('failed');
                }

            } catch (error) {
                console.error('Error:', error);
            }
        }

        loginAndGetJWT();
        accessTests();
        restTests();
    }, [jwt, availSet]);

    if (!debug) {
        return (<div></div>);
    } else {
        return (
            <div className='App'>
                <header className='App-header'>Frontend Test Fields</header>
                <p>JWT: {jwtFound}</p>
                <p>Access Test Response: {accessTestResponse}</p>
                <p>Avail Test Response: {availTestResponse}</p>
            </div>
        );
    }
};

export default FrontendTest;
