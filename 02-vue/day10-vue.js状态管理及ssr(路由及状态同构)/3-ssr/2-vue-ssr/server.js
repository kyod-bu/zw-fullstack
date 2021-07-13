const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.get('/', async function(req, res) {
    // {
    //     template: fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
    // }
    const renderer = require('vue-server-renderer').createRenderer();
    const vueComponent = require('./vueComponent.js');
    const content = await renderer.renderToString(vueComponent);
    res.send(content);
});

app.listen(8888, function() {
    console.log('启动成功，打开 http://localhost:8888/ 查看结果！');
});
