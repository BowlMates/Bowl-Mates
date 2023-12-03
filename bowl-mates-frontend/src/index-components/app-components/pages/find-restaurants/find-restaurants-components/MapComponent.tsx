// MapComponent.js
import React from 'react';
import {GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import {restaurant} from "../../../../../data-types/restaurants";

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

// The Map component is what renders our interactable google map as well as initializes all the markers
// contained within it via location data passed in via the restaurant and location props
function MapComponent({restaurants, userLocation}: {restaurants: restaurant[], userLocation: {lat: number, lng: number }}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDXlQY2uFzDvS7HRowdgflkRqWtmKqYaGw"
    })

    const [map, setMap] = React.useState<google.maps.Map | null>(null)

    const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
        setMap(null)
    }, [])

    return isLoaded ? (
            <GoogleMap mapContainerStyle={mapContainerStyle} center={userLocation} zoom={13} onUnmount={onUnmount}>
                <MarkerF
                    position={userLocation}
                    title={"Current Location"}
                />
                <div>
                    {restaurants.length > 0 ? (
                        restaurants.map((restaurant) => (
                                <MarkerF
                                    key={restaurant.id}
                                    position={{
                                        lat: parseFloat(restaurant.latitude.toString()),
                                        lng: parseFloat(restaurant.longitude.toString())
                                }}
                                    title={restaurant.name}
                                />
                            ))
                    ) : (
                        <div> </div>
                    )}
                </div>

            </GoogleMap>
    ) : <></>;
}

export default React.memo(MapComponent);
