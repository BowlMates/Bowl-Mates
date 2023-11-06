//import React from 'react'
//import logo from './logo.svg'
import './App.css'
import useLocalStorage from "./hooks/useLocalStorage";
import SignIn from "./SignIn";
import {useState} from "react";

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPasswod] = useState("");
    const [jwt, setJwt] = useLocalStorage("", "jwt");

    async function testReg() {
        const reqBody = {
            name: "Geoff",
            username: "GeoffGeoff",
            password: "Geoff",
            email: "Geoff@mail.com"
        };
        fetch("http://localhost:8080/auth/register", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
            .then((response) => Promise.all([response.json(), response.headers]))
            .then(([body, headers]) => {
                setUsername(body.get("username"));
                setPasswod(body.get("password"))
            });
    }

    async function testLogin() {
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
                setJwt(body.jwt);
                console.log(jwt);
            });
    }

    async function testAll() {
        const reqBody = {
            username: "GeoffGeoff",
            token: jwt
        };

        fetch("http://localhost:8080/user/all", {
            headers: {
                "Content-Type": "applicantion/json",
                "Authorization": jwt,
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
            .then((response) => Promise.all([response.json(), response.headers]))
            .then(([body, headers]) => {
                console.log(body.email);
            })
    }

    //testReg().then();
    testLogin().then();
    testAll().then();
  return (
    <div className='App'>
      <header className='App-header'>
          Header goes here
      </header>
        <p>
            {username}
            {password}
            {jwt}
        </p>
    </div>
  )
}

export default App
