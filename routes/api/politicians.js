const express = require("express");
const router = express.Router();
const Politician = require('../../models/Politician');

//to subscribe

//req body has userid, politicanid
//if savedpolitician, findbyidandupdate
//if contactpolitician

//might be req.body.politican

router.post('/add', (req, res) => {
  Politician.findOneAndUpdate({name: req.body.name, divisionId: req.body.divisionId},
    req.body,
    { new: true, 
      upsert: true 
    })
    .then(result => res.json(result))
    .catch((err) => res.status(404).end())
})

router.get(`/:id`, (req, res) => {
  Politician.findById(req.params.id)
    .then(politician => res.json(politician))
    .catch((err) => res.status(404).end())
})

router.patch('/subscribe', async (req, res) => {
  const curPol = await Politician.findById(req.body.politicianId)
  if (curPol) {
    const {savedUsers, contactUsers} = curPol;

    if (req.body.save) {
      if (savedUsers.includes(req.body.userId)) {
        savedUsers.splice(savedUsers.indexOf(req.body.userId), 1);
      } else {
        savedUsers.push(req.body.userId)
      }
    }
    else if (req.body.contact) {
      if (contactUsers.includes(req.body.userId)) {
        contactUsers.splice(contactUsers.indexOf(req.body.userId), 1);
      } else {
        contactUsers.push(req.body.userId)
      }
    }
  }

  Politician.updateOne({_id: req.body.politicianId}, {savedUsers, contactUsers})
    .then((updatedPolitician) => res.json(updatedPolitician))
    .catch(err => res.status(404).end())
  
})

module.exports = router;