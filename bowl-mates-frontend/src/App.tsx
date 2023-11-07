//import React from 'react'
//import logo from './logo.svg'
import './App.css'
import useLocalStorage from "./hooks/useLocalStorage";
import {useEffect, useState} from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPasswod] = useState("");
    const [token, setToken] = useState("");
    const signIn = useSignIn();
    //const [jwt, setJwt] = useLocalStorage("", "jwt");

    async function TestLogin() {
        useEffect(() => {
            const reqBody = {
                username: "GeoffGeoff",
                password: "Geoff"
            };
            fetch("http://localhost:8080/auth/login", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "post",
                body: JSON.stringify(reqBody),
            })
                .then((response) => Promise.all([response.json(), response.headers]))
                .then(([body, headers]) => {
                    let jwt: string = body.jwt;
                    signIn({
                        auth: {token: jwt},
                        userState: undefined,
                        token: token,
                        expiresIn: 3600,
                        tokenType: "Bearer",
                        authState: {username: body.user}
                    });
                    console.log(headers);
                });
        }, [])
    }

    async function TestAll() {
        useEffect(() => {

            fetch("http://localhost:8080/user/test", {
                method: "get",
            })
                .then((response) => Promise.all([response.json(), response.headers]))
                .then(([body, headers]) => {
                    console.log(body);
                })
        },[])

    }

    TestLogin().then();
    TestAll().then();
  return (
    <div className='App'>
      <header className='App-header'>
          Header goes here
      </header>
        <p>
            {username}
            {password}
        </p>
    </div>
  )
}

export default App
