// MapComponent.js
import React from 'react';
import {GoogleMap, InfoWindow, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import {restaurant} from "../../../../../data-types/restaurants";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

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

    const [selectedMarker, setSelectedMarker] = React.useState<restaurant | null>(null);

    const handleMarkerClick = (restaurant: restaurant) => {
        setSelectedMarker(restaurant);
    };


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
                                    onClick={() => handleMarkerClick(restaurant)}
                                />
                            ))
                    ) : (
                        <div> </div>
                    )}
                </div>
                {selectedMarker && (
                    <InfoWindow
                        position={{
                            lat: parseFloat(selectedMarker.latitude.toString()),
                            lng: parseFloat(selectedMarker.longitude.toString())
                        }}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <div>
                            <CardContent>
                                <img
                                    src={selectedMarker.reference}
                                    alt={`${selectedMarker.name}`}
                                    style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}
                                />
                                <Typography gutterBottom variant="h5" component="div">
                                    {selectedMarker.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Type: {selectedMarker.cuisine}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Address: {selectedMarker.address}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: {selectedMarker.rating}
                                </Typography>
                            </CardContent>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
    ) : <></>;
}

export default React.memo(MapComponent);
