// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema for job post
var jobAppliedSchema = new Schema({
    jobApplied: {
        type: String
    },
    jobAppliedBy: {
        type: String
    },
    applied_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date
    }
});

// we need to create a model for using schema
var jobApplied = mongoose.model('jobApplied', jobAppliedSchema);

// make this available to our jobs in our Node applications
module.exports = jobApplied;