require('dotenv').config()
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const saltRounds = 7;

let secretKey = process.env.SECRETKEY
console.log(secretKey);
const createToken = (id) => {
  return jwt.sign({id},secretKey, { expiresIn:3600*24})
}
router.get("/", async function (req, res, next) {
  try {
    res.status(200).json({ succes: true});
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { name, email, password } = req.body;
    let user = new User({
      name,
      email,
      password: await bcrypt.hash(password, saltRounds),
    });
    await user.save();
    let token = createToken(user._id)
    res.status(200).json({ succes: true, user, token });
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});

router.post("/login", async function (req, res, next) {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name:name })
  if (user && (await bcrypt.compare(password, user.password))) {
    let token = createToken(user._id)
    res.status(200).json({ succes: true, user, token });
  } else {
    res.status(404).json({ succes: false });
  }
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});

module.exports = router;
