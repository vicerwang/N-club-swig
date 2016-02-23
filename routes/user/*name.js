'use strict';

var Modles = require('../../lib/core');
var $Topic = Modles.$Topic;
var $User = Modles.$User;

exports.get = function* (name) {
    var locals = {
        session: this.session,
        flash: this.flash,
        topics: yield $Topic.getByUserName(name),
        name: name
    }

    if (this.session && this.session.user && this.session.user.name === name) {
        locals.user = this.session.user;
    } else {
        locals.user = yield $User.getByName(name);
    }

    yield this.render('user', locals);
};
