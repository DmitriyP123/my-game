const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 7;

router.get("/", async function (req, res, next) {
  try {
    res.status(200).json({ succes: true});
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { name, email, psw } = req.body;
    let user = new User({
      name,
      email,
      password: await bcrypt.hash(psw, saltRounds),
    });
    await user.save();
    res.status(200).json({ succes: true, user });
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});
router.post("/login", async function (req, res, next) {
  try {
    const { name, psw } = req.body;
    const user = await User.findOne({ name:name })
  if (user && (await bcrypt.compare(psw, user.password))) {
    res.status(200).json({ succes: true, user });
  } else {
    res.status(404).json({ succes: false });
  }
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});

module.exports = router;
