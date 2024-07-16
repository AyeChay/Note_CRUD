
var db = require('../config/database');

var User = {
    getAllUsers: function(callback) {
        return db.query('SELECT * FROM user WHERE deleted = FALSE', callback);
    },
    getUserById: function(id, callback) {
        return db.query('SELECT * FROM user WHERE id = ? AND deleted = FALSE', [id], callback);
    },
    addUser: function(user, callback) {
        return db.query('INSERT INTO user (title, description, deleted) VALUES (?, ?, ?)', [user.title, user.description, false], callback);
    },
    updateUser: function(id, user, callback) {
        return db.query('UPDATE user SET title = ?, description = ? WHERE id = ?', [user.title, user.description, id], callback);
    },
    deleteUser: function(id, callback) {
        return db.query('UPDATE user SET deleted = TRUE WHERE id = ?', [id], callback);
    }
};

module.exports = User;
