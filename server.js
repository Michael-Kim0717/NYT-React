// Dependencies
const 
    bodyParser = require('body-parser'),
    dotenv = require('dotenv'),
    express = require('express'),
	mongoose = require('mongoose')
	path = require('path'),
	
	// Hook Mongoose models to the Article variable.
	Article = require('./models/Article');

// -------------------- MongoDB Configuration --------------------

// If deployed, use the deployed database. Otherwise use the local NYTReact database
const MONGODB_URI =  process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Set mongoose to leverage built-in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// -------------------- Express Configuration --------------------

// Default PORT to be used
const PORT = 8080;

// Initialize Express
const app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use express.static to serve the public folder as a static directory
app.use(express.static('public'));

// -------------------- POST and GET calls --------------------
app.get("/api/articles", function(request, response){
	Article.find({})
      .then( result => response.json(result) )
      .catch( err => console.log(err) );
});

app.post("/api/articles", function(request, response){
	Article.create(request.body, function(error, result){
		if (error) {
			console.log(error);
		}
		else {
			console.log(result);
		}
	});
});

app.delete("/api/article/:id", (req, res) => {
	Article.deleteOne( {_id: req.params.id})
		.then( result => res.json(result) )
		.catch( err => console.log(err) )
})

// -------------------- Start the Server! --------------------

// Start the server
app.listen(PORT, function() {
  	console.log("Running on " + PORT);
});