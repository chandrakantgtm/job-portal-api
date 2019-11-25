//import the required modules
var express = require('express');
var router = express.Router();
var jobApplied = require('../controllers/jobAppliedController');

//api for create job
router.route('/v1/job/applyJob').post(jobApplied.postJobApllied);

//api for getting the all jobs posted
// router.route('/v1/job/getAllJob').get(jobController.getAllJob);

//api for getting the user data from his id
// router.route('/v1/job/getJob/:id').get(jobController.getJob);

//api for updating the data of the user
// router.route('/v1/job/updateJob/:jobId').put(jobController.updateJob);

//api for deleting the employee
// router.route('/v1/job/deleteJob/:jobId').delete(jobController.deleteJob);

//export the router
module.exports = router;
