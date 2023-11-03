//import React from 'react'
//import logo from './logo.svg'
import './App.css'
import SignIn from "./SignIn";

function App () {
  //return SignIn;
    // fetch('https://catfact.ninja/fact').then(response => {
    //     return response.json();
    // }).then(data => {
    //     console.log(data);
    //     str = data;
    // }).catch(error =>
    // {
    //     str = "bad";
    // });
    let str = getString().then().toString();
  return (
    <div className='App'>
      <header className='App-header'>
        {/*<img src={logo} className='App-logo' alt='logo' />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className='App-link'*/}
        {/*  href='https://reactjs.org'*/}
        {/*  target='_blank'*/}
        {/*  rel='noopener noreferrer'*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
          {str}
          "Header goes here"
      </header>
    </div>
  )
}

async function getString() {
    let str;
    await fetch('http://localhost:8080/test').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        str = data;
    }).catch(error =>
    {
        str = "bad";
    });
    return str;
  // try {
  //     let response : any = await fetch("https://catfact.ninja/fact").then((res)=>{
  //         if (!response.ok) {
  //             alert("Uh oh! Status is: " + response.status);
  //             return "";
  //         }
  //         return response.json;
  //     }).then((text)=>{
  //         return text;
  //     });
  // } catch (e) {
  //     alert("There was an error contacting the server.");
  //     console.log(e);
  // }
}

export default App
