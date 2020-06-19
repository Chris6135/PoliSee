
const nodemailer = require("nodemailer")


const transport = {
    host: "smtp.gmail.com",
    auth: {
      user: "polisee.devteam@gmail.com",
      pass: "Lemonwedge3-20"
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
