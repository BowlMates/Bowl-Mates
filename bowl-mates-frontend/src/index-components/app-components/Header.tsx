// React Imports
import * as React from "react";

// Custom Imports
import Logo from "../../images/BOWLMATES-LOGO.png"
import {DRAWER_WIDTH} from "./shared-app-components";

// MUI Imports
import {styled} from "@mui/material/styles";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

// MUI ICONS
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

// React Auth Kit Imports
import {useSignOut} from 'react-auth-kit'

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    backgroundColor: theme.palette.secondary.main,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

interface Props {
    drawerOpen: boolean,
    toggleDrawerOpen: () => void
}

function Header(props: Props) {

    const navigate = useNavigate();

    const signOut = useSignOut();

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.toggleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Box flexGrow={2} sx={{display: "flex", justifyContent: "center"}}>
                    <Box
                        component={"img"}
                        sx={{height: 50}}
                        alt={"BowlMates Logo"}
                        src={Logo}
                        onClick={() => {
                            navigate("/app");
                        }}
                    />
                </Box>
                <Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => {
                            navigate("/");
                            signOut();
                        }}
                        edge="start"
                    >
                        <LogoutIcon/>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => {
                            navigate("/app/settings")
                        }}
                        edge="start"
                    >
                        <PersonIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header
