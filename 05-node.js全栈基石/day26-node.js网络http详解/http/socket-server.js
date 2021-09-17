/**
 * Node.js net API 实现 tcp 通讯
 */
const net = require("net");
const fs = require("fs");
const path = require("path");

const server = net.createServer((socket) => {
    socket.on('data', (request) => {
        const req = request.toString('utf-8');
        // console.log('req=================', req);

        const lines = req.split('\r\n');
        const line = lines[0];
        // HTTP请求：方法、资源、协议版本
        const [method, url, proto] = line.split(/\s+/);
        console.log('method:::', method);
        console.log('url:::', url);
        console.log('proto:::', proto);

        switch (url) {
            case '/': {
                responseHTML(socket, path.resolve('./index.html'));
                break;
            }
            default : {
                responseHTML(socket, path.resolve('./404.html'));
                break;
            }
        }
    })
});

const PORT = 8001;

server.listen(PORT, () => {
    console.log(`Socket server listening on ${PORT}`);
});

function responseHTML(socket, htmlFilePath) {
    const content = fs.readFileSync(htmlFilePath);
    socket.write(
        "HTTP/1.1 200 OK\r\n" +
        "Content-Type: text/html\r\n" +
        `Content-Length: ${content.length}\r\n` +
        "\r\n" +
        content
    );
}

// 访问：http://localhost:8001/
