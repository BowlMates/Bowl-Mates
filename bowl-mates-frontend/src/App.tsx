//import React from 'react'
//import logo from './logo.svg'
import './App.css'
import SignIn from "./SignIn";

function App () {
    let reg = testReg().then();
    let log = testLogin().then();
    let str = testString().then();
    let cookie = "";
    // let all = testAll().then();
  return (
    <div className='App'>
      <header className='App-header'>
          {str.toString()}
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
    req.send();
}

async function testLogin() {
    let req = new XMLHttpRequest();
    req.addEventListener('load', () => {
        console.log(req.responseText);
    });
    req.open('POST', 'http://localhost:8080/login');
    req.send(JSON.stringify({username: 'GeoffGeoff', password: 'pass'}))
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
