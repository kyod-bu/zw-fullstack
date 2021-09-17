/**
 * Node.js http API 完成 websocket 协议切换【客户端】
 */
const http = require('http');

const PORT = 8001;

const options = {
    port: PORT,
    host: '127.0.0.1',
    headers: {
        Connection: 'Upgrade',
        Upgrade: 'websocket',
    }
};

req = http.request(options);
req.end();

req.on('upgrade', (res, socket, upgradeHead) => {
    console.log('got upgraded...');

    socket.on('data', (c) => {
        console.log('The price now is :::', c.toString('utf-8'));
    });

    // client -> server
    // socket.write('abcd');

    // client -> server later ...
    // setTimeout(() => {
    //     socket.write('efg');
    // }, 1000);

    // close socket after 5s
    // setTimeout(() => {
    //     socket.destroy();
    // }, 5000);
});
