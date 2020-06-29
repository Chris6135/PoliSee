const mongoose = require("mongoose");

const { Schema } = mongoose;

const JobSchema = new Schema({
  _pageId: { type: String }, // ?
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
