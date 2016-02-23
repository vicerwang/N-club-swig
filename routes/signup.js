'use strict';

var Models = require('../lib/core');
var $User = Models.$User;

exports.get = function* () {
    yield this.render('signup', {
        session: this.session,
        flash: this.flash
    });
};

exports.post = function* () {
    var body = this.request.body;

    var nameExists = yield $User.getByName(body.name);
    if (nameExists) {
        this.flash = { error: '用户名已存在！' };
        return this.redirect('back');
    }

    yield $User.add(body);

    this.session.user = {
        name: body.name,
        email: body.email,
        gender: body.gender,
        signature: body.signature
    };

    this.flash = { success: '注册成功！' };
    this.redirect('/');
};
