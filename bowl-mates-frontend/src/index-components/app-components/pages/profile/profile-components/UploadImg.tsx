import React, { useState } from "react";
import { Button, Card, CardContent, CardMedia, Typography, IconButton, Grid } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

interface UploadImgProps {
    handlePictureUpload: (image: File | null) => void;
}

const UploadImg: React.FC<UploadImgProps> = ({ handlePictureUpload }) => {
    const [fileReference, setFileReference] = useState<string>('');
    const [fileData, setFileData] = useState<File | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile && isFileTypeAllowed(selectedFile)) {
            setFileReference(URL.createObjectURL(selectedFile));
            setFileData(selectedFile);
        }
    };

    const isFileTypeAllowed = (file: File) => {
        const allowedTypes = ['image/gif', 'image/jpeg', 'image/png'];
        return allowedTypes.includes(file.type);
    };

    const resetState = () => {
        setFileReference('');
        setFileData(null);
    };

    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={8} md={10}>
                <Card>
                    <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: 2 }}>
                        <CardMedia
                            component="img"
                            alt=""
                            image={fileReference || ''}
                            style={{ width: "200px", height: "200px", borderRadius: "2%", margin: 2 }}
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
                            {fileReference ? "Selected image: " + fileData?.name : "Select a jpg, png, or gif file"}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                    variant="contained"
                    fullWidth
                    disabled={!fileReference} // Disable button if no file is selected
                    onClick={() => {
                        handlePictureUpload(fileData);
                        resetState();
                    }}
                    style={{ margin: 2}}
                >
                    Submit Photo
                </Button>
            </Grid>
        </Grid>
    );
};

export default UploadImg;
