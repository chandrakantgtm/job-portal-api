// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';

//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes = require('./routes/routes')
app.use('/api', routes);

// Use environment defined port or 8000
var port = process.env.PORT || 8000;

// Start the server
// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/job_portal')
.then((db) => {
    app.listen(port);
    console.log('Server starts on port ' + port);
})
.catch(err => {
    console.log(err);
})
