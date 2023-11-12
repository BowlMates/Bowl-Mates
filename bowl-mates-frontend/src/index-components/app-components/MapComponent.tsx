// MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
    const mapContainerStyle = {
        width: '100%',
        height: '500px',
    };

    const center = {
        lat: 47.6550,
        lng: -122.3080,
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDXlQY2uFzDvS7HRowdgflkRqWtmKqYaGw">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
