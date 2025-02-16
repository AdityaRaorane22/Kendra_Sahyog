import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AIRecommendations.css';

function AIRecommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const response = await axios.get('http://localhost:4444/api/schedule-recommendations');
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="ai-recommendations-container">
      <h2>AI Scheduling Recommendations</h2>
      <ul>
        {recommendations.length === 0 ? (
          <p>No conflicts or collaboration opportunities found.</p>
        ) : (
          recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AIRecommendations;
