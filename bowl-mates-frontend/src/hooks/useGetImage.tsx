import {useAuthHeader} from "react-auth-kit";
import {user_image_address} from "../api-addresses";
import {useState} from "react";

//TODO: Find out why this only works with jpg files and not png
export const useGetImage = (imageRef: string) => {
    const[ image, setImage] = useState<string>('');
    const fullAddress: string = user_image_address + imageRef;
    const authHeader = useAuthHeader();

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
                } else {
                    const imageUrl= URL.createObjectURL(body);
                    setImage(imageUrl);
                }
            });
        }
    }

    return {image, setImage, getImage}
}


