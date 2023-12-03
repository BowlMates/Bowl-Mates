import React, { useState } from "react";
import { Button, Card, CardContent, CardMedia, Typography, IconButton, Grid } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

interface UploadImgProps {
    handlePictureUpload: (file: string) => void;
}

const UploadImg: React.FC<UploadImgProps> = ({ handlePictureUpload }) => {
    const [file, setFile] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            console.log(selectedFile);
            setFile(URL.createObjectURL(selectedFile));
        }
    };

    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={8} md={10}>
                <Card>
                    <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <CardMedia
                            component="img"
                            alt=""
                            image={file || ''}
                            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            id="icon-button-file"
                            style={{ display: "none" }}
                            onChange={handleChange}
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                style={{ marginTop: "16px" }}
                            >
                                <PhotoCameraIcon fontSize="large" />
                            </IconButton>
                        </label>
                        <Typography variant="h6" color="textSecondary" align="center">
                            {file ? "File selected" : "No file selected"}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                    variant="contained"
                    fullWidth
                    disabled={!file} // Disable button if no file is selected
                    onClick={() => {
                        handlePictureUpload(file); // Pass the file URL to the parent component
                    }}
                    style={{ marginTop: "16px" }}
                >
                    Submit Photo
                </Button>
            </Grid>
        </Grid>
    );
};

export default UploadImg;
