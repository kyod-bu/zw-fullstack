/**
 * 服务端渲染
 */
const path = require('path');
const fs = require('fs');
const express = require('express');
const React = require('react');

const ReactDOMServer = require('react-dom/server');
const app = express();

// const Component = React.createElement('div', null, 'hello world');
const Component = require('./src/fetchDataComponent');
const data = {
    data: '服务端数据'
};

// 处理一下跨域的问题
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/data', function(req, res){
    setTimeout(function() {
        res.json(data);
    }, 2000)
});

app.get('/build/static/js/:filename', function(req, res) {
    const filename = req.params.filename;
    const pathToFile = path.resolve(__dirname, `build/static/js/${filename}`);
    const content = fs.readFileSync(pathToFile, 'utf-8');
    res.send(content);
});

app.get('/', function(req, res){
    // const componentStr =  ReactDOMServer.renderToString(Component);
    // const componentStr =  ReactDOMServer.renderToString(
    //     React.createElement(Component, data)
    // );
    // const dataStr = JSON.stringify(data);

    // 我们把客户端渲染停掉，变成这样：
    const componentStr = '';
    const dataStr = '';

    // 小结一下：
    // 这个例子使用了 服务端渲染 + 客户端渲染
    // 服务端渲染：拼接模板，拼接成一个字符串，将最终的字符串塞进模板里面去
    // 客户端渲染：判断服务端渲染有没有成功，再考虑要不要对客户端的组件做一些其他的操作（如本例中：获取请求的操作），
    //           服务端如果已经注入了数据，客户端不需要重复操作

    console.log('server get /', componentStr);

    res.send(
        `
            <html>
                <body>
                    <div id='root'>${componentStr}</div>
                    <script>window.__init__=${dataStr}</script>
                    <script src="/build/static/js/2.63eee6f8.chunk.js"></script>
                    <script src="/build/static/js/3.9256a39b.chunk.js"></script>
                    <script src="/build/static/js/main.0d0b4a93.chunk.js"></script>
                    <script src="/build/static/js/runtime-main.8e1190d8.js"></script>
                </body>
            </html>
        `
    );
});

app.listen(8080);
