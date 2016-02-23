'use strict';

var koa = require('koa');
var logger = require('koa-logger');
var bodyparser = require('koa-bodyparser');
var staticCache = require('koa-static-cache');
var errorHandler = require('koa-errorhandler');
var session = require('koa-generic-session');
var MongoStore = require('koa-generic-session-mongo');
var flash = require('koa-flash');
var compress = require('koa-compress');
var scheme = require('koa-scheme');
var router = require('koa-frouter');
var routerCache = require('koa-router-cache');
var render = require('koa-swig-render');
var config = require('config-lite');
var merge = require('merge-descriptors');

var app = koa();

app.keys = ['secret', 'N-club'];

var isDefault = app.env === 'default';
var core = require('./lib/core');
var renderConf = require(config.renderConf);
merge(renderConf.locals || {}, core, false);
if (isDefault) {
    renderConf.cache = false;
}

app.use(errorHandler());
app.use(bodyparser());
app.use(staticCache(config.staticCacheConf));
app.use(logger());
app.use(session({ store: new MongoStore(config.mongodb) }));
app.use(flash());
app.use(scheme(config.schemeConf));
isDefault && app.use(routerCache(app, config.routerCacheConf));
app.use(compress());
app.use(render(renderConf));
app.use(router(app, config.routerConf));

if (isDefault) {
    app.listen(config.port, function() {
        require('browser-sync')({
            proxy: 'localhost:' + config.port,
            files: ['theme/views/**.swig', 'theme/public/**.{css,js}'],
            open: false,
            notify: false
        });
    });
} else {
    app.listen(config.port);
}
