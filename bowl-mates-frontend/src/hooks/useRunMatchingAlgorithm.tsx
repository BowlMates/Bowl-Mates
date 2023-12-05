import {useAuthHeader} from "react-auth-kit";
import {user_run_matching_algorithm_address} from "../api-addresses";
import {useState} from "react";

const useMatchChats = () => {
    const authHeader = useAuthHeader();
    const [loadingMatches, setLoadingMatches] = useState<boolean>(false);

    const headers = {
        "Authorization": authHeader(),
        "Content-Type" : "application/json",
    }

    const runMatchAlgorithm = () => {
        setLoadingMatches(true);
        fetch(user_run_matching_algorithm_address, {
            headers: headers,
            method: "get",
        }).then((res) => {
            setLoadingMatches(false);
            return res.ok;
        });
    }

    return {runMatchAlgorithm, loadingMatches};
}

export default useMatchChats;