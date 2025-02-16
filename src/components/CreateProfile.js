import React, { useState } from 'react';
import axios from 'axios';
import './CreateProfile.css';

function CreateProfile() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [employeeId] = useState(Math.floor(Math.random() * 100000)); // Random employee ID

  // States to hold generated email and password
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleCreateProfile = async () => {
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}.${department.toLowerCase()}.${city.toLowerCase()}@${organisation.toLowerCase()}.gov.in`;
    const password = dob.split('-').reverse().join('').slice(2); // Format yymmdd

    const newProfile = {
      firstName,
      middleName,
      lastName,
      dob,
      mobile,
      employeeId,
      department,
      city,
      organisation,
      email,
      password,
    };

    // Set generated email and password in state
    setGeneratedEmail(email);
    setGeneratedPassword(password);

    try {
      // Send profile data to the backend
      const response = await axios.post('http://localhost:4444/api/employees', newProfile);
      console.log('Profile created successfully:', response.data);
      alert('Profile Created Successfully!');
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Error creating profile. Please try again.');
    }
  };

  return (
    <div className="create-profile-container">
      <h2>Create Profile</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Middle Name"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Organisation Name"
        value={organisation}
        onChange={(e) => setOrganisation(e.target.value)}
      />

      <button onClick={handleCreateProfile} className="btn">Create Profile</button>

      {/* Display the generated email, password, and employee ID */}
      {generatedEmail && (
        <div className="profile-summary">
          <h3>Profile Summary:</h3>
          <p><strong>Employee ID:</strong> {employeeId}</p>
          <p><strong>Email ID:</strong> {generatedEmail}</p>
          <p><strong>Password:</strong> {generatedPassword}</p>
        </div>
      )}
    </div>
  );
}

export default CreateProfile;
