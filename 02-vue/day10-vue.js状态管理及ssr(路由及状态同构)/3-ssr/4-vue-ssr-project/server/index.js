const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const entry = require('../entry');
const createRouter = require('../routes');

app.get('*', async function(req, res) {
    // 获取当前访问的 url，让 vue-router 找对应的配置
    const url = req.url;
    const router = createRouter();

    router.push(url);
    const components = router.getMatchedComponents();

    if (!components.length) {
        res.status(404).send('not found');
    }

    const app = entry(router, components[0]);
    const renderer = require('vue-server-renderer').createRenderer({
        template: fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
    });

    const content = await renderer.renderToString(app);
    res.send(content);
});

app.listen(8888, function() {
    console.log('启动成功，打开 http://localhost:8888/ 查看结果！');
});
