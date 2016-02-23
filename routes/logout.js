'use strict';

exports.get = function* () {
    this.session.user = null;
    this.redirect('/');
};
