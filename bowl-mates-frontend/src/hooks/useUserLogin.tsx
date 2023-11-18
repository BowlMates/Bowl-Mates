// React Auth Kit Imports

import { useSignIn } from "react-auth-kit";

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

    let productionLink : string = "https://backend.bowlmates.me/auth/login";
    //let testingLink : string = "http://localhost:8080/auth/login";

    const userLogin = async (username : string, password : string) : Promise<{ success: boolean, message: string }> => {

        let returnVal = loginReturns[1];

        return await fetch(productionLink, {
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
                expiresIn: jwtExpiration,
                tokenType: "Bearer",
                // Converts minute value into millisecond and -1 to ensure
                // we expire before a user tries to swap to a new window and make a bad call
                authState: {user: username, jwtExpiration : (Date.now() + (jwtExpiration - 1) * 100000).toString()},
            })) {
                returnVal = loginReturns[0];
            }
            return returnVal;
        });
    }

    return {userLogin};
}