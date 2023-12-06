import {useAuthHeader} from "react-auth-kit";
import {user_avail_address} from "../api-addresses";
import {avail} from "../data-types/avail";
import {useEffect, useState} from "react";

const useGetAvails = (avails : boolean[][]) => {

    const [availability, setAvailability] = useState<boolean[][]>(avails);
    const [run, setRun] = useState(true);
    const authHeader = useAuthHeader();

    useEffect(() => {
        setRun(false);
    }, [])

    useEffect(() => {
        fetch(user_avail_address, {
            headers: {
                "Authorization": authHeader(),
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*",
            },
            method: "GET",
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return null;
            }
        }).then((body) => {
            if (body == null) {
                console.log("Unable to get Availability");
                setAvailability(avails);
            } else {
                let temp: avail[] = body;
                let tmpAvailability = avails;
                for (let i = 0; i < temp.length; i++) {
                    tmpAvailability[temp[i].day][temp[i].time] = true;
                }
                setAvailability(tmpAvailability);
            }
        });
    }, [run]);
    return {availability, setAvailability}
}

export default useGetAvails;