// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var userSchema = new Schema({
    userType: {
        type: String
    },
    fName: {
        type: String
    },
    lName: {
        type: String
    },
    emailId: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    companyName: {
        type: String
    },
    companyDesc: {
        type: String
    },
    companyId: {
        type: String
    },
    companyAdd: {
        type: String
    },
    candQualif: {
        type: String
    },
    gender: {
        type: String
    },
    candDob: {
        type: String
    },
    candExp: {
        type: Number
    },
    candSkills: {
        type: Array
    },
    candExpDesc: {
        type: String
    },
    candCompany: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
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
var User = mongoose.model('user', userSchema);

// make this available to our user(employee/employer) in our Node applications
module.exports = User;