const mongoose = require('mongoose');
const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const nodemailer = require("nodemailer") //maybe get rid of this
const mailer = require("./routes/api/mailer")
const users = require("./routes/api/users");
const counties = require("./routes/api/counties");
const politicians = require("./routes/api/politicians");



const db = process.env.MONGO_URI;
const path = require('path')




if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

mongoose
  .set("useFindAndModify", false)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/users", users);
app.use("/api/counties", counties);
app.use("/api/politicians", politicians);
app.use("/api/mailer", mailer)

app.use(passport.initialize());
require('./config/passport')(passport);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


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


exports.transporter = transporter;


