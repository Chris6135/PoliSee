const express = require("express");

const router = express.Router();
const ScheduledMail = require("../../models/ScheduledMail");


router.get(`/:id`, (req, res) => {
  Politician.findById(req.params.id)
    .then((politician) => res.json(politician))
    .catch((err) => res.status(404).end());
});


//I want to add the info to put in a new 

router.post("/add", (req, res) => {
  ScheduleMail.insert(
    { email: req.body.email, body: req.body.body, time: req.body.time },
  )
    .then((result) => res.json(result))
    .catch((err) => res.status(404).end());
});
