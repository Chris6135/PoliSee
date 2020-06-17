const mongoose = require('mongoose');
const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');

const users = require("./routes/api/users");
const counties = require("./routes/api/counties");


const db = process.env.MONGO_URI;

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

app.use(passport.initialize());
require('./config/passport')(passport);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));



