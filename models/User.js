const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
  },
  county: {
    type: String,
  },
  state: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  interests: [{
    type: String,
  }],
})

module.exports = User = mongoose.model('User', UserSchema);
