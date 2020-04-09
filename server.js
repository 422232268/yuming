var Koa = require('koa');
var Router = require('koa-router');
var serve = require('koa-static');
var path = require('path');

var app = new Koa();
var router = new Router();

app.use(router.routes()).use(router.allowedMethods());

app.use(serve(path.join(__dirname, './')));

app.listen(8080, () => {
    console.log('start')
});
