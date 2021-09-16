const http = require('http');

const proxy = http.createServer((req, res) => {
    res.writeHead(200, {'x-zhuawa': 'hello-zhuawa'});
    res.end('hello world');
});

proxy.listen(8888, '127.0.0.1', () => {
    console.log('server start ...');
});

// 访问 http://localhost:8888/
