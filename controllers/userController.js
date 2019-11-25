//Import required module
var User = require('../models/user');

// export the postUser method
exports.postUser = function (req, res) {
  // creating the new user
  if (!req.body.emailId || !req.body.password || !req.body.userType) {
    console.log(req.body, 'Please enter mandatory fields.')
    res.json({success: false, message: 'Please enter mandatory fields.'});
  } else {
    // Checking user already exist or not
    User.findOne({ emailId: req.body.emailId }, function (error, resExist) {
      if (error) {
        console.log('In error');
        return res.json(error)
      }

      if(resExist && resExist.emailId) {
        console.log('User already exist.');
        return res.status(400).json({success: false, message: 'User already exist.'});
      }
      var newUser = new User({
        userType:    req.body.userType,
        fName:       req.body.fName,
        lName:       req.body.lName,
        emailId:     req.body.emailId,
        password:    req.body.password,
        phoneNumber: req.body.phoneNumber,
        created_at:  new Date(),
        updated_at:  new Date()
      });
    
      // Attempt to creating new userres
      newUser.save(function (err,userRes) {
        if (err) {
          return res.json(err);
        }
        else {
          console.log('');
          res.status(200).json({success: true, message: 'New user Successfully created.', body:userRes});
        }
      });
    }); 
  }// end of save method
} // end of postUser method

//export the getAllUser method
exports.getAllUser = function (req, res) {
  //find the first user form the collection
  User.find({}, function (error, response) {
    if (error) {
      console.log("In error");
      return res.json(error);
    }
    else {
      console.log("Get all user");
      res.status(200).json({success: true, body:response});
    }
  });
}

//export the getAllUser by userType method
exports.getAllUserType = function (req, res) {
  //find the first user form the collection
  User.find({ userType: req.params.uType }, function (error, response) {
    if (error) {
      console.log("In error");
      return res.json(error)
    }
    else {
      console.log("Get user by type");
      res.status(200).json({success: true, body:response});
    }
  });
}

//export the getUser by id method
exports.getUser = function (req, res) {
  //find the first user form the collection
  User.findOne({ _id: req.params.id }, function (error, response) {
    if (error) {
      console.log("In error");
      return res.json(error)
    }
    else {
      console.log("get user by id");
      res.status(200).json({success: true, body:response});
    }
  });
}

// export the updateUser method
exports.updateUser = function (req, res) {
  User.findOneAndUpdate({ _id: req.params.userId },{ 
    $set: {
      "fName":       req.body.fName, 
      "lName":       req.body.lName, 
      "emailId":     req.body.emailId, 
      "password":    req.body.password, 
      "phoneNumber": req.body.phoneNumber, 
      "gender":      req.body.gender, 
      "companyName": req.body.orgName, 
      "companyDesc": req.body.orgDesc, 
      "companyId":   req.body.companyId, 
      "companyAdd":  req.body.companyAdd, 
      "candQualif":  req.body.candQualif, 
      "candDob":     req.body.candDob, 
      "candExp":     req.body.candExp, 
      "candSkills":  req.body.candSkills,
      "candExpDesc": req.body.candExpDesc, 
      "candCompany": req.body.candCompany, 
      "city":        req.body.city, 
      "state":       req.body.state, 
      "country":     req.body.country, 
      "updated_at":  new Date()
    }
  }, function (error, resUser) {
    if (error) {
      console.log("In error");
      return res.json(error);
    }
    else {
      console.log("In update");
      res.status(200).json({success: true, message: 'Successfully updated user.', body:resUser});
    }
  });
}

//export deleteUser method
exports.deleteUser = function(req, res) {
  User.deleteOne({ _id: req.params.userId }, function(err, user) {
    if (err) {
      console.log("In error");
      return res.json(err);
    }
    else {
      console.log("In delete");
      res.status(200).json({success: true, message: 'User successfully deleted.', body:user});
    }
  });
};