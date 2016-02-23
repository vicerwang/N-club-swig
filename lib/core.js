'use strict';

var User = require('./user');
var Topic = require('./topic');
var Comment = require('./comment');

module.exports = {
    get $User() {
        return User;
    },

    get $Topic() {
        return Topic;
    },

    get $Comment() {
        return Comment;
    }
};
