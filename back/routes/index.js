const express = require("express");
const router = express.Router();
const Note = require("../models/note");


router.get("/", async function (req, res, next) {
  try {
    const restorans = await Restoran.find();
    res.status(200).json({ succes: true, restorans });
  } catch (error) {
    res.status(404).json({ succes: false, msg: err.message });
  }
});

router.post("/", async function (req, res, next) {

});


module.exports = router;

