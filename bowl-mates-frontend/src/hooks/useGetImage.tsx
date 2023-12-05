import {useAuthHeader} from "react-auth-kit";
import {user_image_address} from "../api-addresses";
import {useEffect, useState} from "react";

//TODO: Find out why this only works with jpg files and not png
export const useGetImage = (imageRef: string) => {
    const[image, setImage] = useState<string>('');
    const [fullAddress, setFullAddress] = useState(user_image_address + imageRef);
    const[imageLoading, setImageLoading] = useState<boolean>(true);
    const authHeader = useAuthHeader();

    useEffect(()=>{getImage()},[fullAddress]);

    const setAddress = (imageRef : string) =>{
        setFullAddress(user_image_address + imageRef);
    }

    const getImage = ()=> {
        if(imageRef !== ''){
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
                    console.log("Unable to get image");
                    setImageLoading(false);
                } else {
                    const imageUrl= URL.createObjectURL(body);
                    setImage(imageUrl);
                    setImageLoading(false);
                }
            });
        } else{
            setImageLoading(false);
        }
    }

    return {image, imageLoading, setAddress}
}


