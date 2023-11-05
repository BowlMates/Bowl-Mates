import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {DrawerHeader} from "./shared-app-components";
import {styled} from "@mui/material/styles";

function BodyContainer () {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    return (
        <>
            <DrawerHeader/>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Typography>Hello there</Typography>
            </Box>
        </>
    )
}

export default BodyContainer;