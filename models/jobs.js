// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema for job post
var jobPostSchema = new Schema({
    jobPostedBy: {
        type: String
    },
    jobTitle: {
        type: String
    },
    jobId: {
        type: String
    },
    reqExp: {
        type: String
    },
    location: {
        type: String
    },
    offerSalary: {
        type: String
    },
    keySkills: {
        type: Array
    },
    desiredProf: {
        type: String
    },
    jobDesc: {
        type: String
    },
    companyProf: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date
    }
});

// we need to create a model for using schema
var Job = mongoose.model('jobs', jobPostSchema);

// make this available to our jobs in our Node applications
module.exports = Job;