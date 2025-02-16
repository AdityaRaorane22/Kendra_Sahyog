import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ResourceTracker.css';

function ResourceTracker() {
  const [fulfilledResources, setFulfilledResources] = useState([]);

  useEffect(() => {
    fetchFulfilledResources();
  }, []);

  const fetchFulfilledResources = async () => {
    try {
      const response = await axios.get('http://localhost:4444/api/resources/fulfilled'); // Adjust the endpoint as necessary
      setFulfilledResources(response.data); // Set fulfilled resources from response
    } catch (error) {
      console.error('Error fetching fulfilled resources:', error);
    }
  };

  return (
    <div className="resource-tracker-container">
      <h2>Fulfilled Resource Requests</h2>
      <ul className="fulfilled-resource-list">
        {fulfilledResources.map((resource) => (
          <li key={resource._id} className="fulfilled-resource-item">
            <h3>{resource.machineName}</h3>
            <p>Requested by: {resource.name}</p>
            <p>Date: {resource.date}</p>
            <p>Time: {resource.time}</p>
            <p>Required Period: {resource.period}</p>
            <p>Quality Check: {resource.qualityCheck}</p>
            <p>Fulfilled Date: {resource.fulfilledDate}</p> {/* Assuming you have a fulfilled date field */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceTracker;
