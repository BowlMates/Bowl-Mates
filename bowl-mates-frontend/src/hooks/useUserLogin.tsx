export const useUserLogin = () => {

    const loginReturns : {success : boolean, message : string}[] = [
        {success : true, message : "Login Successful"},
        {success : false, message : "Incorrect Login Information"},
    ]

    const headers = {
        "Content-Type" : "application/json",
    }

    //let productionLink : string = "https://backend.bowlmates.me/auth/login";
    let testingLink : string = "http://localhost:8080/auth/login";

    const userLogin = (username : string, password : string) => {

        let returnVal = loginReturns[1];

        fetch(testingLink, {
            headers : headers,
            method : "post",
            body : JSON.stringify({
                username : username,
                password: password
            })
        }).then((response) => {
            return response.json();
        }).then((body) => {
            localStorage.setItem("bowlmates-token", body.jwt);
            returnVal = loginReturns[0];
        })

        return returnVal;
    }

    return {userLogin};
}