require("dotenv").config();
const nodemailer = require("nodemailer");

const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("transporter working", success);
  }
});

module.exports = transporter;
