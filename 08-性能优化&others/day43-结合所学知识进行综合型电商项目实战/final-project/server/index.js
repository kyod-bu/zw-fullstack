const Koa = require('koa');

const app = new Koa();
const router = require('koa-router')();

// 签名需要一个加密的 key（签名配置：{signed: true}）
// app.keys = ['hello world'];

const { UserModel } = require('./model');

// 有些部分是不需要鉴权的，要越过中间件鉴权
router.get('/login', function () {
    console.log('login...');
});

// 鉴权部分，我们使用`中间件`的方式去实现
// KOA 异步中间件
router.use(async function (ctx, next) {
    const sessionId = ctx.cookies.get('sessionId');
    if (sessionId) {
        const user = await UserModel.findOne({
            where: {
                id: sessionId
            }
        });
        if (user) {
            ctx.user = user;
        }
    } else {
        // 没有登录
    }
    return next();
});

router.get('/', function (ctx) {
    ctx.body = `当前登录的用户是：${ctx.user.name}`;
});

router.get('/user', function (ctx) {
    ctx.body = {
        user: ctx.user
    };
});

router.get('/list', function (ctx) {
    ctx.body = {
        user: ctx.user
    };
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
