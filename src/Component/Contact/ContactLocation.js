import React, { useMemo } from 'react'


import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
export default function ContactLocation() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDWRYaOQoTWbW2CGDTgS-mzBgm5-A6dgUE',
    });
    const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

    const containerStyle = {
        width: '100%',
        height: '400px'
    };


    return (
        <div>

            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}
                />
            )}
        </div>
    )
}
