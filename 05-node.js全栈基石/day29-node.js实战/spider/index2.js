/**
 * 爬虫
 * @description 升级版本爬虫（手动提取 html 中的有效内容）
 */
const axios = require('axios');
const fs = require('fs');
const path = require('path');
// 解析 html 结构的库
const cheerio = require('cheerio');

const url = 'https://unsplash.com/s/photos/animal';

axios.get(url)
    .then(resp => {
        const data = resp.data; // 这里拿到的是 html 结构
        // console.log('=====', data, '::', typeof data);

        // 使用第三方库，解析 html 结构
        const $ = cheerio.load(data); // 手动提取 html 文档
        const $imgs = $('img'); // 通过选择器，拿到所有的 img 元素
        $imgs.each((index, img) => {
            const src = $(img).attr('src'); // 获取元素的 src 属性
            const url = src.split('?')[0];
            const id = url.split('/').pop();
            console.log(`正在执行 ${index + 1} ... ${url}`);

            axios.get(url, {
                responseType: 'arraybuffer' // ❗️使用二进制的形式 去解析它
            })
            .then(resp => {
                const buffer = Buffer.from(resp.data, 'binary');
                fs.writeFileSync(path.resolve(__dirname, `./unsplash/${id}`), buffer);
            })
            .catch(e => {
                console.log(e);
            });
        })

        return null;
    });


/**
 * 模拟 curl 命令
 *
 * @description 补充一些 header
 *
 curl 'https://images.unsplash.com/photo-1484406566174-9da000fda645' \
  -H 'sec-ch-ua: "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'Upgrade-Insecure-Requests: 1' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36' \
  --compressed > output
 */
