const express = require('express');
const router = express.Router();

const County = require('../../models/County');

router.patch('/search', async (req, res) => {
  const params = {state: req.body.state, county: req.body.county};

  const updatedInterests = {};
  if (req.body.interests && (req.body.interests !== "all")){
    const interests = req.body.interests.split('%20');
    for (i = 0; i < interests.length; i++) {
      updatedInterests[interests[i]] = 1
    }
  }else if(req.body.interests === "all"){
    updatedInterests['education'] = 1
    updatedInterests['justice'] = 1
    updatedInterests['legislation'] = 1
  }

  const county = await County.findOneAndUpdate(params,
    {
      $inc: updatedInterests
    },
    {new:true},
  ).then((updatedCounty) => res.json(updatedCounty))
});

router.get('/county', (req, res) => {
  County.find({county: req.body.county, state:req.body.state})
    .then(county => res.json(county))
    .catch(err =>
      res.status(404).json({ nocountyfound: `${req.body.county} not found in ${req.body.state}`})
    );
});

module.exports = router;