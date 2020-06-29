const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduledMailSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true,
    index: true,
  },
});

module.exports = County = mongoose.model('County', CountySchema);
