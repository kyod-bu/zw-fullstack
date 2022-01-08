const os = require('os'); // 操作系统
const path = require('path'); // 文件路径
const fs = require('fs'); // 文件

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
              if (!arr.includes(chatObjId)) {
                console.log('聊天对象 ID::', chatObjId);
                console.log('聊天记录（文件）::', curPathFiles22);
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
// const wechat_dir = '/Users/yafbu/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/be38d38ddfe5a8c5fc1a219d60cc1491/Message/MessageTemp/131a98e70737f56c229fcbdafd0537fe/File/人选面试过的问题12.25';
const wechat_dir = '/Users/yafbu/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/be38d38ddfe5a8c5fc1a219d60cc1491/Message/MessageTemp';

const arr = [
  '34b96d41823b25d2a6e188266907485f', // 反盗版执行群
  '9c52501c2a777a1da6867047ebe7848b', // 视频版权保护核心
]
getList(wechat_dir);
