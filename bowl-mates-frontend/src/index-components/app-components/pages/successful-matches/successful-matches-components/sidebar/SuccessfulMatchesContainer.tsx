import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

const SuccessfulMatchesContainer = styled(Box)(() => ({
    display: "flex",
    height: "calc(100% + 40px)",
    width: "calc(100% + 40px)",
    margin: "-20px", // Fills in the padding from the bodyContainer
    // marginBottom: "-40px"
}));

export default SuccessfulMatchesContainer