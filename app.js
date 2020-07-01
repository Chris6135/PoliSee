const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const Agendash = require("agendash");

const agenda = require("./config/agenda");
const users = require("./routes/api/users");
const counties = require("./routes/api/counties");
const politicians = require("./routes/api/politicians");

const app = express();
const db = process.env.MONGO_URI;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);

agenda.start().then(() => agenda.every("7 days", "group mailer"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/dash", Agendash(agenda));
app.use("/api/users", users);
app.use("/api/counties", counties);
app.use("/api/politicians", politicians);

app.use(passport.initialize());
require("./config/passport")(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
