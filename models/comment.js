'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CommentSchema = new Schema({
    topicId: { type: ObjectId, required: true },
    user: {
        name: { type: String, required: true },
        email: { type: String, required: true }
    },
    content: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

CommentSchema.index({ topicId: 1, updated: -1 });

module.exports = mongoose.model('Comment', CommentSchema);
