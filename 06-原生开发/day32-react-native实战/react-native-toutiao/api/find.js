export function getFindList(offset = 10) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://m.guokr.com/apis/minisite/article.json?retrieve_type=by_channel_v2&channel_key=hot&subject_key=all&limit=10&offset=${offset}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) {
          resolve(json.result);
        } else {
          throw new Error("暂时无法获得数据");
        }
      })
      .catch((e) => {
        reject(e.toString());
      });
  });
}
