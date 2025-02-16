import React from 'react';
import './UserDashboard.css';

function UserDashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>
      <div className="dashboard-container">
      {/* Navbar */}
      
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="/public-dashboard">Public Dashboard</a></li>
          <li><a href="/notice-board">Notice Board</a></li>
          <li><a href="/crisis-management">Crisis Management</a></li>
        </ul>
      </nav>
     <div>
     <p className="dashboard-description">
        The ongoing infrastructure projects in Mumbai are crucial for the development of the city and significantly enhance the quality of life for its residents. These projects aim to improve transportation networks, upgrade public utilities, and enhance environmental sustainability. By investing in roads, bridges, and public transit systems, the government aims to ease traffic congestion, reduce travel times, and promote efficient movement of goods and people.
      </p>
      <p className="dashboard-description">
        Moreover, the projects incorporate eco-friendly practices and technologies, ensuring that urban growth does not come at the expense of the environment. Enhanced infrastructure promotes economic growth, attracting businesses and creating job opportunities for the local population. Through effective communication and transparency in project execution, the government fosters trust and cooperation with the public, reassuring citizens that their needs and concerns are prioritized.
      </p>
      <p className="dashboard-description">
        The direct involvement of community feedback during project planning stages allows citizens to feel valued and included in the decision-making process. This collaborative approach helps bridge the gap between the government and the public, leading to a stronger community bond and mutual respect. Ultimately, these infrastructure initiatives are not merely projects but are foundational to creating a modern, efficient, and inclusive urban environment where all citizens can thrive.
      </p>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Kendra Sahyog. All Rights Reserved.</p>
      </footer>
     </div>
    </div>
    </div>
  );
}

export default UserDashboard;
