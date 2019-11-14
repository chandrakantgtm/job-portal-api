//Import required module
var User = require('../models/user');


// export the postUser method
exports.postUser = function(req, res) {
  // creating the new user
  var user = new User({
    userType:    req.body.userType,
    name:        req.body.name,
    emailId:     req.body.emailId,
    phoneNumber: req.body.phoneNumber,
    created_at:  new Date(),
    updated_at:  ""
  });

  //save the creating user
  user.save(function(error,response){
    // handle the error
      if(error){
        return error;
      }
      else{
        //send the response to the browser
        res.json({
          success: true,
          body: response
        });
      }
  }); // end of save method
} // end of postUser method


//export the getUser method
exports.getUser = function(req,res){
  // taking the id from the params of the url
  var id = req.params.id;
  //find the first employee form the collection
  User.findOne({emailId:id},function(error,response){
    if(error){
        return res.json(error)
    }
    res.json(response);
  });
}


// export the updateEmployee method
exports.updateEmployee = function(req,res){
    console.log("In upadate");
  var id = req.params.employeeId;
  Employee.findOne({employeeId: id}, function(error,resEmployee){
      if(error){
          console.log("In error");
          res.json(error);
      }

      var newName = req.body.employeeName;
      //update the name
      resEmployee.name = newName;
      //update the date
      resEmployee.updated_at = new Date();
      //save the employee
      resEmployee.save(function(err, response){
          if(err){
              res.json(err);
          }

          res.json(response);
      });

  });
}


//export deleteEmployee method
exports.deleteEmployee = function(req,res){
  var empId = req.body.empId;
  Employee.findOne({employeeId: empId}, function(error,emp) {
      if(error){
        res.json(error);
      }
      Employee.remove({employeeId: empId},function(err,qres){
          if(err){
            res.json(err);
          }
          res.json("Successfully Deleted");
      });
  });
}
