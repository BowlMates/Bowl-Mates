// CustomMarker.js
import React from 'react';
import { Marker } from '@react-google-maps/api';
import logo from "../../../../../images/BOWLMATES LOGO V2.png"
import peter from "../../../../../images/Peter_the_pistachio_icecream_cone.png"

interface CustomMarkerProps{
    user: boolean,
    position: {
        lat: number,
        lng: number
    },
    title: string,
    onClick: () => void,
    themeColor: string
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ user, position, title, onClick, themeColor }) => (
    <Marker
        position={position}
        title={title}
        onClick={onClick}
        icon={{
            url: user ? logo : peter, // Use 'url' instead of 'path' when specifying an image
            scaledSize: new window.google.maps.Size(60, 60), // Adjust the size of the image
            fillColor: themeColor,
            fillOpacity: 1,
            scale: 0.7,
            strokeColor: 'black',
            strokeWeight: 10,
        }}
    />
);

export default CustomMarker;
