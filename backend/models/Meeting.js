const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  meetingId: { type: Number, required: true },
  meetingPassword: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  managerName: { type: String, required: true },
  members: [
    {
      email: { type: String, required: true },
      agenda: { type: String, required: true },
      proposal: { type: String, required: true },
    }
  ]
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
