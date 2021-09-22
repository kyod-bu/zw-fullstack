/**
 * node.js ORM 框架 sequelize 初体验
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// 获取表的实例
const { User } = require('./sequelize');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

// 封装一个中间件
// 这样一来的话，需要鉴权的路由，都可以使用它了👍
function loginRequired(req, res, next) {
    const cookie = req.cookies;
    const loginToken = cookie.loginToken;
    console.log('loginToken:::', loginToken);
    if (!loginToken) {
        return res.redirect('/login');
    }

    // // 静态查询
    // const data = require('./data');
    // const userInfo = data.find(item => item.id === loginToken);

    const pageSize = req.query.pageSize;
    const pageNumber = req.query.pageNumber;

    // // 静态查询 可以变更为：查询数据库表
    // User.findAndCountAll({
    //     limit: +pageSize,
    //     offset: +((pageNumber - 1) * pageSize),
    // }).then(result => {
    //     console.log('查询数据库表结果-result::', result);
    //     res.json(result);
    // });

    // 静态查询 可以变更为：查询数据库表
    User.findOne({
        where: {
            userId: loginToken
        }
    })
    .then(userInfo => {
        if (!userInfo) {
            res.redirect('/login');
        } else {
            req.userInfo = userInfo;
            next();
        }
    });
}

app.get('/', loginRequired, function(req, res, next) {
    // 在这里就可以直接拿到 userInfo 了
    const userInfo = req.userInfo;
    // 可以针对性的做一些业务操作了
    res.send(`当前登录的用户：：${JSON.stringify(userInfo)}`);
});

app.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, './login.html'));
});

app.post('/api/login', function(req, res) {
    const { body } = req;
    const { username, password } = body;
    if (!username || !password) {
        throw new Error('请输入用户名或密码');
    }

    console.log('用户名和密码是：', username, password);

    // const data = require('./data');
    // const userInfo = data.find(item => item.username === username && item.password === password);

    User.findOne({
        where: {
            username,
            password,
        }
    })
    .then(userInfo => {
        if (!userInfo) {
            throw new Error('没有找到此用户');
        }

        res.cookie('loginToken', userInfo.userId, {
            maxAge: 1000 * 60 * 15, // 15min 后 cookie失效
            httpOnly: false // 👆 true: 只有 http 请求下，才能拿到我们设置的 cookie
        });

        res.json({
            data: {
                redirectUrl: '/'
            }
        });
    });
});

app.listen(8080, function() {
    console.log('server start...');
});
