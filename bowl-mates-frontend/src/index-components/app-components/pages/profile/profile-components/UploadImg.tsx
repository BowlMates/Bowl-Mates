import React, { useState } from "react";

function UploadImg() {
    /**
     * Handles uploading the image and will update the backend user info when ready
     */
    const [file, setFile] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            console.log(selectedFile);
            setFile(URL.createObjectURL(selectedFile));
        }
    }

    return (
        //className="App"
        <div >
            <input type="file" accept="image/*" onChange={handleChange} />
            <img src={file || ''} alt={file || "No file selected"} style={{
                width: "100px",
                height: "100px",
                position: "absolute"
            }}/>
        </div>
    );
}

export default UploadImg;
