'use strict';

var Models = require('../lib/core');
var $User = Models.$User;
var $Topic = Models.$Topic;

exports.get = function* () {
    var tab = this.query.tab;
    var page = this.query.p || 1;

    var locals = yield {
        session: this.session,
        flash: this.flash,
        query: this.query,
        tab: tab,
        page: page,
        topics: $Topic.getByTab(tab, page),
        count: $Topic.getCount(tab),
        noReplyTopic: $Topic.getNoComment()
    };

    locals.pages = Math.ceil(locals.count / 10);
    var min = Math.max(1, page - 2);
    var max = Math.min(page + 2, locals.pages);
    locals.items = [];
    for (var i = min; i <= max; i++) {
        locals.items.push(i);
    }

    if (this.session.user) {
        locals.user = yield $User.getByName(this.session.user.name);
    }

    yield this.render('index', locals);
};
