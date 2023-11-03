//import React from 'react'
//import logo from './logo.svg'
import './App.css'
import SignIn from "./SignIn";

function App () {
  //return SignIn;
    let str = () => getString();
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
      </header>
    </div>
  )
}

async function getString() {
  try {
      let response : any = await fetch("localhost:8080/all").then((res)=>{
          if (!response.ok) {
              alert("Uh oh! Status is: " + response.status);
              return "";
          }
          return response.json;
      }).then((text)=>{
          return text;
      });
  } catch (e) {
      alert("There was an error contacting the server.");
      console.log(e);
  }
}

export default App
