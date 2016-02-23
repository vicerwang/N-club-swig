'use strict';

var gravatar = require('gravatar');
var moment = require('moment');
var md = require('markdown-it')();
var pkg = require('../package.json');

moment.locale(pkg.locale);

module.exports = {
    get fromNow () {
        return function (data) {
            return moment(data).fromNow();
        };
    },

    get gravatar () {
        return gravatar.url;
    },

    get markdown () {
        return function(content) {
            return md.render(content);
        };
    }
};
