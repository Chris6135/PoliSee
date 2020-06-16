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
  Education: {
    type: Number,
    required: true,
    default: 0,
  },
  criminalJustice: {
    type: Number,
    required: true,
    default: 0,
  },
  labor:{
    type: Number,
    required: true,
    default: 0
  },
  healthcare:{
    type: Number, 
    required: true,
    default: 0
  },
  environment:{
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = County = mongoose.model('County', CountySchema);
