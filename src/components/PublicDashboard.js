import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './PublicDashboard.css'; // Add your CSS for styling
import L from 'leaflet';

// Fixing marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const PublicDashboard = () => {
  const mapStyles = {
    height: "500px",
    width: "100%"
  };

  // Define the locations you want to pin
  const locations = [
    { id: 1, name: "Aarey Colony, Mumbai", position: [19.1171, 72.8508], description: "Aarey Colony Phase 1 - Ongoing road construction for improved access. Utility ducts being installed for future gas pipeline services." },
    { id: 2, name: "Thane Creek, Mumbai", position: [19.1940, 72.9519], description: "Thane Creek - Gas pipeline installation project ongoing. Collaboration needed with the road maintenance team to avoid future disruptions." },
    { id: 3, name: "Kalyan-Dombivli, Mumbai", position: [19.2186, 73.1528], description: "Kalyan-Dombivli Phase 1 - New gas pipeline being laid down alongside road expansion efforts. Coordination required with local traffic management." },
    { id: 4, name: "Lonavala, Pune", position: [18.7501, 73.4082], description: "Lonavala Phase 1 - Road improvements and gas pipeline construction in progress. Collaboration recommended with utility services to minimize downtime." },
    { id: 5, name: "Pimpri-Chinchwad, Pune", position: [18.6285, 73.7986], description: "Pimpri-Chinchwad Phase 1 - Ongoing development of gas pipelines. Ensuring alignment with road development plans to prevent conflicts." }
  ];

  return (
    <div className="public-dashboard-container">
      <h2>Public Dashboard</h2>
      <p>
        Welcome to the public dashboard. Below you can see the real-time updates on ongoing infrastructure projects such as road construction, pipeline installation, and other development activities in your area. The map below highlights the key project locations, and you can click on the markers to get more detailed information about each project.
      </p>

      <div className="map-container">
        <MapContainer center={[19.0760, 72.8777]} zoom={9} style={mapStyles}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          {locations.map(location => (
            <Marker key={location.id} position={location.position}>
              <Popup>
                <h4>{location.name}</h4>
                <p>{location.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="status-container">
        <h3>Project Status and Updates</h3>
        <ul>
          <li>⚙️ <strong>Aarey Colony Project:</strong> Road construction in progress. Estimated completion by Q3 2024.</li>
          <li>⚙️ <strong>Thane Creek Gas Pipeline:</strong> Pipeline installation ongoing, coordination with road repair teams underway.</li>
          <li>⚙️ <strong>Kalyan-Dombivli Expansion:</strong> Dual projects for road expansion and gas pipeline installations in synchronization.</li>
          <li>⚙️ <strong>Lonavala Development:</strong> Road improvements alongside utility service upgrades. Expected delays due to weather conditions.</li>
          <li>⚙️ <strong>Pimpri-Chinchwad Pipeline:</strong> Gas pipeline installation expected to finish by Q2 2024. Road alignment in progress.</li>
        </ul>
      </div>
    </div>
  );
};

export default PublicDashboard;
