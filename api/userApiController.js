
var User = require('../models/userModel');

var userApiController = {
    getAllUsers: function(req, res) {
        User.getAllUsers(function(err, rows) {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.json(rows);
            }
        });
    },
    getUserById: function(req, res) {
        User.getUserById(req.params.id, function(err, row) {
            if (err) {
                res.status(500).json({ error: err });
            } else if (!row || row.length === 0) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.json(row[0]);
            }
        });
    },
    addUser: function(req, res) {
        var user = req.body;

        if (!user.title || !user.description) {
            res.status(400).json({ error: 'Title and Description must not be empty' });
            return;
        }

        User.addUser(user, function(err, count) {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(201).json({ message: 'User added successfully' });
            }
        });
    },
    updateUser: function(req, res) {
        var user = req.body;

        if (!user.title || !user.description) {
            res.status(400).json({ error: 'Title and Description must not be empty' });
            return;
        }

        User.updateUser(req.params.id, user, function(err, count) {
            if (err) {
                res.status(500).json({ error: err });
            } else if (count.affectedRows === 0) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.json({ message: 'User updated successfully' });
            }
        });
    },
    deleteUser: function(req, res) {
        User.deleteUser(req.params.id, function(err, count) {
            if (err) {
                res.status(500).json({ error: err });
            } else if (count.affectedRows === 0) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.json({ message: 'User deleted successfully' });
            }
        });
    }
};

module.exports = userApiController;
