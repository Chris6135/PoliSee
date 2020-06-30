const mongoose = require("mongoose");

const { Schema } = mongoose;

const MailerSchema = new Schema(
  {
    list: [
      {
        type: String,
        required: true,
        unique: true,
      },
    ],
  },
  { timestamps: true }
);

const Mailer = mongoose.model("Mailer", MailerSchema);

module.exports = Mailer;
