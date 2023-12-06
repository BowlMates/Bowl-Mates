// React Imports
import React, {useEffect, useState} from "react";

// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Custom Imports
import {useIsUserSessionValid} from "../../../../hooks/useIsUserSessionValid";
import {avail} from "../../../../data-types/avail";
import useSetAvails from "../../../../hooks/useSetAvails";
import useGetAvails from "../../../../hooks/useGetAvails";
import Alert from "@mui/material/Alert";

// Predefined time slots for availability
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

// Predefined days of the week
const daysOfWeek = [
    'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'
]

function Availability() {
    useIsUserSessionValid();
    const {setAvails, currentlyPosting} = useSetAvails();
    const {availability, setAvailability} = useGetAvails(daysOfWeek.map(() => timeSlots.map(() => false)));

    const [showPostingFeedback, setShowPostingFeedback] = useState<boolean>(false);
    const [goodPost, setGoodPost] = useState<boolean>(true);

    // Function to toggle availability for a specific day and time slot
    const toggleAvailability = (dayIndex: number, timeIndex: number) => {
        // Create a copy of the availability state
        const updatedAvailability : boolean[][] = availability.map((day, i) =>
            dayIndex === i ? [...day] : day
        );

        // Toggle the specific time slot's availability
        updatedAvailability[dayIndex][timeIndex] = !updatedAvailability[dayIndex][timeIndex];

        // Update the state with the new matrix
        setAvailability(updatedAvailability);
    }

    const onSubmit = () => {
        let avails = [];
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 11; j++) {
                if (availability[i][j]) {
                    avails.push({ "day" : i, "time" : j });
                }
            }
        }

        setAvails(avails).then((res)=>{
            if(res){
                setGoodPost(true);
            } else {
                setGoodPost(false);
            }

            setShowPostingFeedback(true);
        });
    }

    return (
        <Box
            display="flex"
            height="100vh"
            p={1}
        >
            {
                showPostingFeedback ?
                    <Alert severity={goodPost ? "success" : "error"} onClose={() => {setShowPostingFeedback(false)}} sx={{position: "absolute", zIndex: 3}}>
                        {goodPost ? "Successfully set availability!" : "There was an issue setting availability"}
                    </Alert> : <></>
            }
            {/* Box for left-aligned text elements */}
            <Box
                width="300px"
                mr={2}
                // display="flex"
                // justifyContent="center"
                // alignItems="start"
                // position="relative"
                // height="100vh"
            >
                {/* Typography for 'when are you' */}
                <Box paddingTop="20vh">

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

                {/* Typography for 'free?' */}
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

                {/* Instructions for day/time slot selection */}
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

                {/* Additional note on 2hr time planning */}
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

            {/* Box for displaying day of the week */}
            <Box
                flexGrow={1}
                overflow="auto"
            >
                {/* Days of the week headers */}
                <Box
                    display="flex"
                    justifyContent="center"
                    mb={2}
                >
                    {daysOfWeek.map((day, index) => (
                        <Box
                            display="flex"
                            justifyContent="center"
                            key={index}
                            mx={1}
                            bgcolor="#54804D"
                            p={1}
                            borderRadius={1}
                            sx={{ width: 1/10 }}

                        >
                            <Typography variant="body1" color="white">
                                {day}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Grid for selecting availability*/}
                <Box
                    display="flex"
                    justifyContent="center"
                >
                    {availability.map((dayAvailability, dayIndex) => (
                        // COLUMNS FOR EACH DAY
                        <Box
                            key={dayIndex}
                            display="flex"
                            flexDirection="column"
                            mx={1}
                        >
                            {dayAvailability.map((isAvailable, timeIndex) => (
                                // TIME SELECTION BOXES
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

                <Box
                    m={4}
                    //margin
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    {/* Submit button */}
                    <Button disabled={currentlyPosting} type="submit" color="success" variant="contained" size="large" onClick={() => onSubmit()}>
                        {currentlyPosting ? "submitting..." : "submit"}
                    </Button>
                </Box>

            </Box>


        </Box>


    )
}

export default Availability