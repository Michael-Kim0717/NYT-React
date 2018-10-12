// Dependencies
const 
    bodyParser = require('body-parser'),
    dotenv = require('dotenv'),
    express = require('express'),
    mongoose = require('mongoose');
    
// -------------------- MongoDB Configuration --------------------

// If deployed, use the deployed database. Otherwise use the local NYTReact database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Set mongoose to leverage built-in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Hook Mongoose models to the db variable.
const db = require("./models");

// -------------------- Express Configuration --------------------

// Default PORT to be used
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// -------------------- Start the Server! --------------------

// Start the server
app.listen(PORT, function() {
  console.log("Running on " + PORT);
});