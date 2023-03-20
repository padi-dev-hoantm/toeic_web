import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text, lat, lng }: any) => <div> {text}</div>;

const Map = () => {
  const demoCenter = {
    center: { lat: 10.99835602, lng: 77.01502627 },
    zoom: 10,
  };
  const handleApiLoaded = (map: any, maps: any) => {
    // use map and maps objects
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDTj-L4CVlhnWdDS7wdk3rKLhSJmcVx8EM" }}
        defaultCenter={demoCenter.center}
        defaultZoom={demoCenter.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
