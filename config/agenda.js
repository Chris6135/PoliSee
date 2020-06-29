require("dotenv").config();
const Agenda = require("agenda");

const mongo = process.env.MONGO_URI;

const dbConnect = {
  db: {
    address: mongo,
    collection: "jobs",
    options: {
      useNewUrlParser: true,
    },
  },
};
const agenda = new Agenda(dbConnect);

module.exports = agenda;
