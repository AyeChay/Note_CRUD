var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.get('/users/edit/:id', userController.getUserById);
router.get('/users/add', userController.renderAddUserForm); 
router.post('/users/add', userController.addUser);
router.post('/users/edit/:id', userController.updateUser);
router.get('/users/delete/:id', userController.deleteUser);

module.exports = router;
