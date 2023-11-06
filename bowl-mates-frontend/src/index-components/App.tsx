// React Imports
import * as React from "react";
import {Routes, Route} from "react-router-dom";

// Custom Imports
import Sidebar from "./app-components/Sidebar";
import Header from "./app-components/Header";
import BodyContainer from "./app-components/BodyContainer";
import {useToggle} from "../hooks/useToggle";

// Route Imports
import Landing from "./app-components/pages/landing/Landing";
import Login from "./app-components/pages/login/Login";
import Signup from "./app-components/pages/signup/Signup";
import Home from "./app-components/pages/home/Home";
import FavoriteRestaurants from "./app-components/pages/favorite-restaurants/FavoriteRestaurants";
import Availability from "./app-components/pages/availability/Availability";
import Matching from "./app-components/pages/matching/Matching";
import SuccessfulMatches from "./app-components/pages/successful-matches/SuccessfulMatches";
import FAQ from "./app-components/pages/faq/FAQ";
import Settings from "./app-components/pages/settings/Settings";

// MUI Imports
import Box from "@mui/material/Box";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


function App() {

    const {state : drawerOpen, toggle : toggleDrawerOpen} = useToggle(false);

    // This is where we create the theme passed to the rest of the application pages
    // By encapsulating the application with the ThemeProvider and useTheme hook,
    // we can use this theme throughout the application
    let appTheme = createTheme({
       palette: {
           mode: "light",
           primary: {
               main: "#ffe0fc",
           },
           secondary: {
               main: "#54804D"
           }
       }
    });

    return (
        <>
            <ThemeProvider theme={appTheme}>
                <Box sx={{ display: 'flex', height: "100%", width: "100%" }}>
                    <CssBaseline/>
                    <Header drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
                    <Sidebar drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
                    <BodyContainer>
                        <Routes>
                            {/* This route exists for testing until security is updated*/}
                            <Route path={"/"} element={<Landing />}/>
                            {/* This route exists for testing until security is updated*/}
                            <Route path={"/login"} element={<Login />}/>
                            {/* This route exists for testing until security is updated*/}
                            <Route path={"/sign-up"} element={<Signup />}/>
                            <Route path={"/user-home"} element={<Home />}/>
                            <Route path={"/favorite-restaurants"} element={<FavoriteRestaurants />}/>
                            <Route path={"/availability"} element={<Availability />}/>
                            <Route path={"/matching"} element={<Matching />}/>
                            <Route path={"/successful-matches"} element={<SuccessfulMatches />}/>
                            <Route path={"/settings"} element={<Settings />}/>
                            <Route path={"/faq"} element={<FAQ />}/>
                        </Routes>
                    </BodyContainer>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default App
