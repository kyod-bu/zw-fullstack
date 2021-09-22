/**
 * 使⽤ express 来定义⼀个 http 服务器
 * 1、快速定义一些路由
 * 2、中间件模式，获取 req 参数
 * 3、req 上有一些方法
 */
const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// const { User } = require('./sequelize');

const app = express();

// app.use(bodyParser.json());
// app.use(cookieParser());

// 快速定义一个路由
// 正常，发送的 send 里面的内容
app.get('/', function(req, res) {
    res.setHeader('X-zhuawa', 'zhuawa');
    res.send('hello express...');
});

// // 正常，发送 json 里面的内容
// app.get('/api/data', function(req, res) {
//     res.json({
//         data: '这是 api/data'
//     });
// });

// // 不正常，内容是 login.html，content-length 是 index.html 的
// app.get('/file', function(req, res) {
//     res.sendFile(path.resolve(__dirname, './login.html'));
// })

// // 动态路由，使用场景如：详情页数据（/api/data/1, /api/data/2, ...）
// app.get('/:pathname', function(req, res) {
//     // 读取 req 内容
//     const { params, query, method, headers, path } = req;
//     res.send(
//         `
//             <html>
//                 <body>
//                     <div>params 的结果是：${JSON.stringify(params)}</div>
//                     <div>query 的结果是：${JSON.stringify(query)}</div>
//                     <div>method 的结果是：${JSON.stringify(method)}</div>
//                     <div>headers 的结果是：${JSON.stringify(headers)}</div>
//                     <div>path 的结果是：${JSON.stringify(path)}</div>
//                 </body>
//             </html>
//         `
//     );
// });

app.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, './login.html'));
});

app.post('/api/login', function(req, res) {
    // console.log(`req 对应的是：：：${JSON.stringify(req)}`);
    // console.log(`res 对应的是：：：${JSON.stringify(res)}`);
    const { body } = req;
    const { username, password } = body;
    if (!username || !password) {
        throw new Error('请输入用户名或密码');
    }

    console.log('用户名和密码是：', username, password);

    // User.findOne({
    //     where: {
    //         username,
    //         password,
    //     }
    // })
    // .then(userInfo => {
    //     if (!userInfo) {
    //         throw new Error('没有找到此用户');
    //     }

    //     res.cookie('loginToken', userInfo.userId, {
    //         maxAge: 1000 * 60 * 15,
    //         httpOnly: false
    //     });

    //     res.json({
    //         data: {
    //             redirectUrl: ''
    //         }
    //     });
    // });
});

// 静态路由
app.use(express.static('public'));

// 处理 404 响应
app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

// 设置错误处理程序，如 500
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, function() {
    console.log('server start...');
});
