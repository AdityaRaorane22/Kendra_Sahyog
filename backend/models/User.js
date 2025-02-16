const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  aadhaar: { type: String, required: true },
  mobile: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
