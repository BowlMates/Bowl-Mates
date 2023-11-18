import {useAuthUser, useSignOut} from "react-auth-kit";
import {useNavigate} from "react-router-dom";

export const useIsUserSessionValid = () => {
    const auth = useAuthUser();
    const signOut = useSignOut();
    const navigate = useNavigate();

    // Should be used within a useEffect
    function checkValidity(){
        if (Date.now() > auth()!.jwtExpiration){
            console.log("checkpoint");
            navigate("/");
            signOut();
        }
    }
    return checkValidity;
}