const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  department: { type: String, required: true },
  projectManager: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, required: true },
  resources: { type: String, required: true },
  stakeholders: { type: String, required: true },
  goals: { type: String, required: true },
  risks: { type: String, required: true },
  milestones: { type: String, required: true },
  reportingFrequency: { type: String, required: true },
  approvalStatus: { type: String, required: true },
  address: { type: String, required: true }, // Geo-tagged address
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
