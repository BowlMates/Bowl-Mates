import {useAuthHeader} from "react-auth-kit";
import {user_image_save_address} from "../api-addresses";

const useSaveImageRef = () => {
    const authHeader = useAuthHeader();

    const saveImage = async (image: File) : Promise<{ success: boolean }> => {
        const token = authHeader();

        // Create a FormData object and append the file to it
        const formData = new FormData();
        formData.append("image", image);

        return await fetch(user_image_save_address, {
            headers: {
                "Authorization" : token,
            },
            method: "POST",
            body: formData
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully posted user image");
                return {success: true};
            } else {
                console.log(res)
                console.log("Failed to post user image");
                return {success: false};
            }
        });
    }

    return {saveImage}
}


export default useSaveImageRef;