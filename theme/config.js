'use strict';

var path = require('path');

module.exports = {
    root: path.join(__dirname, 'views'),
    ext: 'swig',
    filters: require('./helpers/filters'),
    locals: require('./helpers/locals')
};
