const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS package
const User = require('./models/User'); // Import the User model
const Project = require('./models/Project'); 
const Resource = require('./models/Resource'); 
const Meeting = require('./models/Meeting');
const Employee = require('./models/Employee');


const app = express();
const PORT = process.env.PORT || 4444;

// Middleware
app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://2022adityaraorane:2022adityaraorane@cluster0.ilsic.mongodb.net/kendra_sahyog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB is connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// POST: Create a new employee profile
app.post('/api/employees', async (req, res) => {
  const {
    firstName, middleName, lastName, dob, mobile,
    employeeId, department, city, organisation, email, password,
  } = req.body;

  try {
    const newEmployee = new Employee({
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
    });

    await newEmployee.save();
    res.status(201).json({ message: 'Employee profile created successfully', employee: newEmployee });
  } catch (error) {
    console.error('Error creating employee profile:', error);
    res.status(500).json({ message: 'Error creating employee profile', error });
  }
});



// User Registration Endpoint
app.post('/api/users/register', async (req, res) => {
  const { email, password, name, dob, address, state, city, aadhaar, mobile } = req.body;
  
  const newUser = new User({
    email,
    password,
    name,
    dob,
    address,
    state,
    city,
    aadhaar,
    mobile
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

app.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password }); // Basic authentication; in production, hash passwords
      if (user) {
        res.status(200).json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error during login', error });
    }
  });

  app.post('/api/projects/create', async (req, res) => {
    const {
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
      address
    } = req.body;
  
    const newProject = new Project({
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
      address
    });
  
    try {
      await newProject.save();
      res.status(201).json({ message: 'Project created successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating project', error });
    }
  });

// Get all projects
app.get('/api/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching projects', error });
    }
  });
  
  // Update project
  app.put('/api/projects/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    try {
      const updatedProject = await Project.findByIdAndUpdate(id, updatedData, { new: true });
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json({ message: 'Error updating project', error });
    }
  });

  // Resource Request Endpoint
app.post('/api/resources', async (req, res) => {
    const resourceData = req.body;
  
    const newResource = new Resource(resourceData);
  
    try {
      await newResource.save();
      res.status(201).json({ message: 'Resource request created successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating resource request', error });
    }
  });
  
  // Get all resources
  app.get('/api/resources', async (req, res) => {
    try {
      const resources = await Resource.find();
      res.status(200).json(resources);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching resources', error });
    }
  });
  
  const fulfilledResources = []; // Array to store fulfilled resources temporarily

  // Fulfill resource request (delete it)
  app.delete('/api/resources/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const resource = await Resource.findByIdAndDelete(id);
      if (resource) {
        fulfilledResources.push({ ...resource._doc, fulfilledDate: new Date() }); // Store fulfilled resource
        res.status(200).json({ message: 'Resource request fulfilled successfully!' });
      } else {
        res.status(404).json({ message: 'Resource not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fulfilling resource request', error });
    }
  });
  
  // Get fulfilled resources
  app.get('/api/resources/fulfilled', (req, res) => {
    res.status(200).json(fulfilledResources);
  });

// Schedule a meeting
app.post('/api/meetings', async (req, res) => {
  const newMeeting = new Meeting(req.body);
  try {
    await newMeeting.save();
    res.status(201).json({ message: 'Meeting scheduled successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error scheduling meeting', error });
  }
});

// Get all meetings (if needed in future)
app.get('/api/meetings', async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.status(200).json(meetings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching meetings', error });
  }
});

// Get all scheduled meetings
app.get('/api/meetings', async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.status(200).json(meetings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching meetings', error });
  }
});

// AI Scheduling Logic: Detect conflicts or collaboration opportunities
const detectConflicts = (projects) => {
  const recommendations = [];

  for (let i = 0; i < projects.length; i++) {
    for (let j = i + 1; j < projects.length; j++) {
      const project1 = projects[i];
      const project2 = projects[j];

      const project1End = new Date(project1.endDate);
      const project2Start = new Date(project2.startDate);

      // Check if timelines overlap or are close
      if (project1End > project2Start) {
        const collaborationMessage = `Project "${project1.projectName}" by "${project1.department}" and "${project2.projectName}" by "${project2.department}" have overlapping or close timelines. Potential conflict: ${project2.projectName} might affect ${project1.projectName}. Consider collaboration.`;
        recommendations.push(collaborationMessage);
      }

      // Example for specific road and pipeline projects
      if (project1.goals.includes('road') && project2.goals.includes('pipeline')) {
        const roadPipelineMessage = `Project "${project1.projectName}" (road) may be affected by "${project2.projectName}" (pipeline) in the near future. Please collaborate.`;
        recommendations.push(roadPipelineMessage);
      }
    }
  }

  return recommendations;
};

// Endpoint to get scheduling recommendations
app.get('/api/schedule-recommendations', async (req, res) => {
  try {
    const projects = await Project.find();
    const recommendations = detectConflicts(projects);
    res.status(200).json(recommendations);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error generating recommendations', error });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
