// React Auth Kit Imports

import { useSignIn } from "react-auth-kit";
import {login_address} from "../api-addresses";

export const useUserLogin = () => {

    const signIn = useSignIn();

    const loginReturns : {success : boolean, message : string}[] = [
        {success : true, message : "Login Successful"},
        {success : false, message : "Incorrect Login Information"},
    ]

    const headers = {
        "Content-Type" : "application/json",
    }

    const userLogin = async (username : string, password : string) : Promise<{ success: boolean, message: string }> => {

        let returnVal = loginReturns[1];

        return await fetch(login_address, {
            headers: headers,
            method: "post",
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return null;
            }
        }).then((body) => {
            if (body == null) {
                console.log("Login failed");
                return returnVal;
            }
            if (signIn({
                token: body.jwt,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: {name: username},
            })) {
                console.log(body.jwt);
                returnVal = loginReturns[0];
            }
            return returnVal;
        });
    }

    return {userLogin};
}