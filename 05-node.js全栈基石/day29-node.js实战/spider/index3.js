/**
 * 爬虫
 * @description 升级版本爬虫2（登陆、控制并发等内容）
 */
const fetch = require('node-fetch');

fetch("https://www.bigbigwork.com/q?w=shuji&c=shuji&p=1&h=&token=OTM4NTQwMDUsLSzpo47lhL8sMTYzMjgzMzUwMzIzOSwx", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://www.bigbigwork.com/tupian/shuji4.html",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})
.then((resp) => console.log(resp));
