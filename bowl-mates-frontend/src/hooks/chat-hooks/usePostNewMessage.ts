// Custom imports
import {user_send_message_address} from "../../api-addresses";
import {useAuthHeader} from "react-auth-kit";

const usePostNewMessage = () => {

    const authHeader = useAuthHeader();

    const postNewMessage = async (matchID : number, message : string) : Promise<boolean> => {
        const headers = {
            "Authorization": authHeader(),
            "Content-Type" : "application/json",
        }

        return fetch(user_send_message_address, {
            headers: headers,
            method: "post",
            body: JSON.stringify({
                matchId: matchID,
                message: message,
                // chatterID: -1,
                // date: -1
            })
        }).then((res) => {
            if (!res.ok) {
                console.log("failed to retrieve match list");
                return false
            } else {
                return true;
            }
        });
    }

    return {postNewMessage};
}

export default usePostNewMessage;