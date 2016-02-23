'use strict';

var Comment = require('../models').Comment;

exports.add = function(data) {
    return Comment.create(data);
};

exports.getByTopicId = function(topicId) {
    return Comment.find({ topicId: topicId }).sort('updated').exec();
};
