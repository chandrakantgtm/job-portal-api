//Import required module
var Job = require('../models/jobApplied');


// export the postUser method
exports.postJobApllied = function (req, res) {
  // creating the new user
  if (!req.body.jobApplied || !req.body.jobAppliedBy || !req.body.jobPostedBy) {
    console.log(req.body);
    res.status(400).json({
      success: false,
      message: 'You can not apply this job'
    });
  } else {
    // Checking job  already exist or not
    let {
      jobApplied,
      jobAppliedBy,
      jobPostedBy
    } = req.body;
    Job.find({
      jobApplied,
      jobAppliedBy
    }, function (error, resExist) {
      if (error) {
        return res.json(error)
      }
      if (resExist.length > 0) {
        return res.status(400).json({
          success: false,
          message: 'You have already applied this job.'
        });
      }
      var newJob = new Job({
        jobApplied,
        jobAppliedBy,
        applied_at: new Date(),
        updated_at: new Date()
      });

      // Attempt to creating new userres
      newJob.save(function (err, jobRes) {
        if (err) {
          return res.json(err)
        }
        console.log(req.body);
        res.status(200).json({
          success: true,
          message: 'Successfully applied this job.',
          body: jobRes
        });
      });
    });

  } // end of save method
} // end of postUser method