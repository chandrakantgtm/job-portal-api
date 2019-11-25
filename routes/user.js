//import the required modules
var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router
//api for create user (emplyee/employer)
.post(
    "/v1/user/createUser", userController.postUser
)
//api for getting all user data
.get(
    '/v1/user/getAllUser', userController.getAllUser
)
//api for getting all user data from his type(Emplyee/Employer)
.get(
    '/v1/user/getAllUserType/:uType', userController.getAllUserType
)
//api for getting the user data from his id
.get(
    '/v1/user/getUser/:id', userController.getUser
)
//api for updating the data of the user
.put(
    '/v1/user/updateUser/:userId', userController.updateUser
)
//api for deleting the user
.delete(
    '/v1/user/deleteUser/:userId', userController.deleteUser
)

//export the router
module.exports = router;