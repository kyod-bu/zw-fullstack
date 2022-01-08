const os = require('os'); // 操作系统
const path = require('path'); // 文件路径
const fs = require('fs'); // 文件

const writeToFile = path.resolve(__dirname, './temp.csv');
let writeToFileContent = '微信聊天对话 ID';

/**
 * 递归遍历文件夹
 * @param {string} path
 */
function getList(path) {
  if (fs.existsSync(path)) {
    const files = getFilesByPath(path);
    files.forEach(function (file, index) {
      const curPath = path + '/' + file;
      const curPathFiles = getFilesByPath(curPath);
      if (curPathFiles.includes('File')) {
        curPathFiles.forEach(function (f, i) {
          if (f === 'File') {
            const curPath22 = curPath + '/' + f;
            const curPathFiles22 = getFilesByPath(curPath22);
            if (curPathFiles22.length > 0) {
              // 聊天对象 ID：
              const chatObjId = curPath22.split('/')[14];
              writeToFileContent += '\n' + chatObjId + ',' + curPathFiles22.join(',');

              if (!arr.includes(chatObjId)) { // 禁止读取的ID
                // console.log('聊天对象 ID::', chatObjId);
                // console.log('聊天记录（文件）::', curPathFiles22);
              }
            }
          }
        })
      }
    })
  } else {
    console.log(path, '不存在');
  }
}

function getFilesByPath(path) {
  if (fs.statSync(path).isDirectory()) {
    const files = fs.readdirSync(path);
    return files;
  }
  return [];
}

// 微信聊天记录文件夹
const wechat_dir = path.resolve(
  os.homedir(),
  'Library',
  'Containers',
  'com.tencent.xinWeChat',
  'Data',
  'Library',
  'Application Support',
  'com.tencent.xinWeChat',
  '2.0b4.0.9',
  'be38d38ddfe5a8c5fc1a219d60cc1491',
  'Message',
  'MessageTemp',
);
const arr = [
  '34b96d41823b25d2a6e188266907485f', // 反盗版执行群
  '9c52501c2a777a1da6867047ebe7848b', // 视频版权保护核心
]
getList(wechat_dir);
fs.writeFileSync(writeToFile, `\ufeff${writeToFileContent}`);

// ****** path 模块常用 ******
// resolve 返回绝对路径 👍
const resolvePath = path.resolve('..', 'a', '..', 'b', 'c/');
// join 拼接一个路径
const joinPath = path.join('..', 'a', '..', 'b', 'c/');

console.log('resolvePath:::', resolvePath);
console.log('joinPath:::', joinPath);

// 路径处理 常用变量
console.log('__dirname::', __dirname);
console.log('__filename::', __filename);
console.log('os.homedir()::', os.homedir());

console.log('os.homedir()::', os.homedir());
console.log('ext::', path.extname(__filename));
console.log('base::', path.basename(__filename));
console.log('dir::', path.dirname(__filename)); // 相当于 __dirname
