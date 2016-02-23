'use strict';

var path = require('path');
var MemoryCache = require('koa-router-cache').MemoryCache;

module.exports = {
    port: process.env.port || 3000,
    mongodb: {
        url: 'mongodb://127.0.0.1:27017/club'
    },
    schemeConf: path.join(__dirname, './default.scheme'),
    staticCacheConf: path.join(__dirname, '../theme/public'),
    renderConf: path.join(__dirname, '../theme/config'),
    routerConf: './routes',
    routerCacheConf: {
        '/': {
            key: 'cache:index',
            expire: 10 * 1000,
            get: MemoryCache.get,
            set: MemoryCache.set,
            passthrough: MemoryCache.passthrough,
            condition: function() {
                return !this.session || !this.session.user;
            }
        }
    }
};
