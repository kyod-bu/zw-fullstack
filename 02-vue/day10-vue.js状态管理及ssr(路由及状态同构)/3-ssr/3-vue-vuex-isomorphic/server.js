const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

// 事实上这是一个单纯只有客户端路由的例子，客户端能够自由切换路由，但服务端只监听了根路由
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

// app.get('*', async function(req, res) {
//     const renderer = require('vue-server-renderer').createRenderer({
//         template: fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
//     });
//     const vueComponent = require('./vueComponent.js');
//     const content = await renderer.renderToString(vueComponent);
//     res.send(content);
// });

app.listen(8888, function() {
    console.log('启动成功，打开 http://localhost:8888/ 查看结果！');
});
