// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var userSchema = new Schema({
    userType :   {type: String},
    name:        {type: String},
    emailId:     {type: String},
    phoneNumber: {type: Number},
    created_at:  {type: Date, default: Date.now()},
    updated_at:  {type: Date}
});

// we need to create a model for using schema
var User = mongoose.model('user',userSchema);

// make this available to our user(employee/employer) in our Node applications
module.exports = User;
