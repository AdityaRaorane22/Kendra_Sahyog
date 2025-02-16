import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Resources.css';

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await axios.get('http://localhost:4444/api/resources');
      setResources(response.data); // Set resources from response
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const handleFulfill = async (resourceId) => {
    try {
      await axios.delete(`http://localhost:4444/api/resources/${resourceId}`); // Delete resource
      fetchResources(); // Refresh the list
    } catch (error) {
      console.error('Error fulfilling resource:', error);
    }
  };

  return (
    <div className="resources-container">
      <h2>Resource Requests</h2>
      <ul className="resource-list">
        {resources.map((resource) => (
          <li key={resource._id} className="resource-item">
            <h3>{resource.machineName}</h3>
            <p>Requested by: {resource.name}</p>
            <p>Date: {resource.date}</p>
            <p>Time: {resource.time}</p>
            <p>Required Period: {resource.period}</p>
            <p>Quality Check: {resource.qualityCheck}</p>
            <button onClick={() => handleFulfill(resource._id)} className="btn">Fulfill</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
