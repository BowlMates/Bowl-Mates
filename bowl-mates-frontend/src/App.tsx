//import React from 'react'
//import logo from './logo.svg'
import './App.css'
import useLocalStorage from "./hooks/useLocalStorage";
import {useEffect, useState} from "react";

function App () {
    const [username, setUsername] = useState("timdillon");
    const [password, setPasswod] = useState("pass");
    const [jwt, setJwt] = useLocalStorage("", "jwt");

    async function TestLogin() {
        useEffect(() => {
            const reqBody = {
                username: username,
                password: password
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
                    // signIn({
                    //     auth: {token: jwt},
                    //     userState: undefined,
                    //     token: token,
                    //     expiresIn: 3600,
                    //     tokenType: "Bearer",
                    //     authState: {username: body.user}
                    // });
                    console.log(headers);
                });
        }, []);
    }

    async function TestUserinfo() {
        useEffect(() => {
            fetch("http://localhost:8080/user/userinfo", {
                headers: {
                    "Authorization": 'Bearer ' + jwt,
                },
                method: "get",
            })
                .then((response) => Promise.all([response.json(), response.headers]))
                .then(([body, headers]) => {
                    console.log(body.email);
                })
        }, [])
    }

    async function TestTest() {
        useEffect(() => {
            fetch("http://localhost:8080/user/test", {
                headers: {
                    "Authorization": 'Bearer ' + jwt,
                    "Content-Type": "application/json",
                },
                method: "get",
            })
                .then((response) => Promise.all([response.ok, response.headers]))
                .then(([ok, headers]) => {
                    console.log(ok);
                })
        }, [])
    }


    // TestLogin().then();
    // TestUserinfo().then();
    console.log(jwt);
    TestTest().then();
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
