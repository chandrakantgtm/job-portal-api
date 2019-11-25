//Import required module
var Job = require('../models/jobs');


// export the postUser method
exports.postJob = function (req, res) {
  // creating the new user
  if (!req.body.jobTitle || !req.body.jobId || !req.body.jobDesc || !req.body.jobPostedBy) {
    console.log(req.body);
    res.status(400).json({success: false, message: 'Please enter mandatory fields.'});
  } else {
    // Checking job by id already exist or not
    Job.findOne({ jobId: req.body.jobId }, function (error, resExist) {
      if (error) {
        return res.json(error)
      }

      if(resExist && resExist.jobId) {
       return res.status(400).json({success: false, message: 'This job already exist by same id.'});
      }
      var newJob = new Job({
        jobPostedBy: req.body.jobPostedBy,
        jobTitle:    req.body.jobTitle,
        jobId:       req.body.jobId,
        reqExp:      req.body.reqExp,
        location:    req.body.location,
        offerSalary: req.body.offerSalary,
        keySkills:   req.body.keySkills,
        desiredProf: req.body.desiredProf,
        jobDesc:     req.body.jobDesc,
        companyProf: req.body.companyProf,
        created_at:  new Date(),
        updated_at:  ""
      });
    
      // Attempt to creating new userres
      newJob.save(function (err,jobRes) {
        if (err) {
          return res.json(err)
        }
        console.log(req.body);
        res.status(200).json({success: true, message: 'Successfully created new job.', body:jobRes});
      });
    });
    
  }// end of save method
} // end of postUser method

//export the getAllJob method
exports.getAllJob = function (req, res) {
  //find the first user form the collection
  Job.find({}, function (error, response) {
    if (error) {
      console.log("In error");
      return res.json(error);
    }
    else {
      console.log("Get all Jobs");
      res.status(200).json({success: true, body:response});
    }
  });
}

//export the getUser by id method
exports.getJob = function (req, res) {
  //find the first user form the collection
  Job.findOne({ _id: req.params.id }, function (error, response) {
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

//export the searchJob method
exports.searchJob = function(req,res){
  let conditions = {};
  if(req.query.keyword){
    conditions['$or'] = [{"jobTitle": new RegExp(req.query.keyword,"i")}, {"jobDesc": new RegExp(req.query.keyword,"i")}]
  }

  if(req.query.skill){
    var skillkeys = req.query.skill.split(',');
    conditions["keySkills"] =  { $all: skillkeys};
  }

  if(req.query.keyword){
    conditions['$or'] = [{"jobTitle": new RegExp(req.query.keyword,"i")}, {"jobDesc": new RegExp(req.query.keyword,"i")}]
  }


  console.log("conditions",conditions); 
  Job.find(conditions,function(error,response){
      if(error){
        res.json(error);
      }
      else {
        res.status(200).json({success: true, body:response});
      }
  })
}

// export the updateUser method
exports.updateJob = function (req, res) {
  Job.findOneAndUpdate({ _id: req.params.jobId },{ 
    $set: {
      "jobTitle":    req.body.jobTitle,
      "reqExp":      req.body.reqExp,
      "location":    req.body.location,
      "offerSalary": req.body.offerSalary,
      "keySkills":   req.body.keySkills,
      "desiredProf": req.body.desiredProf,
      "jobDesc":     req.body.jobDesc,
      "companyProf": req.body.companyProf,
      "updated_at":  new Date()
    }
  }, function (error, resUser) {
    if (error) {
      console.log("In error");
      return res.json(error);
    }
    else {
      console.log("In job update");
      res.status(200).json({success: true, message: 'Successfully updated job.', body:resUser});
    }
  });
}

//export deleteUser method
exports.deleteJob = function(req, res) {
  Job.remove({ _id: req.params.jobId }, function(err, job) {
    if (err) {
      console.log("In error");
      return res.json(err);
    }
    else {
      console.log("In delete");
      res.status(200).json({success: true, message: 'Job successfully deleted.', body:job});
    }
  });
};
