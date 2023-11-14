// React Imports
import * as React from "react";
import {Routes, Route} from "react-router-dom";

// Custom Imports
import Sidebar from "./app-components/Sidebar";
import Header from "./app-components/Header";
import BodyContainer from "./app-components/BodyContainer";
import {useToggle} from "../hooks/useToggle";

//Google API imports
import {LoadScript} from "@react-google-maps/api";

// Route Imports
import Home from "./app-components/pages/home/Home";
import FavoriteRestaurants from "./app-components/pages/favorite-restaurants/FavoriteRestaurants";
import Availability from "./app-components/pages/availability/Availability";
import Matching from "./app-components/pages/matching/Matching";
import SuccessfulMatches from "./app-components/pages/successful-matches/SuccessfulMatches";
import FAQ from "./app-components/pages/faq/FAQ";
import Settings from "./app-components/pages/settings/Settings";

// MUI Imports
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FindRestaurants from "./app-components/pages/find-restaurants/FindRestaurants";
import useUserLocation from "../hooks/useUserLocation";

// Constant for UW location data in case useUserLocation fails to retrieve user location data
const uwCoords = {
    lat: 47.6550,
    lng: -122.3080,
};

function App() {
    const {state : drawerOpen, toggle : toggleDrawerOpen} = useToggle(false);
    const theme = useTheme();

    // This logic is here because the user location data needs to be collected before use navigates to restaurants finder
    // Call the useUserLocation hook to get user location data if possible
    const locationResult = useUserLocation()
    let userLocation: { lat: number, lng: number }

    //If the locationResult returned is null, set userLocation to UW default - if not set it to the returned coords
    if(locationResult.location == null){
        userLocation = uwCoords;
    }
    else{
        userLocation = {
            lat: locationResult.location.latitude,
            lng: locationResult.location.longitude
        }
    }

    return (
        <>
            <Box sx={{ display: 'flex', height: "100%", width: "100%"}}>
                <CssBaseline/>
                <Header drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
                <Sidebar drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
                <Box sx={{
                    display: 'flex',
                    flexDirection : "column",
                    flexGrow : 1,
                    overflow : "auto",
                    backgroundColor : theme.palette.primary.main
                }}>
                    <Box sx={{width : "100%", height : "64px"}}/>
                    <BodyContainer className={"BodyContainer"}>
                        {/* Domain Restricted Routing set in the on Google's API website */}
                        <LoadScript googleMapsApiKey="AIzaSyDXlQY2uFzDvS7HRowdgflkRqWtmKqYaGw"/>
                        <Routes>
                            <Route path={"/"} element={<Home />}/>
                            <Route path={"/favorite-restaurants"} element={<FavoriteRestaurants />}/>
                            <Route path={"/find-restaurants"} element={<FindRestaurants   lat={userLocation.lat} lng={userLocation.lng}/>}/>
                            <Route path={"/availability"} element={<Availability />}/>
                            <Route path={"/matching"} element={<Matching />}/>
                            <Route path={"/successful-matches"} element={<SuccessfulMatches />}/>
                            <Route path={"/settings"} element={<Settings />}/>
                            <Route path={"/faq"} element={<FAQ />}/>
                        </Routes>
                    </BodyContainer>
                </Box>
            </Box>
        </>
    )
}

export default App
