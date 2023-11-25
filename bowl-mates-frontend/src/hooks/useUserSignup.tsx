import {register_address} from "../api-addresses";

const useUserSignup = () => {
    const userSignup = (name: string, email: string, username: string, password: string) => {
        console.log(name)
        console.log(email)
        console.log(username)
        console.log(password)
    }

    return { userSignup };
}

export default useUserSignup;