import Sidebar from "./app-components/Sidebar";
import Box from "@mui/material/Box";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Header from "./app-components/Header";
import {useState} from "react";
import {useToggle} from "../hooks/useToggle";
import Typography from "@mui/material/Typography";

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
        <Box className='App'>
            <ThemeProvider theme={appTheme}>
                <Box sx={{ display: 'flex' }}>
                    <Header drawerWidth={drawerWidth} drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
                    <Sidebar drawerWidth={drawerWidth} drawerOpen={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        {/*<DrawerHeader />*/}
                        <Typography>Hello there</Typography>
                    </Box>
                </Box>
            </ThemeProvider>
        </Box>
    )
}

export default App
