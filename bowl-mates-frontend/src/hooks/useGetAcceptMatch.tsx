import { useState, useCallback } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import { user_match_approve_address } from '../api-addresses';

const useGetApproveMatch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const authHeader = useAuthHeader();

    const approveMatch = useCallback((userId: any) => {
        setIsLoading(true);
        fetch(user_match_approve_address, {
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
                    throw new Error('Error approving match');
                }
                return res.json();
            })
            .catch(error => {
                setError(error);
                console.error('Error approving match:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [authHeader]);

    return { approveMatch, isLoading, error };
};

export default useGetApproveMatch;
