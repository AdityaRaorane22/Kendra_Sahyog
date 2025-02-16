import React, { useState } from 'react';
import './Signup.css';

// List of Indian states and their respective cities
const statesAndCities = {
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  Karnataka: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubli'],
  Delhi: ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi'],
  // Add more states and cities here
};

function Signup() {
  // User data states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [mobile, setMobile] = useState('');

  // Function to handle form submission
  const handleSignup = async () => {
    if (password === confirmPassword) {
      const userData = {
        email,
        password,
        name,
        dob,
        address,
        state,
        city,
        aadhaar,
        mobile,
      };

      try {
        const response = await fetch('http://localhost:4444/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          alert('Sign Up Successful!');
          // Redirect to login page
          window.location.href = '/login'; // Adjust the path as needed
        } else {
          alert('Sign Up Failed! Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('Passwords do not match!');
    }
  };

  // Handle state change and reset city when state changes
  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity(''); // Reset city when state is changed
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {/* Dropdown for State */}
      <select value={state} onChange={handleStateChange}>
        <option value="" disabled>Select State</option>
        {Object.keys(statesAndCities).map((stateName) => (
          <option key={stateName} value={stateName}>
            {stateName}
          </option>
        ))}
      </select>

      {/* Dropdown for City */}
      {state && (
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="" disabled>Select City</option>
          {statesAndCities[state].map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      )}
      <input
        type="text"
        placeholder="Aadhaar Card Number"
        value={aadhaar}
        onChange={(e) => setAadhaar(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={handleSignup} className="btn">Sign Up</button>
    </div>
  );
}

export default Signup;