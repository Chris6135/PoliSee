
const nodemailer = require("nodemailer")
require('dotenv').config();



const transport = {
    host: "smtp.gmail.com",
    auth: {
      user:  process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    }
  };
  
  const transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, sucess) =>{
    if (error){
      console.log(error);
    }else{
      console.log('transporter working')
    }
  });
  
  
  module.exports = transporter;
