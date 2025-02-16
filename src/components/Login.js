import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Check if email and password are provided
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    // Authenticate user by sending a request to the backend
    try {
      const response = await fetch('http://localhost:4444/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        // Redirect based on the email domain
        if (email.endsWith('@gov.in')) {
          navigate('/dashboard/department'); // Redirect to department dashboard
        } else {
          navigate('/dashboard/user'); // Redirect to user dashboard
        }
      } else {
        alert('Invalid email or password!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
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
      <button onClick={handleLogin} className="btn">Login</button>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;
