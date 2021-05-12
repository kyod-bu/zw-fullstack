/**
 * 写一个 node 服务【简易版本】
 * 借助 express
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/ajax', function(req, res) {
    console.log(req.query);

    // 服务端返回格式1: json 格式
    // res.json({
    //     foo: 'bar'
    // });
    
    // 服务端返回格式2: string 格式
    res.send('string test');
});

app.post('/ajaxPost', function(req, res) {
    console.log(req.query, req.body);
    res.json({
        foo: 'bar'
    });
});

app.listen(3000);
