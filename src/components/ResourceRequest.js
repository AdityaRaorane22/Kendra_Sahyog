import React, { useState } from 'react';
import './ResourceRequest.css';
import axios from 'axios';

function ResourceRequest() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [machineName, setMachineName] = useState('');
  const [period, setPeriod] = useState('');
  const [qualityCheck, setQualityCheck] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [currentDate] = useState(new Date().toISOString().split('T')[0]); // Current date in yyyy-mm-dd format

  const handleRequestSubmit = async () => {
    const resourceData = {
      date,
      time,
      machineName,
      period,
      qualityCheck,
      additionalNotes,
      name,
      designation,
      email,
      currentDate,
    };

    try {
      await axios.post('http://localhost:4444/api/resources', resourceData);
      alert(`Resource request submitted for ${machineName} by ${name}!`);
      // Clear form after submission
      setDate('');
      setTime('');
      setMachineName('');
      setPeriod('');
      setQualityCheck('');
      setAdditionalNotes('');
      setName('');
      setDesignation('');
      setEmail('');
    } catch (error) {
      console.error('Error submitting resource request:', error);
      alert('Error submitting request. Please try again.');
    }
  };

  return (
    <div className="resource-request-container">
      <h2>Resource Request</h2>
      <label htmlFor="currentDate">Current Date:</label>
      <input
        type="date"
        id="currentDate"
        value={currentDate}
        readOnly
      />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <label htmlFor="designation">Designation:</label>
      <input
        type="text"
        id="designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        placeholder="Enter your designation"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <label htmlFor="requestDate">Request Date:</label>
      <input
        type="date"
        id="requestDate"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="requestTime">Request Time:</label>
      <input
        type="time"
        id="requestTime"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <label htmlFor="machineName">Name of Machine Required:</label>
      <input
        type="text"
        id="machineName"
        value={machineName}
        onChange={(e) => setMachineName(e.target.value)}
        placeholder="Enter machine name"
      />
      <label htmlFor="period">Required Period:</label>
      <input
        type="text"
        id="period"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        placeholder="Enter required period"
      />
      <label htmlFor="qualityCheck">Quality Check Required:</label>
      <input
        type="text"
        id="qualityCheck"
        value={qualityCheck}
        onChange={(e) => setQualityCheck(e.target.value)}
        placeholder="Enter quality check requirements"
      />
      <label htmlFor="additionalNotes">Additional Notes:</label>
      <textarea
        id="additionalNotes"
        value={additionalNotes}
        onChange={(e) => setAdditionalNotes(e.target.value)}
        placeholder="Enter any additional notes"
      ></textarea>
      <button onClick={handleRequestSubmit} className="btn">Submit Request</button>
    </div>
  );
}

export default ResourceRequest;
