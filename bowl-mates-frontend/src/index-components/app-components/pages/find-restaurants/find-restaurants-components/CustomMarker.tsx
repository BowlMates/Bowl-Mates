// CustomMarker.js
import React from 'react';
import { Marker } from '@react-google-maps/api';
import logo from "../../../../../images/BOWLMATES LOGO V2.png"

interface CustomMarkerProps{
    position: {
        lat: number,
        lng: number
    },
    title: string,
    onClick: () => void,
    themeColor: string
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, title, onClick, themeColor }) => (
    <Marker
        position={position}
        title={title}
        onClick={onClick}
        icon={{
            url: logo, // Use 'url' instead of 'path' when specifying an image
            scaledSize: new window.google.maps.Size(40, 40), // Adjust the size of the image
            fillColor: themeColor,
            fillOpacity: 1,
            scale: 0.7,
            strokeColor: 'white',
            strokeWeight: 2,
        }}
    />
);

export default CustomMarker;
