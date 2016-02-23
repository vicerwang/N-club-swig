'use strict';

var Topic = require('../models').Topic;

exports.add = function(data) {
    return Topic.create(data);
};

exports.getById = function(id) {
    return Topic.findByIdAndUpdate(id, { $inc: { pv: 1 } }).exec();
};

exports.getByTab = function getByTab(tab, p) {
    var query = {};
    if (tab) {
        query.tab = tab;
    }

    return Topic.find(query).skip((p - 1) * 10).sort('-updated').limit(10).exec();
};

exports.getByUserName = function(name) {
    return Topic.find({ 'user.name': name }).sort('-updated').exec();
};

exports.incCommentById = function(id) {
    return Topic.findOneAndUpdate(id, { $inc: { comment: 1 } }).exec();
};

exports.getNoComment = function() {
    return Topic.find({ comment: 0 }).sort('-updated').limit(5).select('title').exec();
};

exports.getCount = function(tab) {
    var query = {};
    if (tab) {
        query.tab = tab;
    }

    return Topic.count(query).exec();
};
