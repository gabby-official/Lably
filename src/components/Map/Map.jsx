import Map, {
  NavigationControl,
  Marker,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.css";

import MarkerIcon from "../../assets/svg/marker.svg";

function MapComponent() {
  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}

      initialViewState={{
        longitude: 3.3792,
        latitude: 6.5244,
        zoom: 15,
      }}

      mapStyle="mapbox://styles/mapbox/streets-v12"

      className="map-container"
    >
      {/* Navigation Controls */}
      <NavigationControl position="bottom-right" />

      {/* Custom Marker */}
      <Marker
        longitude={3.3792}
        latitude={6.5244}
        anchor="bottom"
      >
        <img
          src={MarkerIcon}
          alt="Current Location"
          className="custom-marker"
        />
      </Marker>
    </Map>
  );
}

export default MapComponent;