'use strict';

var Models = require('../lib/core');
var $Topic = Models.$Topic;

exports.get = function* () {
    yield this.render('create', {
        session: this.session,
        flash: this.flash,
        user: this.session.user
    });
};

exports.post = function* () {
    var body = this.request.body;
    body.user = this.session.user;

    var topic = yield $Topic.add(body);

    this.flash = { success: '发表成功！' };
    this.redirect('/topic/' + topic._id);
};
