'use strict';

var Models = require('../lib/core');
var $User = Models.$User;

exports.get = function* () {
    yield this.render('signin', {
        session: this.session,
        flash: this.flash
    });
};

exports.post = function* () {
    var body = this.request.body;

    var user = yield $User.getByName(body.name);

    if (user && user.password === body.password) {
        this.session.user = {
            name: user.name,
            email: user.email,
            gender: user.gender,
            signature: user.signature
        };

        this.flash = { success: '登录成功！' };
        this.redirect('/');
    } else {
        this.flash = { error: '用户名或密码不正确！' };
        this.redirect('back');
    }
};
