/**
 * Node.js http API 完成 websocket 协议切换【服务端】
 */
const http = require('http');

const server = http.createServer((req, res) => {
});

server.on('upgrade', (req, socket, head) => {
    socket.write(
        'HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
        'Upgrade: WebSocket\r\n' +
        'Connection: Upgrade\r\n' +
        '\r\n'
    );

    socket.on('data', (content) => {
        console.log('from client:::', content.toString('utf-8'));
    });

    // server -> client
    socket.write('95');

    // server -> client later...
    asyncSend('120', 1);
    asyncSend('110', 2);
    asyncSend('68', 3);
    asyncSend('651', 4);

    // close socket after 5s
    setTimeout(() => {
        console.log('socket destroy...');
        socket.destroy();
    }, 5000);

    function asyncSend(content, s) {
        setTimeout(() => {
            console.log('send:::', content);
            socket.write(content);
        }, s * 1000);
    }
});

const PORT = 8001;

server.listen(PORT, () => {
    console.log(`ws server listening on ${PORT}`);
});
