var User = require('../models/userModel');

var userController = {
    getAllUsers: function(req, res) {
        User.getAllUsers(function(err, rows) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.render('userList', { users: rows });
            }
        });
    },
    getUserById: function(req, res) {
        User.getUserById(req.params.id, function(err, row) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.render('editUser', { user: row[0] });
            }
        });
    },
    renderAddUserForm: function(req, res) { 
        res.render('addUser');
    },
    addUser: function(req, res) {
        var user = req.body;

        if (!user.title || !user.description) {
            res.render('addUser', { errorMessage: 'Title and Description must not be empty' });
            return;
        }
        
        User.addUser(user, function(err, count) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.redirect('/users');
            }
        });
    },
    updateUser: function(req, res) {
        var user = req.body;

        if (!user.title || !user.description) {
            res.render('editUser', { errorMessage: 'Title and Description must not be empty', user: user });
            return;
        }

        User.updateUser(req.params.id, user, function(err, count) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.redirect('/users');
            }
        });
    },
    deleteUser: function(req, res) {
        User.deleteUser(req.params.id, function(err, count) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.redirect('/users');
            }
        });
    }
};

module.exports = userController;
