import { useState, useCallback } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import { user_match_reject_address } from '../api-addresses';

const useGetRejectMatch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const authHeader = useAuthHeader();

    const rejectMatch = async (userId: any) : Promise<boolean> => {
        setIsLoading(true);
        return fetch(user_match_reject_address, {
            headers: {
                "Authorization": authHeader(),
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*",
            },
            method: "POST",
            body: JSON.stringify(userId),
        })
            .then(res => {
                if (!res.ok) {
                    console.log('Error approving match');
                    return false;
                }
                return true;
            })
            .catch(error => {
                setError(error);
                console.error('Error approving match:', error);
                return false;
            });
    }

    return { rejectMatch, isLoading, error };
};

export default useGetRejectMatch;
