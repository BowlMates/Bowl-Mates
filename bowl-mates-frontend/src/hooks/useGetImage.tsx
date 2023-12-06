import {useAuthHeader} from "react-auth-kit";
import {user_image_address} from "../api-addresses";
import {useEffect, useState} from "react";
import logo from "../../src/images/BOWLMATES LOGO V2.png";

//TODO: Find out why this only works with jpg files and not png
export const useGetImage = (imageRef: string) => {
    const[image, setImage] = useState<string>("");
    const [fullAddress, setFullAddress] = useState(user_image_address + imageRef);
    const[imageLoading, setImageLoading] = useState<boolean>(true);
    const authHeader = useAuthHeader();

    const getImage = () => {
        if(imageRef !== ""){
            fetch(fullAddress, {
                headers: {
                    "Authorization": authHeader(),
                },
                method: "GET",
            }).then((res) => {
                if (res.ok) {
                    return res.blob();
                } else {
                    return null;
                }
            }).then((body) => {
                if (body == null) {
                    setImage(logo);
                    setImageLoading(false);
                    console.log("Unable to get image");
                } else {
                    const imageUrl= URL.createObjectURL(body);
                    setImage(imageUrl);
                    setImageLoading(false);
                }
            });
        } else{
            setImage(logo);
            setImageLoading(false);
        }
    }

    useEffect(()=>{
        getImage();
        console.log(fullAddress);
    },[fullAddress]);

    const setAddress = (imageRef : string) =>{
        setFullAddress(user_image_address + imageRef);
    }



    return {image, imageLoading, setAddress}
}


