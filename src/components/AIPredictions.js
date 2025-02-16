import React, { useState } from 'react';
import axios from 'axios';

function AIPredictions() {
  // State to hold the project data input by the user
  const [projectData, setProjectData] = useState({
    startDate: '',
    endDate: '',
    department: '',
    goal: '',
    location: '',
  });
  
  // State to hold the prediction result
  const [prediction, setPrediction] = useState(null);

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  // Handle form submission to predict conflict
  const handleSubmit = async () => {
    try {
      // Uncomment the following lines to send the project data to the backend for prediction
      /*
      const response = await axios.post('http://localhost:4444/api/predict-conflict', projectData);
      
      // Check if the response indicates a conflict
      if (response.data.conflict) {
        // If there is a conflict, set a detailed message indicating the nature of the conflict
        setPrediction(`Conflict predicted: This project will collide with an existing gas line project.`);
      } else {
        // If no conflict is predicted, set a message indicating no issues
        setPrediction('No conflict predicted. You can proceed with this project.');
      }
      */
      
      // Mock prediction result for demonstration
      setPrediction('Conflict predicted: This project will collide with an existing gas line project due to overlapping timelines.');

    } catch (error) {
      console.error('Error predicting conflict:', error);
      // Set error message in case of failure
      setPrediction('Error occurred while predicting conflict. Please try again.');
    }
  };

  return (
    <div>
      <h2>AI Conflict Prediction</h2>
      <form>
        {/* Input fields for project data */}
        <input type="date" name="startDate" onChange={handleInputChange} placeholder="Start Date" required />
        <input type="date" name="endDate" onChange={handleInputChange} placeholder="End Date" required />
        <input type="text" name="department" onChange={handleInputChange} placeholder="Department" required />
        <input type="text" name="goal" onChange={handleInputChange} placeholder="Goal" required />
        <input type="text" name="location" onChange={handleInputChange} placeholder="Location" required />
        <button type="button" onClick={handleSubmit}>Predict Conflict</button>
      </form>
      {/* Display the prediction result */}
      {prediction && <p>{prediction}</p>}
    </div>
  );
}

export default AIPredictions;
