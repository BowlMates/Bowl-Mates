import {register_address} from "../api-addresses";

const useUserSignup = () => {
    const userSignup = (name: string, username: string, email: string, password: string) => {

        fetch(register_address, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                password: password
            })
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully registered");
            } else {
                console.log(res)
                console.log("Registration failed");
            }
        });
    }

    return { userSignup };
}

export default useUserSignup;