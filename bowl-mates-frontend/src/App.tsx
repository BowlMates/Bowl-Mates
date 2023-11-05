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
    async function testLogin1() {
        const reqBody = {
            username: "GeoffGeoff",
            password: "Geoff"
        };

        fetch("http://localhost:8080/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
            .then((response) => Promise.all([response.json(), response.headers]))
            .then(([body, headers]) => {
                setJwt(headers.get("authorization"))
            });
    }

    testReg().then();
    testLogin1().then();
    // let str = testString().then();
    //testAll().then();
  return (
    <div className='App'>
      <header className='App-header'>
          <div>

          </div>
          Header goes here
      </header>
    </div>
  )
}

async function testString() {
    let str;
    // https://catfact.ninja/fact
    await fetch('http://localhost:8080/test').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        str = data;
    }).catch(error =>
    {
        console.log("error code: " + error.toString());
        str = "bad";
    });
    return str;
}

async function testReg() {
    let req = new XMLHttpRequest();
    req.addEventListener("load", () => {
        console.log(req.responseText);
    });
    req.open('POST', 'http://localhost:8080/testRegister?username=Geoff');
    req.send(JSON.stringify({username: 'Geoff', password: 'Geoff'}));
}

async function testLogin() {
    let req = new XMLHttpRequest();
    req.addEventListener('load', () => {
        console.log(req.responseText);
    });
    req.open('POST', 'http://localhost:8080/customlogin?username=GeoffGeoff&password=Geoff');
    req.send(JSON.stringify({username: 'Geoff', password: 'Geoff'}));
}

async function testAll() {
    let str;
    await fetch('http://localhost:8080/all').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        str = data;
    }).catch(error => {
        console.log("error code: " + error.toString());
        str = "bad";
    });
    return str;
}

export default App
