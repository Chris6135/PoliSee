const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  interests: {
    type: Array,
    default: [],
  },
  savedPoliticians: [
    {
      type: Schema.Types.ObjectId,
      ref: "Politician",
    },
  ],
  contact: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
