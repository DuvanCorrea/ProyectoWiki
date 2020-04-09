const mongoose = require("mongoose");

const URI = "mongodb://localhost/wikianimal";

mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(`error connecting to DB: ${err}`));

module.exports = mongoose;
