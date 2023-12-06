// React Auth Kit Imports

import { useSignIn } from "react-auth-kit";
import {login_address} from "../api-addresses";

export const useUserLogin = () => {

    const signIn = useSignIn();

    const loginReturns : {success : boolean, message : string}[] = [
        {success : true, message : "Login Successful"},
        {success : false, message : "Incorrect Login Information"},
    ];

    const jwtExpiration : number = 30; // In minutes

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
            const token = body.jwt;
            const userID = body.id;
            const username = body.username;
            const firstName = body.firstName;
            const lastName = body.lastName;
            if (signIn({
                token: token,
                expiresIn: jwtExpiration,
                tokenType: "Bearer",
                // Converts minute value into millisecond and -1 to ensure
                // we expire before a user tries to swap to a new window and make a bad call
                authState: {
                    userID: userID,
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    jwtExpiration : (Date.now() + (jwtExpiration - 1) * 100000).toString(),
                },
            })) {
                returnVal = loginReturns[0];
            }
            return returnVal;
        });
    }

    return {userLogin};
}