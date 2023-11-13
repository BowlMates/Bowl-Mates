// MapComponent.js
import React, {useEffect, useState} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import useNearbyPlaces from "../../hooks/getNearbyRestaurants";

const MapComponent = () => {
    const mapContainerStyle = {
        width: '100%',
        height: '500px',
    };

    const uwCoords = {
        lat: 47.6550,
        lng: -122.3080,
    };

    //TODO: FIgure out conditional rendering

    return (
        <LoadScript googleMapsApiKey="AIzaSyDXlQY2uFzDvS7HRowdgflkRqWtmKqYaGw">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={uwCoords} zoom={13}>
                <Marker position={uwCoords} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
