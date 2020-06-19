const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Politician = require("../../models/Politician");

const router = express.Router();
const secret = process.env.SECRET_OR_KEY;

const getPayload = (user) => {
  return {
    id: user.id,
    email: user.email,
    address: user.address,
    interests: user.interests,
    savedPoliticians: user.savedPoliticians,
    contactPoliticians: user.contactPoliticians,
  };
};

//to subscribe

//req body has userid, politicanid
//if savedpolitician, findbyidandupdate
//if contactpolitician

//might be req.body.politican

router.param("id", async (req, res, next, id) => {
  const pol = await Politician.findById(id);
  if (pol) {
    req.politician = pol;
    next();
  } else {
    res.status(404).json("File not found");
  }
});

router.get(`/:id`, (req, res) => {
  res.status(200).json(req.politician);
});

router.post("/add", (req, res) => {
  Politician.findOneAndUpdate(
    { name: req.body.name, divisionId: req.body.divisionId },
    req.body,
    { new: true, upsert: true }
  )
    .then((result) => res.json(result))
    .catch((err) => res.status(404).json(err));
});

router.patch(
  "/:id/subscribe",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { user, politician } = req;

    if (req.body.save) {
      if (politician.savedUsers.includes(user.id)) {
        politician.savedUsers.splice(politician.savedUsers.indexOf(user.id), 1);
        user.savedPoliticians.splice(
          user.savedPoliticians.indexOf(politician._id),
          1
        );
      } else {
        politician.savedUsers.push(user.id);
        user.savedPoliticians.push(politician._id);
      }
    } else if (req.body.contact) {
      if (politician.contactUsers.includes(user.id)) {
        politician.contactUsers.splice(
          politician.contactUsers.indexOf(user.id),
          1
        );
        user.contactPoliticians.splice(
          user.contactPoliticians.indexOf(politician._id),
          1
        );
      } else {
        politician.contactUsers.push(user.id);
        user.contactPoliticians.push(politician._id);
      }
    }

    try {
      const official = await politician.save();
      const updatedUser = await user.save();

      jwt.sign(
        getPayload(updatedUser),
        secret,
        { expiresIn: 3600 },
        (err, token) => {
          res.json({
            success: true,
            token: `Bearer ${token}`,
            official,
          });
        }
      );
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
