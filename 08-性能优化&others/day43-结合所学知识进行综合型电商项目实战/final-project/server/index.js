const Koa = require('koa');

const app = new Koa();
const router = require('koa-router')();

require('./model');

router.get('/', function (ctx) {
    ctx.body = 'hello server';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
