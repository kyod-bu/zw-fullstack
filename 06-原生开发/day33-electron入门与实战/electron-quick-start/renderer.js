// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const fs = require('fs');
const dayjs = require('dayjs');
const path = require('path');

const $time = document.getElementById('time');
const $canvas = document.getElementById('canvas');
const ctx = $canvas.getContext('2d'); // 拿到 canvas 的 context

function renderTime() {
    // const timestamp = new Date().getTime();
    const time = dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss');
    // $time.innerHTML = timestamp;
    $time.innerHTML = `time: ${time}`;
}

/**
 * fs 系统级的操作，牵扯到安全问题【不推荐】
 * 👍 推荐做法：主进程与渲染进程之间进行通信，主进程设置图标等信息，渲染进程仅负责渲染元素。
 */
function renderCanvas() {
    const time = dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss');
    // 绘制 canvas
    ctx.font = '48px serif'; // 设置字体
    ctx.clearRect(0, 0, $canvas.clientWidth, $canvas.clientHeight);
    ctx.fillText(time, 10, 50);
    saveCanvasImage(path.resolve(__dirname, './assets/icon.png'));
}

function saveCanvasImage(filePath) {
    const url = $canvas.toDataURL('image/jpg', 0.8);
    const base64Data = url.replace(/^data:image\/png;base64,/, ''); // 去掉前缀
    fs.writeFileSync(filePath, base64Data, 'base64');
}

setInterval(renderTime, 1000);
setInterval(renderCanvas, 1000);
