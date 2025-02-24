import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define the red marker icon
const redIcon = new L.Icon({
  iconUrl: "/images/marker.webp",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [52, 58], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // Size of the shadow
});

type Props = {
  position: [number, number];
  popupText?: string;
  height?: string;
};

const ResponsiveMap: React.FC<Props> = ({
  position,
  popupText = "A pretty CSS3 popup. Easily customizable.",
  height = "400px",
}) => {
  return (
      <div style={{ width: "100%", height, padding:'18px' }}>
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
        //   attribution=' <a href="/">Bullut Maitha</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={redIcon}>
          <Popup>{popupText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ResponsiveMap;
