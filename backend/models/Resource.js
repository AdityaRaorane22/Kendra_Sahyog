const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  machineName: { type: String, required: true },
  period: { type: String, required: true },
  qualityCheck: { type: String, required: true },
  additionalNotes: { type: String },
  name: { type: String, required: true },
  designation: { type: String, required: true },
  email: { type: String, required: true },
  currentDate: { type: Date, required: true },
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
