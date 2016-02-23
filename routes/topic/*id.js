'use strict';

var Models = require('../../lib/core');
var $User = Models.$User;
var $Topic = Models.$Topic;
var $Comment = Models.$Comment;
var co = require('co');

exports.get = function* (id) {
    var data = yield {
        temp: co(function* () {
            var topic = yield $Topic.getById(id);
            var user = yield $User.getByName(topic.user.name);
            return  {
                topic: topic,
                user: user
            }
        }),
        comments:  $Comment.getByTopicId(id)
    }

    var locals = yield {
        session: this.session,
        flash: this.flash,
        topic: data.temp.topic,
        comments: data.comments,
        user: data.temp.user
    };

    yield this.render('topic', locals);
};

exports.post = function* (id) {
    var body = this.request.body;
    body.user = this.session.user;
    body.topicId = id;

    yield [
        $Comment.add(body),
        $Topic.incCommentById(id)
    ];

    this.flash = { success: '回复成功！' };
    this.redirect(this.query.redirect || 'back');
};
