// Import express
const express = require("express");

// import other
const morgan = require("morgan"); // midleware
const path = require("path");
const { mongoose } = require("./database"); // bring the database

//execute express
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//midleware
app.use(morgan("dev"));
app.use(express.json()); // if we receive a data in json format, we can read it, and we can send data in json format

//routes
app.use("/api/animals", require("./routes/routes.routes.js"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//init the server on port xxxx
app.listen(app.get("port"), () => {
  console.log(`Server run in port ${app.get("port")}`);
});
