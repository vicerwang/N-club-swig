'use strict';

var validator = require('validator');
var crypto = require('crypto');

module.exports = {
    '(GET|POST) /signup': {
        request: {
            session: checkNoLogin
        }
    },
    'POST /signup': {
        request: {
            body: checkSignupBody
        }
    },
    '(GET|POST) /signin': {
        request: {
            session: checkNoLogin
        }
    },
    'POST /signin': {
        request: {
            body: checkSigninBody
        }
    },
    '(GET|POST) /create': {
        request: {
            session: checkLogin
        }
    },
    'POST /create': {
        request: {
            body: checkCreateBody
        }
    },
    'POST /topic': {
        request: {
            session: checkLogin,
            body: checkReplyBody
        }
    }
};

function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

function checkNoLogin() {
    if (this.session && this.session.user) {
        this.flash = { error: '已登录！' };
        this.redirect('back');
        return false;
    }

    return true;
}

function checkLogin() {
    if (!this.session || !this.session.user) {
        this.flash = { error: '未登录！' };
        this.redirect('/signup');
        return false;
    }

    return true;
}

function checkSignupBody() {
    var body = this.request.body;
    var error;

    if (!body) {
        error = '请填写用户名';
    } else {
        body.name = validator.trim(body.name);
        body.email = validator.trim(body.email);
        body.password = validator.trim(body.password);
        body.rePassword = validator.trim(body.rePassword);
        body.signature = validator.trim(body.signature);

        if (!body.name) {
            error = '请填写用户名';
        } else if (!body.email) {
            error = '请填写邮箱';
        } else if (!validator.isEmail(body.email)) {
            error = '请填写正确的邮箱地址';
        } else if (!body.password) {
            error = '请填写密码';
        } else if (body.password !== body.rePassword) {
            error = '两次密码不匹配';
        } else if (!body.gender || !~['male', 'female'].indexOf(body.gender)) {
            error = '请选择性别！';
        } else if (body.signature && body.signature.length > 50) {
            error = '个性签名不能超过50字！'
        }
    }

    if (error) {
        this.flash = { error: error };
        this.redirect('back');
        return false;
    }

    body.password = md5(body.password);

    return true;
}

function checkSigninBody() {
    var body = this.request.body;
    var error;

    if (!body) {
        error = '请填写用户名';
    } else {
        body.name = validator.trim(body.name);
        body.password = validator.trim(body.password);

        if (!body.name) {
            error = '请填写用户名';
        } else if (!body.password) {
            error = '请填写密码';
        }
    }

    if (error) {
        this.flash = { error: error };
        this.redirect('back');
        return false;
    }

    body.password = md5(body.password);

    return true;
}

function checkCreateBody() {
    var body = this.request.body;
    var error;

    if (!body) {
        error = '请填写标题';
    } else {
        body.title = validator.trim(body.title);
        body.content = validator.trim(body.content);

        if (!body.tab) {
            error = '请填写板块';
        } else if (!body.title) {
            error = '请填写标题';
        } else if (!body.content) {
            error = '请填写内容';
        }
    }

    if (error) {
        this.flash = { error: error };
        this.redirect('back');
        return false;
    }

    return true;
}

function checkReplyBody() {
    var body = this.request.body;
    var error;

    if (!body) {
        error = '回复的帖子不存在！';
    } else {
        body.content = validator.trim(body.content);

        if (!body.topicId || !validator.isMongoId(body.topicId)) {
            error = '回复的帖子不存在！';
        } else if (!body.content) {
            error = '回复内容不能为空！';
        }
    }

    if (error) {
        this.flash = { error: error };
        this.redirect('back');
        return false;
    }

    return true;
}

