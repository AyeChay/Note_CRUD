var express = require('express');
var router = express.Router();
var userApiController = require('../api/userApiController');

router.get('/users', userApiController.getAllUsers);
router.get('/users/:id', userApiController.getUserById);
router.post('/users', userApiController.addUser);
router.put('/users/:id', userApiController.updateUser);
router.delete('/users/:id', userApiController.deleteUser);

module.exports = router;
