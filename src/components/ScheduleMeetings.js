import React, { useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar'; // Import Calendar component
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import './ScheduleMeetings.css';

function ScheduleMeetings() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [managerName, setManagerName] = useState('');
  const [noOfMembers, setNoOfMembers] = useState(1);
  const [meetingDetails, setMeetingDetails] = useState([]);
  const [meetingId, setMeetingId] = useState('');
  const [meetingPassword, setMeetingPassword] = useState('');

  const handleSchedule = () => {
    const randomId = Math.floor(Math.random() * 100000); // Random Meeting ID
    const randomPassword = Math.random().toString(36).slice(-8); // Random Password

    const newMeetingDetails = {
      meetingId: randomId,
      meetingPassword: randomPassword,
      date,
      time,
      managerName,
      members: meetingDetails,
    };

    // Send meeting details to the backend
    axios.post('http://localhost:4444/api/meetings', newMeetingDetails)
      .then((response) => {
        alert(`Meeting scheduled on ${date.toLocaleDateString()} at ${time}!`);
        setMeetingId(randomId);
        setMeetingPassword(randomPassword);
        setMeetingDetails([]);
      })
      .catch((error) => {
        console.error('Error scheduling meeting:', error);
        alert('Error scheduling meeting. Please try again.');
      });
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...meetingDetails];
    if (!updatedMembers[index]) {
      updatedMembers[index] = {};
    }
    updatedMembers[index][field] = value;
    setMeetingDetails(updatedMembers);
  };

  return (
    <div className="schedule-meetings-container">
      <h2>Schedule Meetings</h2>
      
      <label>Manager Name:</label>
      <input
        type="text"
        value={managerName}
        onChange={(e) => setManagerName(e.target.value)}
        placeholder="Enter manager name"
      />

      <label>No. of Members:</label>
      <input
        type="number"
        min="1"
        value={noOfMembers}
        onChange={(e) => setNoOfMembers(e.target.value)}
      />
      
      {Array.from({ length: noOfMembers }, (_, index) => (
        <div key={index} className="member-inputs">
          <label>Email ID of Member {index + 1}:</label>
          <input
            type="email"
            onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
            placeholder={`Member ${index + 1} email`}
          />
          <label>Agenda:</label>
          <input
            type="text"
            onChange={(e) => handleMemberChange(index, 'agenda', e.target.value)}
            placeholder={`Member ${index + 1} agenda`}
          />
          <label>Proposal Link:</label>
          <input
            type="text"
            onChange={(e) => handleMemberChange(index, 'proposal', e.target.value)}
            placeholder={`Member ${index + 1} proposal link`}
          />
        </div>
      ))}

      <label>Date:</label>
      <Calendar
        onChange={setDate}
        value={date}
      />

      <label>Time:</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={handleSchedule} className="btn">Schedule Meeting</button>

      {meetingId && (
        <div className="meeting-details">
          <h3>Meeting Details:</h3>
          <p><strong>Meeting ID:</strong> {meetingId}</p>
          <p><strong>Meeting Password:</strong> {meetingPassword}</p>
        </div>
      )}
    </div>
  );
}

export default ScheduleMeetings;
