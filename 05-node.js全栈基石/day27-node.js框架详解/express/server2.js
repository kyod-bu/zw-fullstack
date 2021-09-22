/**
 * 使⽤常见的 express 中间件：`body-parser` 和 `cookie-parser`
 * @description 处理我们常⻅请求中 body 和 cookie 的部分
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

// 封装一个中间件
// 这样一来的话，需要鉴权的路由，都可以使用它了👍
function loginRequired(req, res, next) {
    const cookie = req.cookies;
    const loginToken = cookie.loginToken;

    const data = require('./data');
    const userInfo = data.find(item => item.id === loginToken);

    if (!userInfo) {
        res.redirect('/login');
    } else {
        req.userInfo = userInfo;
        next();
    }
}

app.get('/', loginRequired, function(req, res, next) {
    // // 下面的这些东西，可以直接用 上面封装的中间件`loginRequired`来替代
    // const cookie = req.cookies;
    // const loginToken = cookie.loginToken;

    // const data = require('./data');
    // const userInfo = data.find(item => item.id === loginToken);

    // if (!userInfo) {
    //     res.redirect('/login');
    // } else {
    //     res.sendFile(path.resolve(__dirname, './index.html'));
    // }

    // 在这里就可以直接拿到 userInfo 了
    const userInfo = req.userInfo;
    // 可以针对性的做一些业务操作了
    res.send(`当前登录的用户：：${JSON.stringify(userInfo)}`);
});

app.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, './login.html'));
});

app.post('/api/data', function(req, res) {
    const { body } = req;
    console.log(body, typeof body);
    res.json({
        data: 'success'
    });
});

app.post('/api/login', function(req, res) {
    const { body } = req;
    const { username, password } = body;
    if (!username || !password) {
        throw new Error('请输入用户名或密码');
    }

    console.log('用户名和密码是：', username, password);

    const data = require('./data');
    const userInfo = data.find(item => item.username === username && item.password === password);

    if (!userInfo) {
        throw new Error('没有找到此用户');
    }

    res.cookie('loginToken', userInfo.id, {
        maxAge: 1000 * 60 * 15, // 15min 后 cookie失效
        httpOnly: true // 👆 true: 只有 http 请求下，才能拿到我们设置的 cookie
    });

    res.json({
        data: {
            msg: 'success',
            redirectUrl: '/'
        }
    });
});

app.listen(8080, function() {
    console.log('server start...');
});
