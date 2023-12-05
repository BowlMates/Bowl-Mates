import {useState, useEffect} from 'react';
import {useAuthHeader} from 'react-auth-kit';
import {user_match_show_address} from '../api-addresses';

const useGetMatches = () => {
    const [matchesQueue, setMatchesQueue] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const authHeader = useAuthHeader();

    useEffect(() => {
        console.log(matchesQueue);
    }, [matchesQueue])

    const fetchMatches = () => {
        fetch(user_match_show_address, {
            headers: {
                "Authorization": authHeader(),
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*",
            },
            method: "GET",
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Error fetching matches');
            }
        })
            .then(data => {
                setMatchesQueue(data);
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching match queue:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchMatches()
    }, []);

    return {matchesQueue, isLoading, error, fetchMatches};
};

export default useGetMatches;
