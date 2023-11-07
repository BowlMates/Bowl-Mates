// MUI Imports
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

    const BodyContainer = styled(Box)(({ theme }) => ({
        flexGrow: 1,
        marginTop: "64px",
        padding: "20px",
        backgroundColor: theme.palette.primary.main,
        height: "calc(100% - 64px)",
        width: "auto",
        position: "relative"
    }));

export default BodyContainer;