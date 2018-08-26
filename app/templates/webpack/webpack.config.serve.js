const convert = require('koa-connect');
<%_ if(filters.fullstack) { _%>
const proxy = require('http-proxy-middleware');
const cors = require('cors');
<%_ } _%>
const history = require('connect-history-api-fallback');
const { devPort<%= filters.fullstack ? ", host " : " "%>} = require('./src/config');

module.exports = require('./webpack.config.client');

module.exports.serve = {
    content: [__dirname],
    open: false,
    port: devPort,
    add: (app) => { // app, middleware, options
<%_ if(filters.fullstack) { _%>
        app.use(convert(cors()));
        app.use(convert(proxy('/api', { target: host })));
<%_ } _%>
        app.use(convert(history({ index: '/index.ejs' })));
    }
};
