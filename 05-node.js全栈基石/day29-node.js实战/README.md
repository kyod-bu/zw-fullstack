# node.js 项目实战

1. 使用 node.js 做一个爬虫应用
2. 使用 node.js 完整开发一个 cli 应用

## 爬虫

爬虫应用，我们来做一个爬取图片的图集。我们选择 splash 作为我们练手的一个图集网站。<https://unsplash.com/>

### 直接通过 api 获取内容

在我们搜索之后，unsplash 通过一个搜索 api ，返回的结果中带着所有图片的原信息和链接等等，我们可以直接从 response 中获取这部分内容。

<https://unsplash.com/napi/search/photos?query=tree&xp=&per_page=20&page=5>

我们只需要在 node.js 中，通过发送相同的请求，从结果中拿取这部分的内容，然后再通过请求下载即可。

[示例](./spider/index.js)

### 手动提取 html 中的有效内容

### 登陆、控制并发等内容

## cli
