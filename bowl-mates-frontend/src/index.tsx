// React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Custom Imports
import './index.css'

import App from './index-components/App'



// React Auth Kit imports
import {AuthProvider, RequireAuth} from "react-auth-kit";
import Landing from "./index-components/app-components/pages/landing/Landing";
import Login from "./index-components/app-components/pages/login/Login";
import Signup from "./index-components/app-components/pages/signup/Signup";
import {createTheme, ThemeProvider} from "@mui/material/styles";

// This is where we create the theme passed to the rest of the application pages
// By encapsulating the application with the ThemeProvider and useTheme hook,
// we can use this theme throughout the application

let appTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffd9df",
        },
        secondary: {
            main: "#54804D"
        }
    },

});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>

      <AuthProvider authType = {'cookie'}
                    authName={'_auth'}
                    cookieDomain={window.location.hostname}
                    cookieSecure={window.location.protocol === "https:"}>
          <BrowserRouter>
              <ThemeProvider theme={appTheme}>
                  <Routes>
                      <Route path={"/"} element={<Landing />}/>
                      <Route path={"/login"} element={<Login />}/>
                      <Route path={"/sign-up"} element={<Signup />}/>
                      {/* Protected Routes that the user should not be able to access unless logged in */}
                      <Route path={"/app/*"} element={
                          <RequireAuth loginPath={"/"}>
                              <App />
                          </RequireAuth>
                      }/>
                      {/* Protected Routes that the user should not be able to access unless logged in */}
                  </Routes>
              </ThemeProvider>
          </BrowserRouter>
      </AuthProvider>
  </React.StrictMode>
)
