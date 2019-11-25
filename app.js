// Get the packages we need
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Create Express application
var app = (module.exports = express());

var NODE_ENV = "development";

//Set Variables
app.set("env", process.env.NODE_ENV || "production");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

userRoutes = require("./routes/user");
jobRoutes = require("./routes/job");
jobApplyRoutes = require("./routes/jobApplied");

app.use("/api", userRoutes, jobRoutes, jobApplyRoutes);

// Use environment defined port or 8000
var port = process.env.PORT || 8000;

// Start the server
// Connect to the MongoDB
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect("mongodb://localhost:27017/job_portal")
  .then(db => {
    app.listen(port);
    console.log("Server starts on port " + port);
  })
  .catch(err => {
    console.log(err);
  });

