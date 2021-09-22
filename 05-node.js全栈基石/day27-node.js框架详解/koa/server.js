/**
 * koa 完美的洋葱模型
 * @desc 1->2->2->1
 */
const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

app.use(router.routes()).use(router.allowedMethods());

// ctx -> context
app.use(async function(ctx, next) {
    console.log('middleware1 start', new Date().getTime());
    await sleep(1).then(next);
    console.log('middleware1 end', new Date().getTime());
});

app.use(async function(ctx, next) {
    console.log('middleware2 start', new Date().getTime());
    await sleep(1.5).then(next);
    console.log('middleware2 end', new Date().getTime());
});

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time * 1000);
    });
}

router.get('/', (ctx, next) => {
    ctx.body = 'hello world';
});

app.listen(8080, function() {
    console.log('server start...');
});
