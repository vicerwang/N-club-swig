'use strict';

var mongoose = require('mongoose');
var mongodb = require('config-lite').mongodb;

mongoose.connect(mongodb.url, function(err) {
    if (err) {
        console.error('connect to %s error: ', mongodb.url, err);
        process.exit(1);
    }
});

exports.User = require('./user');
exports.Topic = require('./topic');
exports.Comment = require('./comment');
