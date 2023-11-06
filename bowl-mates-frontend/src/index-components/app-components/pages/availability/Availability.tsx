// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


//Pre-Styling
//----------------------------------------------------------------------------
// You can pre-style components using the styled method/function
// Place the component type you want styled as an argument (in this case - Box)
// and then style the inside as if it were in-line styling or styling in a css
// file
// const ExampleStyledComponent = styled(Box)(({theme}) => ({
//     flexGrow: 1,
//     marginTop: "64px",
//     p: 3, //padding
//     backgroundColor: theme.palette.primary.main,
//     height: "calc(100% - 64px)",
//     width: "auto"
// }));

const timeSlots = [
    '10am - 12pm',
    '11am - 1pm',
    '12pm - 2pm',
    '1pm - 3pm',
    '2pm - 4pm',
    '3pm - 5pm',
    '4pm - 6pm',
    '5pm - 7pm',
    '6pm - 8pm',
    '7pm - 9pm',
    '8pm - 10pm'
]

const daysOfWeek = [
    'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'
    ]


function Availability() {

    //Notes about some MUI component types you will probably use the most
    //----------------------------------------------------------------------------
    //Note: Box is a better div (pls don't use divs)
    //Note: Typography is a better version of html text tags (h1, p, etc...).
    //      you can set the type of typography using variant={"h1"} within the tag
    //Note: There is usually an MUI replacement for everything so try to stick with
    //      this family of components since they will be most cohesive together
    //      while also allowing us to change theming easier and possibly implement
    //      dark theme functionality

    return (

        // TEXT BOX, ALL FLUSH LEFT
        <Box>

            <Box marginTop="20vh">

                <Typography variant="h2"
                            style={
                                {
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 300,
                                    fontSize: '48px',
                                    lineHeight: '1.2'
                                }}
                            align="left"
                            color="000000">
                    when are you
                </Typography></Box>

            <Box>
                <Typography variant="h2"
                            style={
                                {
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 100,
                                    fontSize: '128px',
                                    lineHeight: '1.2'
                                }}
                            align="left"
                            color="000000">
                    free?
                </Typography></Box>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                height="10vh"
                marginLeft="20px"
            >
                <Typography variant="h4"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '1.2'
                            }}>
                    select as many that apply to
                </Typography>
                <Typography variant="h4"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '1.2',
                                paddingLeft: '55px',
                                textAlign: 'center'
                            }}>
                    your schedule
                </Typography>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                height="10vh"
                marginLeft="20px"
            >
                <Typography variant="h4"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '1.2',
                                color: '#54804D',
                                paddingTop: '30px',
                                marginBottom: '0'
                            }}>
                    please note: most meals take <br/>
                    around two hours, so we plan in <br/>
                    the same increments to facilitate <br/>
                </Typography>
                <Typography variant="h4"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '1.2',
                                color: '#54804D',
                                paddingLeft: '30px',
                                textAlign: 'center'
                            }}>
                    quality meals as well <br/>
                    as quality conversation
                </Typography>
            </Box>

            {/*DAYS OF WEEK RECTANGLES*/}

            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                marginTop="-980px"
                marginLeft="300px"
                position="relative"
            >
                {daysOfWeek.map((day, index) => (
                    <Box
                        key={index}

                        width="60px"
                        height="25px"
                        textAlign="center"
                        marginRight="16px"
                        bgcolor="#54804D"
                        color="white"
                        // padding="8px"
                        // borderRadius="4px"
                        // position="absolute"
                        // top="60px"
                    >
                        <Typography variant="body1">{day}</Typography>
                    </Box>
                ))}
            </Box>

            {/*GRID BOX FOR AVAILABILITY*/}
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                marginTop="-475px"
                marginLeft="300px"
            >
                <Box display="flex" flexDirection="row">
                {[...Array(7)].map((_, columnIndex) => (
                    <Box key={columnIndex} marginRight="16px">
                    {[...Array(11)].map((_, rowIndex) => (
                        <Box
                        key={rowIndex}
                        borderRadius="50%"
                        width="60px"
                        height="60px"
                        bgcolor="#CCCCCC"
                        textAlign="center"
                        lineHeight="20px"
                        padding="1px"
                        paddingTop="10px"
                        marginBottom="8px"
                        >
                            {timeSlots[rowIndex]}
                        </Box>
                        ))}
                    </Box>
                    ))}
                </Box>
            </Box>

            {/*/!*DAYS OF WEEK ROUND 2*!/*/}
            {/*{daysOfWeek.map((day,index) => (*/}
            {/*    <Box*/}
            {/*        key={index}*/}
            {/*        position="absolute"*/}
            {/*        top="-80px"*/}
            {/*        left={(index * 80) + 20}*/}
            {/*    >*/}
            {/*        <Box*/}
            {/*        bgcolor="#4CAF50"*/}
            {/*        padding="8px"*/}
            {/*        borderRadius="4px"*/}
            {/*        >*/}
            {/*        <Typography variant="body1">{day}</Typography>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*))}*/}


        </Box>


    )
}

export default Availability