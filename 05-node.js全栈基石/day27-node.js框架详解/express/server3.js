/**
 * express 中间件
 */
 const path = require('path');
 const express = require('express');
 const bodyParser = require('body-parser');
 const cookieParser = require('cookie-parser');

 const app = express();

 app.use(bodyParser.json());
 app.use(cookieParser());

// 定义2个中间件
// NO1:
app.use(async function(req, res, next) {
    console.log('middleware1 start', new Date().getTime());
    await sleep(1).then(next);
    console.log('middleware1 end', new Date().getTime());
});

  // NO2:
app.use(async function(req, res, next) {
    console.log('middleware2 start', new Date().getTime());
    await sleep(1.5).then(next);
    console.log('middleware2 end', new Date().getTime());
});

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time * 1000);
    });
}

app.get('/', function(req, res) {
    res.send('hi');
});

app.listen(8080, function() {
    console.log('server start...');
});
