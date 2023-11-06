// MUI Imports
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from "react";


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

    // Initialize a matrix for availability
    const [availability, setAvailability] =
        useState(
            //Array(7).fill(Array(11).fill(false)));
            daysOfWeek.map(() => timeSlots.map(() => false))
        );

    const toggleAvailability = (dayIndex: number, timeIndex: number) => {
        // create a copy of the availability matrix
        const updatedAvailability = availability.map((day, i) =>
            dayIndex === i ? [...day] : day
        );

        // (dayIndex: number, timeIndex: number) => {
        // const updatedAvailability = [...availability];
        // // const updatedAvailability: boolean[][] = [...availability];

        // Toggle the specific time slot
        updatedAvailability[dayIndex][timeIndex] = !updatedAvailability[dayIndex][timeIndex];
        // Update the state with the new matrix
        setAvailability(updatedAvailability);
    }

    return (
        <Box
            display="flex"
            height="100vh"
            p={1}
        >
            {/*TEXT BOX, ALL FLUSH LEFT*/}
            <Box
                width="300px"
                mr={2}
                // display="flex"
                // justifyContent="center"
                // alignItems="start"
                // position="relative"
                // height="100vh"
            >

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
            </Box>

            {/*DAYS OF WEEK RECTANGLES*/}
            <Box
                flexGrow={1}
                overflow="auto"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    mb={2}
                >
                    {daysOfWeek.map((day, index) => (
                        <Box
                            key={index}
                            mx={1}
                            bgcolor="#54804D"
                            p={1}
                            borderRadius={1}
                        >
                            <Typography variant="body1" color="white">
                                {day}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/*GRID BOX FOR AVAILABILITY*/}

                <Box
                    display="flex"
                    justifyContent="center"
                    //mt={2}
                >
                    {availability.map((dayAvailability, dayIndex) => (
                        <Box
                            key={dayIndex}
                            display="flex"
                            flexDirection="column"
                            mx={1}
                        >
                            {dayAvailability.map((isAvailable, timeIndex) => (
                                <Box
                                    key={timeIndex}
                                    bgcolor={isAvailable ? '#4CAF50' : '#CCCCCC'}
                                    color={isAvailable ? 'white' : 'black'}
                                    p={1}
                                    my={0.5}
                                    borderRadius="50%"
                                    style={{cursor: 'pointer'}}
                                    onClick={() => toggleAvailability(dayIndex, timeIndex)}

                                >
                                    <Typography variant="body2" textAlign="center">
                                        {timeSlots[timeIndex]}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>

    )
}

export default Availability