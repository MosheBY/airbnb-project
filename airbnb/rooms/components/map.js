import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

export function MapBox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const p2 = [-10, -20];

  // long and lat from the server
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/mosheby12/clbm2znsk002p14pc2i34a41f"
      onMove={(evt) => setViewState(evt.viewState)}
      {...viewState}
      mapboxAccessToken={process.env.mapbox_key}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          {/* Marker on the map */}
          <Marker latitude={result.lat} longitude={result.long} offset={p2}>
            <p
              role="img"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              &#x1F4CD;
            </p>
          </Marker>
          {selectedLocation.longitude === result.long ? (
            <Popup closeOnClick={true} onClose={() => setSelectedLocation({})} latitude={result.lat} longitude={result.long}>
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}
