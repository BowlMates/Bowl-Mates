// React Auth Kit Imports

export const useRegister = () => {

    const loginReturns : {success : boolean, message : string}[] = [
        {success : true, message : "Registration Successful"},
        {success : false, message : "Something Went Wrong"},
    ]

    const headers = {
        "Content-Type" : "application/json",
    }

    let productionLink : string = "https://backend.bowlmates.me/auth/register";
    //let testingLink : string = "http://localhost:8080/auth/login";

    const userRegistration = async (username : string, password : string, email : string) : Promise<{ success: boolean, message: string }> => {

        let returnVal = loginReturns[1];

        return await fetch(productionLink, {
            headers: headers,
            method: "post",
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                name: username
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
            returnVal = loginReturns[0];
            return returnVal;
        });
    }

    return {userRegistration};
}