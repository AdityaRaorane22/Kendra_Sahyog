import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapPage.css'; // Add your CSS for styling
import L from 'leaflet';

// Fixing marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom marker icons for ongoing and future projects
const ongoingMarker = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'), // Default marker icon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const futureMarker = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'), // Use a different icon or color
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapPage = () => {
  const mapStyles = {
    height: "500px",
    width: "100%"
  };

  // Define the locations you want to pin
  const locations = [
    { id: 1, name: "Aarey Colony, Mumbai", position: [19.1171, 72.8508], description: "Ongoing road construction for improved access.", progress: "50% completed", type: "ongoing" },
    { id: 2, name: "Thane Creek, Mumbai", position: [19.1940, 72.9519], description: "Gas pipeline installation project ongoing.", progress: "70% completed", type: "ongoing" },
    { id: 3, name: "Kalyan-Dombivli, Mumbai", position: [19.2186, 73.1528], description: "New gas pipeline being laid down.", progress: "30% completed", type: "ongoing" },
    { id: 4, name: "Lonavala, Pune", position: [18.7501, 73.4082], description: "Road improvements and gas pipeline construction.", progress: "Pending approval", type: "future" },
    { id: 5, name: "Pimpri-Chinchwad, Pune", position: [18.6285, 73.7986], description: "Ongoing development of gas pipelines.", progress: "20% completed", type: "ongoing" },
    { id: 6, name: "Worli Sea Face, Mumbai", position: [18.9900, 72.8168], description: "Coastal road project underway.", progress: "Expected completion by 2025", type: "future" },
    { id: 7, name: "Powai Lake, Mumbai", position: [19.1204, 72.9052], description: "Water pipeline installation causing disruptions.", progress: "Pending completion", type: "future" },
    { id: 8, name: "Bandra-Kurla Complex, Mumbai", position: [19.0709, 72.8688], description: "Expansion of financial district underway.", progress: "40% completed", type: "ongoing" },
    { id: 9, name: "Dadar West, Mumbai", position: [19.0194, 72.8422], description: "Road widening project in coordination with utilities.", progress: "60% completed", type: "ongoing" },
    { id: 10, name: "Juhu Beach, Mumbai", position: [19.0968, 72.8260], description: "Public park expansion and drainage improvements.", progress: "Pending", type: "future" },
    { id: 11, name: "Marine Drive, Mumbai", position: [18.9430, 72.8236], description: "Beautification project alongside streetlight installation.", progress: "50% completed", type: "ongoing" }
  ];

  return (
    <div className="map-page-container">
      <h2>Infrastructure Projects in Mumbai Division</h2>
<p>
  Welcome to the Mumbai Infrastructure Projects Map. Here, you can explore a variety of ongoing and future projects that are transforming the city's landscape. Click on the markers to view detailed descriptions, current progress, and expected completion timelines for each initiative. Stay informed about the developments that are enhancing connectivity, utilities, and public services throughout Mumbai.
</p>

      <MapContainer center={[19.0760, 72.8777]} zoom={10} style={mapStyles}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {locations.map(location => (
          <Marker 
            key={location.id} 
            position={location.position} 
            icon={location.type === "ongoing" ? ongoingMarker : futureMarker}
          >
            <Popup>
              <h4>{location.name}</h4>
              <p>{location.description}</p>
              <p><strong>Progress:</strong> {location.progress}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
