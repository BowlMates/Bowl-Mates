import {useAuthHeader} from "react-auth-kit";
import {user_image_ref_address} from "../api-addresses";
import {useState} from "react";


export const useGetImageRef = () => {
    const[ userImageRef, setUserImageRef] = useState<string>('');
    const[ imageRefLoading, setImageRefLoading ] = useState<boolean>(true);
    const authHeader = useAuthHeader();

    const getImageRef = ()=> {
        fetch(user_image_ref_address, {
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
                setImageRefLoading(false);
            } else {
                setUserImageRef(body);
                setImageRefLoading(false);
            }
        });

    }

    return {userImageRef, imageRefLoading, setUserImageRef, getImageRef}
}


