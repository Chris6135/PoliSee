const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const County = require('../../models/County');

router.patch('/search', (req, res) => {
  const params = {state: req.body.state, county: req.body.county};

  const updatedInterests = {};
  if (req.body.interests){
    for (i = 0; i < req.body.interests.length; i++) {
      updatedInterests[req.body.interests[i]] = 1
    }
  }
  // res.status(200).json(updatedInterests);


  County.findOneAndUpdate(params,
    {
      $inc: updatedInterests
    },
  ).then(res.status(200).json("ok")).catch(res.status(400));
})

module.exports = router;