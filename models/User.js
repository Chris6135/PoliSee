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
  address: {
    type: String,
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
  interests: {
    type: Array,
    default: []
  },
  savedPoliticians: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Politican'
    }
  ],
  contactPoliticians: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Politician'
    }
  ],
  outgoingEmails: {
    type: Array,
    default: []
  }
})

module.exports = User = mongoose.model('User', UserSchema);
