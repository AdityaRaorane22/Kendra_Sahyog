import React from 'react';
import './Dashboard.css';

function DepartmentDashboard() {
  return (
    <div className="department-dashboard-container">
      {/* Navbar */}
      

      {/* Body Content */}
      <div className="dashboard-body">
        <h2>Department Dashboard</h2>
        <nav className="dashboard-navbar">
        <ul className="navbar-links">
          <div className="navbar-column1">
            <li><a href="/create-profile">Create Profile</a></li>
            <li><a href="/create-project">Create Project</a></li>
            <li><a href="/view-projects">View Projects</a></li>
            <li><a href="/schedule-meetings">Schedule Meetings</a></li>
            <li><a href="/discussion-forum">Discussion Forum</a></li>
            <li><a href="/resource-request">Resource Request</a></li>
          </div>
          <div className="navbar-column2">
            <li><a href="/resources">View Resources</a></li>
            <li><a href="/resource-tracker">Resources Tracker</a></li>
            <li><a href="/scheduled-meetings">Scheduled Meetings</a></li>
            <li><a href="/ai-recommendations">AI Scheduler</a></li>
            <li><a href="/analytics">Analytics</a></li>
            <li><a href="/map">Map</a></li>
          </div>
        </ul>
      </nav>
        <p className="dashboard-description">
          Welcome to the Department Dashboard! Here you can manage various aspects of your department's projects and resources effectively. Utilize the links in the navbar to navigate through the different functionalities available, such as creating profiles, managing projects, scheduling meetings, and tracking resources.
        </p>
        <p className="dashboard-description">
          This dashboard is designed to streamline communication and enhance collaboration among departments. By providing easy access to vital information and tools, we aim to foster a more efficient workflow and improve overall productivity within the organization.
        </p>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>&copy; 2024 Kendra Sahyog. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default DepartmentDashboard;
