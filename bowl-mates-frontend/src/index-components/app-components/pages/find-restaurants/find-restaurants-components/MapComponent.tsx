// MapComponent.js
import React from 'react';
import {GoogleMap, MarkerF} from '@react-google-maps/api';
import {restaurant} from "../../../../../data-types/restaurants";

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

// The Map component is what renders our interactable google map as well as initializes all the markers
// contained within it via location data passed in via the restaurant and location props
function MapComponent({restaurants, userLocation}: {restaurants: restaurant[], userLocation: {lat: number, lng: number }}) {
    return (
            <GoogleMap mapContainerStyle={mapContainerStyle} center={userLocation} zoom={13}>
                <MarkerF
                    position={userLocation}
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
}

export default React.memo(MapComponent);
