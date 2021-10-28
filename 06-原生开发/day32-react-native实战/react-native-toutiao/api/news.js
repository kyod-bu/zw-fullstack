// 获取新闻
export function getNewsByChannel(channel, start = 0, end = 10) {
  return new Promise((resolve, reject) => {
    let api = `http://is.snssdk.com/api/news/feed/v51/?category=${channel}`;
    console.log("channel:" + channel);
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "success") {
          // 数据请求成功
          let newsArr = json.data; // 列表数据
          let list = [];
          for (let item of newsArr) {
            // 获取内容数据
            let content = item.content;
            // 获取json内容
            let json = JSON.parse(content);
            list.push(json); // 添加到列表中
          }
          resolve(list);
        } else {
          throw new Error(json.status);
        }
      })
      .catch((e) => {
        reject(e.toString());
      });
  });
}

// 获取搜索实时匹配
export function getSearchTips(words) {
  return new Promise((resolve, reject) => {
    fetch(
      `http://www.yidianzixun.com/home/q/search_channel?word=${encodeURIComponent(
        words
      )}&appid=web_yidian`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.code === 0) {
          let wordsArr = [];
          if (json.channels) {
            let arr = json.channels.slice();
            arr.map((item, index) => {
              if (item.type === "keyword" || item.type === "sugkwd") {
                wordsArr.push(item.name);
              }
            });
          }
          resolve(wordsArr);
        } else {
          throw new Error(json.status);
        }
      })
      .catch((e) => {
        reject(e.toString());
      });
  });
}

export function getHotSearch() {
  return new Promise((resolve, reject) => {
    fetch(
      `http://www.yidianzixun.com/home/q/hot_search_keywords?appid=web_yidian`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.code === 0) {
          let keywords = json.keywords.slice();
          let wordArr = [];
          keywords.map((item, index) => {
            wordArr.push(item.name);
          });
          resolve(wordArr);
        } else {
          throw new Error(json.status);
        }
      })
      .catch((e) => {
        reject(e.toString());
      });
  });
}
