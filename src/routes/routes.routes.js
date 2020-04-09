const express = require("express");
const router = express.Router();

const Animal = require("../models/animal.js");

// principal route, return all animals
router.get("/", async (req, res) => {
  const animals = await Animal.find();
  res.json(animals);
});

// principal route, return one animal
router.get("/:id", async (req, res) => {
  const animal = await Animal.findById(req.params.id);
  res.json(animal);
});

// manage animals add
router.post("/manageanimals", async (req, res) => {
  const {
    photo,
    verificationStatus,
    name,
    averageWeight,
    averageAge,
    Type,
    summary,
    feeding,
    habitat,
    history,
    sources,
  } = req.body;

  const animal = new Animal({
    photo,
    verificationStatus,
    name,
    averageWeight,
    averageAge,
    Type,
    summary,
    feeding,
    habitat,
    history,
    sources,
  });
  await animal.save(); // save the animal in the database
  res.json({ status: "animal saved" });
});

// manage animals update
router.put("/manageanimals/:id", async (req, res) => {
  const {
    photo,
    verificationStatus,
    name,
    averageWeight,
    averageAge,
    Type,
    summary,
    feeding,
    habitat,
    history,
    sources,
  } = req.body;

  const newAnimal = {
    photo,
    verificationStatus,
    name,
    averageWeight,
    averageAge,
    Type,
    summary,
    feeding,
    habitat,
    history,
    sources,
  };

  await Animal.findByIdAndUpdate(req.params.id, newAnimal);

  res.json({ status: "animal update" });
});

// manage animals remove
router.delete("/manageanimals/:id", async (req, res) => {
  await Animal.findByIdAndRemove(req.params.id);
  res.json({ status: "animal delete" });
});

module.exports = router;
