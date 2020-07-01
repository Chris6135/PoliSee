require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../../models/User");
const Mailer = require("../../models/Mailer");
const agenda = require("../../config/agenda");

const router = express.Router();
const secret = process.env.SECRET_OR_KEY;
const mailerId = process.env.MAILER_ID;

const getPayload = (user) => {
  return {
    id: user.id,
    email: user.email,
    address: user.address,
    interests: user.interests,
    savedPoliticians: user.savedPoliticians,
    contact: user.contact,
  };
};

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Throw a 400 error if the email address already exists
      return res
        .status(400)
        .json({ email: "A user has already registered with this address" });
    } else {
      // Otherwise create a new user
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              console.log(getPayload(user));
              jwt.sign(
                getPayload(user),
                secret,
                { expiresIn: 3600 },
                (err, token) => {
                  res.status(201).json({
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "This user does not exist" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        jwt.sign(
          getPayload(user),
          secret,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect password" });
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      address: req.user.address,
      interests: req.user.interests,
      savedPoliticians: req.user.savedPoliticians,
      contactPoliticians: req.user.contactPoliticians,
    });
  }
);

router.put(
  "/contact",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const u = req.user;
    const mailer = await Mailer.findById(mailerId);

    let { _id, contact } = u.toJSON();

    const id = _id.toJSON();

    const { list } = mailer.toJSON();

    if (contact && list.includes(id)) {
      list.splice(list.indexOf(id), 1);
      contact = false;
    } else {
      list.push(id);
      contact = true;
    }

    try {
      await Mailer.findByIdAndUpdate(mailerId, { list });
      const user = await User.findByIdAndUpdate(id, { contact });
      jwt.sign(getPayload(user), secret, { expiresIn: 3600 }, (err, token) => {
        if (token) {
          res.status(201).json({
            success: true,
            token: `Bearer ${token}`,
          });
        } else {
          res.status(500).json(err);
        }
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }
);

router.post(
  "/email",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    User.populate(req.user, { path: "savedPoliticians" })
      .then((user) => agenda.now("solo mailer", user.toJSON()))
      .then(() => res.status(200).json({ email: "success" }))
      .catch((e) => res.status(500).json(e));
  }
);

router.patch("/edit", (req, res) => {
  if (req.body.email) {
    User.findByIdAndUpdate(
      req.body.id,
      {
        $set: { email: req.body.email, address: req.body.address },
      },
      { new: true }
    )
      .then((result) => {
        jwt.sign(
          getPayload(result),
          secret,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      })
      .catch((err) => res.status(404).end());
  } else if (req.body.interests) {
    let interests;
    if (req.body.interests !== "none") {
      interests = req.body.interests.split("%20");
    } else {
      interests = [];
    }
    User.findByIdAndUpdate(
      req.body.id,
      {
        interests: interests,
      },
      { new: true }
    )
      .then((result) => {
        jwt.sign(
          getPayload(result),
          secret,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      })
      .catch((err) => res.status(404).end());
  }
});

router.patch("/search", async (req, res) => {
  const params = { state: req.body.state, county: req.body.county };

  const updatedInterests = {};
  if (req.body.interests !== "" && req.body.interests !== "all") {
    const interests = req.body.interests.split("%20");
    for (i = 0; i < interests.length; i++) {
      updatedInterests[interests[i]] = 1;
    }
  } else if (req.body.interests === "all") {
    updatedInterests["education"] = 1;
    updatedInterests["justice"] = 1;
    updatedInterests["legislation"] = 1;
  } else {
    updatedInterests["education"] = 0;
    updatedInterests["justice"] = 0;
    updatedInterests["legislation"] = 0;
  }
});

router.get(
  "/politicians",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .populate({ path: "savedPoliticians" })
      .select("savedPoliticians -_id")
      .then((savedPoliticians) => {
        res.status(200).json(savedPoliticians);
      });
  }
);

module.exports = router;
