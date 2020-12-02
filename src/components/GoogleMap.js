import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
  const mapSettings = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 15,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        defaultCenter={mapSettings.center}
        defaultZoom={mapSettings.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
