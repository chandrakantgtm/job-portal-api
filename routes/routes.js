//import the required modules
var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/*--- User api's Start --- */

//api for create user (emplyee/employer)
router.route('/v1/createUser')
    .post(userController.postUser);

//api for getting the user data from his id
router.route('/v1/getUser/:id')
    .get(userController.getUser);

//api for updating the data of the user
// router.route('/v1/updateUser/:UserId')
//     .put(userController.updateUser);

//api for deleting the employee
// router.route('/v1/deleteUser')
// .delete(userController.deleteUser);

/* --- User api's End --- */


//export the router
module.exports = router;
