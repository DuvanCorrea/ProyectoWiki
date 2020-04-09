const mongooose = require("mongoose");
const { Schema } = mongooose;

const schemaAnimal = new Schema({
  photo: { type: String, required: true },
  verificationStatus: { type: Boolean, required: true },
  name: { type: String, required: true },
  averageWeight: { type: Number, required: true },
  averageAge: { type: Number, required: true },
  Type: { type: String, required: true },
  summary: { type: String, required: true },
  feeding: { type: String, required: true },
  habitat: { type: String, required: true },
  history: { type: String, required: true },
  sources: { type: String, required: true },
});

module.exports = mongooose.model("Animal", schemaAnimal);
