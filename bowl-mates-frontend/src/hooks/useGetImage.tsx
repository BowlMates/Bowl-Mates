import {useAuthHeader} from "react-auth-kit";
import {user_image_address} from "../api-addresses";
import logo from '../images/BOWLMATES LOGO V2.png';
import {useState} from "react";


export const useGetImage = () => {
    const[ userImage, setUserImage] = useState<string>(logo);
    const authHeader = useAuthHeader();

    const getImage = ()=> {
        fetch(user_image_address, {
            headers: {
                "Authorization": authHeader(),
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*",
            },
            method: "GET",
        }).then((res) => {
            if (res.ok) {
                return res.text();
            } else {
                return null;
            }
        }).then((body) => {
            if (body == null) {
                console.log("Unable to get image");
            } else {
                let temp: string = body;
                setUserImage(temp);
            }
        });

    }

    return {userImage, setUserImage, getImage}
}


