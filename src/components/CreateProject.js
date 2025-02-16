import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateProject.css';

function CreateProject() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [projectManager, setProjectManager] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [resources, setResources] = useState('');
  const [stakeholders, setStakeholders] = useState('');
  const [goals, setGoals] = useState('');
  const [risks, setRisks] = useState('');
  const [milestones, setMilestones] = useState('');
  const [reportingFrequency, setReportingFrequency] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('');
  const [address, setAddress] = useState(''); // New state for address

  const handleCreateProject = async () => {
    const projectData = {
      projectName,
      description,
      department,
      projectManager,
      startDate,
      endDate,
      budget,
      resources,
      stakeholders,
      goals,
      risks,
      milestones,
      reportingFrequency,
      approvalStatus,
      address // Include address in the project data
    };

    // Make a POST request to save the project in the backend
    try {
      const response = await fetch('http://localhost:4444/api/projects/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        alert(`Project "${projectName}" created successfully!`);
        navigate('/dashboard/department');
        // Reset form or redirect
      } else {
        alert('Error creating project!');
      }
    } catch (error) {
      console.error('Error during project creation:', error);
      alert('An error occurred while creating the project.');
    }
  };

  return (
    <div className="create-project-container">
      <h2>Create Project</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        type="text"
        placeholder="Project Manager"
        value={projectManager}
        onChange={(e) => setProjectManager(e.target.value)}
      />
      <input
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <textarea
        placeholder="Resources Needed"
        value={resources}
        onChange={(e) => setResources(e.target.value)}
      />
      <input
        type="text"
        placeholder="Stakeholders"
        value={stakeholders}
        onChange={(e) => setStakeholders(e.target.value)}
      />
      <textarea
        placeholder="Goals and Objectives"
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
      />
      <textarea
        placeholder="Risks and Mitigation Strategies"
        value={risks}
        onChange={(e) => setRisks(e.target.value)}
      />
      <textarea
        placeholder="Milestones"
        value={milestones}
        onChange={(e) => setMilestones(e.target.value)}
      />
      <input
        type="text"
        placeholder="Reporting Frequency"
        value={reportingFrequency}
        onChange={(e) => setReportingFrequency(e.target.value)}
      />
      <input
        type="text"
        placeholder="Approval Status"
        value={approvalStatus}
        onChange={(e) => setApprovalStatus(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address (Geo-tagged)"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={handleCreateProject} className="btn">Create Project</button>
    </div>
  );
}

export default CreateProject;
