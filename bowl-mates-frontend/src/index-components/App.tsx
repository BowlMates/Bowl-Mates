import Sidebar from "./app-components/Sidebar";
import Box from "@mui/material/Box";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Header from "./app-components/Header";
import {useState} from "react";
import {useToggle} from "../hooks/useToggle";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import {DrawerHeader} from "./app-components/shared-app-components";

function App() {

    const {state : drawerOpen, toggle : toggleDrawerOpen} = useToggle(false);

    const drawerWidth = 240;

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
                {/*<SideBarHeader/>*/}
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline/>
                    <Header drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
                    <Sidebar drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <DrawerHeader />
                        {/*React Router Dom Stuff goes here so we can make pages*/}
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default App
