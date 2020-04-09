const express = require("express");
const router = express.Router();

const Animal = require("../models/animal.js");

router.get("/", async (req, res) => {
  const animals = await Animal.find();
  res.json(animals);
});

router.post("/addAminal", async (req, res)=>{
  console.log(req.body)
});

module.exports = router;
