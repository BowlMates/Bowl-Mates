// MapComponent.js
import React from 'react';
import {GoogleMap, MarkerF} from '@react-google-maps/api';
import {restaurant} from "../../../../data-types/restaurants";

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

// Center of the map
const uwCoords = {
    lat: 47.6550,
    lng: -122.3080,
};

// The Map component is what renders our interactable google map as well as initializes all of the markers
// contained within it via location data passed in as a prop with each restaurant
function MapComponent({restaurants}: {restaurants: restaurant[]}) {
    return (
            <GoogleMap mapContainerStyle={mapContainerStyle} center={uwCoords} zoom={13}>
                <MarkerF
                    position={uwCoords}
                    title={"Current Location"}
                />
                {restaurants.map((restaurant) => (
                    <MarkerF
                        key={restaurant.id}
                        position={{ lat: parseFloat(restaurant.latitude.toString()), lng: parseFloat(restaurant.longitude.toString())}}
                        title={restaurant.name}
                    />
                ))}
            </GoogleMap>
    );
};

export default React.memo(MapComponent);
