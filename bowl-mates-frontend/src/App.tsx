//import React from 'react'
//import logo from './logo.svg'
import './App.css'
import SignIn from "./SignIn";

function App () {
    let str = getString().then();
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

async function getString() {
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

export default App
