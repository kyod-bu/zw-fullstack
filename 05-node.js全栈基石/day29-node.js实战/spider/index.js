/**
 * 爬虫
 * -在服务端获取别的服务端的html结构
 * @description 一个极简爬虫（直接通过 api 获取内容）
 */
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const url = 'https://unsplash.com/napi/search/photos?query=tree&xp=&per_page=20&page=5';

axios.get(url)
    .then(resp => {
        const data = resp.data;
        const results = data.results;

        results.forEach((item, index) => {
            console.log(`正在执行 ${index + 1}...`);
            const imageUrl = item.urls.full; // 获取url信息(full，最大的图片)
            const id = item.id;
            // 针对 imageUrl 重新发起一次get请求
            // 这里我们拿到的是一个图片链接，需要解析内容
            axios.get(imageUrl, {
                responseType: 'arraybuffer' // ❗️使用二进制的形式 去解析它
            })
            .then(resp => {
                // 把这个buffer写到硬盘上（当前目录下）
                // const dir = path.resolve(__dirname, './unsplash/');
                // if (!fs.existsSync(dir)) {
                //     fs.mkdirSync(dir);
                // }

                const buffer = Buffer.from(resp.data, 'binary');
                fs.writeFileSync(path.resolve(__dirname, `./unsplash/${id}`), buffer);
            });
        });
    });
