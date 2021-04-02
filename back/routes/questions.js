require('dotenv').config()
const express = require("express");
const router = express.Router();
const Question = require("../models/question");

router.get("/", async function (req, res, next) {
  try {
    let question = await Question.find()
    res.status(200).json({ succes: true, question });
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    let { id } = req.params
    let question = await Question.findOne({_id:id})
    res.status(200).json({ succes: true, question });
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });
  }
});

router.post("/", async function (req, res, next) {
  try {
    console.log(req.body);
    let {id, answer } = req.body

    let que = await Question.findOne({_id:id})
    if (que.answer === answer) {
      res.status(200).json({ succes: true });
    } else {
      res.status(404).json({ succes: false });
    }
  } catch (error) {
    res.status(404).json({ succes: false });
  }
});


module.exports = router;
