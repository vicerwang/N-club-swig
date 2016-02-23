'use strict';

var User = require('../models').User;

exports.add = function(data) {
    return User.create(data);
};

exports.getById = function(id) {
    return User.findById(id).exec();
};

exports.getByName = function(name) {
    return User.findOne({ name: name }).exec();
};
