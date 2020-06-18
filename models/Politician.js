const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PoliticianSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: Object,
  },
  phone: {
    type: String,
  },
  url: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
  email: {
    type: String,
  },
  socialMedia: [{
    type: Object,
  }],
  party: {
    type: String,
  },
  savedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  contactUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  office: {
    type: String
  },
  divisionId: {
    type: String,
  },
  levels: {
    type: Array,
    default: []
  },
  roles: {
    type: Array,
    default: []
  }
})

module.exports = Politician = mongoose.model('Politican', PoliticianSchema);
