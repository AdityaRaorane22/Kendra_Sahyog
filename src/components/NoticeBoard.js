import React, { useState } from 'react';
import './NoticeBoard.css';

const notices = {
  Mumbai: [
    "Water pipeline maintenance from March 1st to March 5th.",
    "Road construction near Marine Drive starting next week.",
    "Gas supply interruption expected on March 10th.",
    "New traffic regulations to be implemented from March 15th."
  ],
  Pune: [
    "New waste management policies effective from March 1st.",
    "Infrastructure upgrades on Kalyani Nagar road starting March 5th.",
    "Public park renovations expected to finish by March 15th.",
    "Flood prevention measures being installed across the city."
  ],
  Nagpur: [
    "New water supply system installations starting March 1st.",
    "Road widening project on Wardha Road expected to finish by March 20th.",
    "Public transport expansions planned for March.",
    "Street lighting enhancements across the city."
  ],
  Nashik: [
    "Gas pipeline construction near Nashik Road from March 5th.",
    "Upcoming infrastructure projects to be discussed in public meeting on March 10th.",
    "Water supply disruptions expected in the western regions.",
    "New road safety measures being implemented citywide."
  ]
};

function NoticeBoard() {
  const [selectedCity, setSelectedCity] = useState('Mumbai');

  return (
    <div className="notice-board-container">
      <h2>Notice Board</h2>
      <p>Select a city to view ongoing notices:</p>
      <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
        <option value="Nagpur">Nagpur</option>
        <option value="Nashik">Nashik</option>
      </select>

      <ul className="notices-list">
        {notices[selectedCity].map((notice, index) => (
          <li key={index} className="notice-item">{notice}</li>
        ))}
      </ul>
    </div>
  );
}

export default NoticeBoard;
