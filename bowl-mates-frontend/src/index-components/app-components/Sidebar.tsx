// React Imports
import * as React from 'react';
import {useNavigate} from "react-router-dom";

// Custom Imports
import {DrawerHeader, DRAWER_WIDTH} from "./shared-app-components";

// MUI Imports
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//MUI ICONS
import FlightLandIcon from '@mui/icons-material/FlightLand';
import LoginIcon from '@mui/icons-material/Login';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

const openedMixin = (theme: Theme): CSSObject => ({
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        backgroundColor: theme.palette.primary.main,
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface Props {
    drawerOpen : boolean,
    toggleDrawerOpen : () => void
}

function Sidebar(props : Props) {
    const theme = useTheme();
    const navigate = useNavigate();

    const sidebarRoutes : {name : string, icon : any, route : ()=>void}[] = [
        {name: "Home", icon : <HomeIcon/>, route : ()=>{navigate("/app/")}},
        {name: "Favorite Restaurants", icon : <RestaurantMenuIcon/>, route : ()=>{navigate("/app/favorite-restaurants")}},
        {name: "Availability", icon : <EventAvailableIcon/>, route : ()=>{navigate("/app/availability")}},
        {name: "Matching", icon : <Diversity3Icon/>, route : ()=>{navigate("/app/matching")}},
        {name: "Successful Matches", icon : <CheckCircleIcon/>, route : ()=>{navigate("/app/successful-matches")}},
        {name: "FAQ", icon : <InfoIcon/>, route : ()=>{navigate("/app/faq")}},
    ];

    return (
        <Drawer variant="permanent" open={props.drawerOpen}>
            <DrawerHeader/>
            <Divider />
            <List>
                {sidebarRoutes.map((item, index) => (
                    <ListItem key={item.name} disablePadding sx={{ display: 'block' }} onClick={item.route}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: props.drawerOpen ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.drawerOpen ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: props.drawerOpen ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
}

export default Sidebar
