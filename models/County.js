const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountySchema = new Schema({
  state: {
    type: String,
    required: true
  },
  county: {
    type: String,
    required: true
  },
  education: {
    type: Number,
    required: true,
    default: 0,
  },
  justice: {
    type: Number,
    required: true,
    default: 0,
  },
  legislation:{
    type: Number,
    required: true,
    default: 0
  },
})

module.exports = County = mongoose.model('County', CountySchema);
