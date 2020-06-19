const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();
const secret = process.env.SECRET_OR_KEY;

const getPayload = (user) => {
  return {
    id: user.id, 
    email: user.email, 
    address: user.address, 
    interests: user.interests, 
    savedPoliticians: user.savedPoliticians,
    contactPoliticians: user.contactPoliticians
  }
}



const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post('/register', (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({ email: "A user has already registered with this address" })
      } else {
        // Otherwise create a new user
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
          address: req.body.address,
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                console.log(getPayload(user));
                jwt.sign(
                  getPayload(user),
                  secret,
                  { expiresIn: 3600 },
                  (err, token) => {
                    res.status(201).json({
                      success: true,
                      token: 'Bearer ' + token
                    });
                  });
                })
              .catch(err => console.log(err));
          })
        })
      }
    })

})

router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {

            jwt.sign(
              getPayload(user),
              secret,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        })
    })
})

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
    address: req.user.address,
    interests: req.user.interests,
    savedPoliticians: req.user.savedPoliticians,
    contactPoliticians: req.user.contactPoliticians
  });
})

router.patch('/edit', (req, res) => {
  if(req.body.email){
    User.findByIdAndUpdate(
      req.body.id,
      {
        $set: {email: req.body.email, address: req.body.address}
      },
      { new: true }).then((result) => {
        jwt.sign(
          getPayload(result),
          secret,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          });
        })
        .catch((err) => res.status(404).end())
  } 
  else if(req.body.interests){
    const interests = req.body.interests.split('%20');
    User.findByIdAndUpdate(
      req.body.id,
      {
        interests: interests
      },
      { new: true }).then((result) => {
        jwt.sign(
          getPayload(result),
          secret,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          });
      })
        .catch((err) => res.status(404).end())
  }
  // else if(req.body.contactPoliticians){
  //   const contactPoliticians = req.body.contactPoliticians.split('%20');
  //   const savedPoliticians = req.body.savedPoliticians.split('%20');
  //   User.findByIdAndUpdate(
  //     req.body.id,
  //     {
  //       savedPoliticians: savedPoliticians,
  //       contactPoliticians: contactPoliticians
  //     },
  //     { new: true }).then((result) => {
  //       jwt.sign(
  //         getPayload(result),
  //         secret,
  //         { expiresIn: 3600 },
  //         (err, token) => {
  //           res.json({
  //             success: true,
  //             token: 'Bearer ' + token
  //           });
  //         });
  //     })
  //     .catch((err) => res.status(404).end())
  // }

})

router.patch('/subscribe', async (req, res) => {
  const curUser = await User.findById(req.body.userId)
  if (curUser) {
    const { savedPoliticians, contactPoliticians } = curUser;

    if (req.body.save) {
      if (savedPoliticians.includes(req.body.politicianId)) {
        savedPoliticians.splice(savedPoliticians.indexOf(req.body.politicianId), 1);
      } else {
        savedPoliticians.push(req.body.politicianId)
      }
    }
    else if (req.body.contact) {
      if (contactPoliticians.includes(req.body.politicianId)) {
        contactPoliticians.splice(contactPoliticians.indexOf(req.body.politicianId), 1);
      } else {
        contactPoliticians.push(req.body.politicianId)
      }
    }
  }

  User.updateOne({ _id: req.body.userId }, { savedPoliticians, contactPoliticians })
    .then((updatedUser) => {
      jwt.sign(
        getPayload(updatedUser),
        secret,
        { expiresIn: 3600 },
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        });
    })
    .catch(err => res.status(404).end())

})

router.patch('/search', async (req, res) => {
  const params = { state: req.body.state, county: req.body.county };

  const updatedInterests = {};
  if (req.body.interests && (req.body.interests !== "all")) {
    const interests = req.body.interests.split('%20');
    for (i = 0; i < interests.length; i++) {
      updatedInterests[interests[i]] = 1
    }
  } else if (req.body.interests === "all") {
    updatedInterests['education'] = 1
    updatedInterests['justice'] = 1
    updatedInterests['legislation'] = 1
  }

});

module.exports = router;
