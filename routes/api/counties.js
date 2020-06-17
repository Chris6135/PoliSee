const express = require('express');
const router = express.Router();

const County = require('../../models/County');

router.patch('/search', async (req, res) => {
  const params = {state: req.body.state, county: req.body.county};

  const updatedInterests = {};
  if (req.body.interests){
    console.log(req.body.interests);
    const interests = req.body.interests.split('%20');
    console.log(interests)
    for (i = 0; i < interests.length; i++) {
      updatedInterests[interests[i]] = 1
    }
  }
  // res.status(200).json(updatedInterests);

  const county = await County.findOneAndUpdate(params,
    {
      $inc: updatedInterests
    },
    {new:true},
    // (err, doc) => {
    //   if(doc){
    //     res.json(doc)
    //   }else{
    //     res.status(404).send()
    //   }
    // }
  )
  // .then((updatedCounty) => res.json(updatedCounty))
    if(county){
      console.log(county)
      res.json(county)
    }else{
      res.status(404).send()
    }})

module.exports = router;