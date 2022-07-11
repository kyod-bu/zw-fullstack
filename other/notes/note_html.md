# HTML 学习笔记 #
HTML（Hyper Text Markup Language）超文本**标记语言**

Web 浏览器的作用是**读取 HTML 文档，并以网页的形式显示出它们**。浏览器不会显示 HTML 标签，而是使用标签来解释页面的内容。

## 常用标签 ##
### 标题 `h1` ~ `h6`

⚠️ 浏览器会自动地在标题的前后添加空行。

⚠️ 默认情况下，HTML 会自动地在**块级元素**前后添加一个额外的空行，比如p、h1等。

**注意事项：**

* 标题标签只用于标题，不要仅仅为了产生粗体或大号的文本而使用标题。
* 搜索引擎使用标题为您的网页的结构和内容编制**索引**。
* 因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。
* 应该将 h1 用作主标题（最重要的），后面以此类推。

#### 水平线 `<hr />`

#### 换行 `<br />`

**提示：**合理地使用注释可以对未来的代码编辑工作产生帮助。

### 段落：p

⚠️ 当显示页面时，浏览器会移除*源代码中*多余的空格和空行。**所有连续的空格或空行都会被算作一个空格**。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格。

### 块元素/内联元素 ###
1. 块元素：**`<div>`** `<p>` `<ul>` `<table>` `<h1>`
2. 内联元素：**`<span>`** `<b>` `<td>` `<a>` `<img>`

`<div>` 文档中的分区或节；

`<span>` 用来组合文档中的行内元素。

## 元素常用属性（id/class/style/title）⭐️ ##
- id 唯一标识（⚠️ id 名称对大小写敏感！）
- class 类名
- style 规定元素的行内样式
- title 规定元素的额外信息（可在工具提示中显示）

## 注释 ##
```html
<!-- 此刻不显示图片：
<img border="0" src="/i/tulip_ballade.jpg" alt="Tulip">
-->

条件注释：
<!--[if IE 8]>
    .... some HTML here ....
<![endif]-->
```

## 颜色 ##

颜色由红色、绿色、蓝色混合而成。

### 颜色值

十六进制符号定义：#000000 ～ #FFFFFF

每个符号由红绿蓝值组成，即：rgb(0,0,0) ～ rgb(255,255,255)

### 颜色名

大多数浏览器都支持颜色名集合。

**提示：**仅仅有 16 种颜色名被 W3C 的 HTML4.0 标准所支持。它们是：aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, yellow。

如果需要使用其它的颜色，需要使用十六进制的颜色值。

参考文档：https://www.w3school.com.cn/html/html_colornames.asp

### Web 安全色

当计算机使用 256 色调色板时，所有的计算机能够正确地显示所有的颜色。

## 格式化🌹 ##

### 文本格式化（属性/标签/样式）⭐️ ###

推荐使用样式（style）

标签：

```txt
<b>	粗体
<strong> 加重语气（粗）
<em>	着重文字（斜）
<i>	斜体字
<big>	大号字
<small>	小号字

<sub> 下标
<sup> 上标
<ins> 插入字（下划线）
<del> 删除字
```

### 计算机输出 ###

这些标签常用于显示计算机/编程代码：

```
<code>	计算机代码
<kbd>	键盘码
<samp>	计算机代码样本
<tt>	打字机代码
<var>	定义变量

<pre>	预文本格式（保留格式输出，很适合显示计算机代码）
```

### 引用和术语定义 ###

```
<abbr>	定义缩写（title 属性，可用于展示表达的完整信息）
<acronym>	定义首字母缩写
<address>	定义地址（定义文档或文章的联系信息 作者/联系方式等，显示为斜体）
<bdo>	定义文字方向（dir="rtl"，表示从右向左输出）

<blockquote> 长引用，块引用（浏览器会插入换行和四周围的外边距）
<q>	短引用（浏览器会在引用文本外面，包裹双引号）

<cite>	定义引用、引证（对参考文献的引用进行定义，比如书籍或杂质的标题，显示为斜体）
<dfn>	定义一个定义项目（建议少用，可用斜体代替）
```

### 改变文本的外观和含义 ###

这些标签可以分为两类：**基于内容的样式**和**物理样式**。

* 基于内容的样式：`<abbr>、<acronym>、<cite>、<code>、<dfn>、<em>、<kbd>、<samp>、<strong>、<var>...`
* 物理样式：`<b>、<big>、<i>、<s>、<small>、<strike>、<sub>、<sup>、<tt>...`

## HTML 中引入 CSS 样式🌹 ##

### 内联样式 `style="***"`

```html
<p style="color: red; margin-left: 20px">
  This is a paragraph
</p>
```

### 内部样式表 `<style type="text/css">`

```html
<head>
  <style type="text/css">
    body { background-color: red }
    p { margin-left: 20px }
  </style>
</head>
```

### 链接到一个外部样式表 `<link href="*.css">`

```html
<link rel="stylesheet" type="text/css" href="mystyle.css">
```

## HTML 中引入 JavaScript 脚本🌹

### 内联脚本（事件属性 `onclick`）

```html
<button type="button" onclick="document.getElementById('demo_button').innerHTML = Date()">
  点击我来显示日期和时间
</button>
<p id="demo_button"></p>
```

### 内部脚本 `<script>`

```html
<script>
  document.getElementById('demo_button').innerHTML = Date();
  
  // 脚本更改`内容`
  document.getElementById('demo_context').innerHTML = "Hello JavaScript!";
  
  // 脚本更改`样式`
  document.getElementById('demo_style').style.color = "red";
  
  // 脚本更改`属性`
  document.getElementById('demo_image').src = "picture.gif";
</script>
```

### 链接到一个外部脚本 `<script src="*.js">`

```html
<script src="myscript.js"></script>
```

### `noscript` 标签

`noscript` 标签定义了替代内容，这些内容将显示给在浏览器中禁用了脚本或浏览器不支持脚本的用户：

```html
<script>
  document.getElementById('demo_context').innerHTML = "Hello JavaScript!";
</script>
<noscript>抱歉，您的浏览器不支持 JavaScript！</noscript>
```

## 链接 `<a href="url">链接文本</a>` ##

```html
<a href="http://www.w3school.com.cn/">Visit W3School</a>

<!-- target 属性，可以指定被链接的文档在何处显示。
						_blank，_parent，_self，_top，framename
-->
<a href="http://www.w3school.com.cn/" target="_blank">Visit W3School!</a>

<!-- name 属性，规定锚（anchor）的名称。
		⚠️ 可以使用 id 属性来替代 name 属性，命名锚同样有效。
-->
<a id="tip">锚（显示在页面上的文本）</a>
<a name="tips">基本的注意事项 - 有用的提示</a>
<a href="#tips">有用的提示</a>
<a href="http://www.w3school.com.cn/html/html_links.asp#tips">有用的提示</a>

<!-- 将图像作为链接 -->
<a href="/example/html/lastpage.html">
    <img border="0" src="/i/eg_buttonnext.gif" />
</a>

<!-- 创建电子邮件链接 -->
<!-- ⚠️ 应该使用 %20 来替换单词之间的空格，这样浏览器就可以正确地显示文本了。-->
<a href="mailto:someone@microsoft.com?subject=Hello%20again">发送邮件</a>

<!-- 创建电子邮件链接2 -->
<a href="mailto:someone@microsoft.com?cc=someoneelse@microsoft.com&bcc=andsomeoneelse2@microsoft.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!?subject=Hello%20again">发送邮件</a>
```

## 图像 `<img src="url" />`

```html
<img src="/eg_mouse.jpg" alt="替换文本" width="104" height="142" />
<img src="/eg_cute.gif" alt="替换文本" width="104" height="142" />
<!-- 插入`动画图像`的语法与插入`普通图像`的语法没有区别 -->
```

⚠️ 假如某个 HTML 文件包含十个图像，那么为了正确显示这个页面，需要加载 11 个文件。加载图片是需要时间的，所以我们的建议是：***慎用图片***。

### 图像地图 `<map>`

### 图像地图中的可点击区域 `<area>`

### 举例实现

* 背景图片 `<body background="/i/eg_background.jpg"></body>`

* 排列图片

  ```html
  <!-- 未设置对齐方式的图像： -->
  图像 <img src ="/i/eg_cute.gif"> 在文本中</p>
  
  <!-- 已设置对齐方式的图像：（默认 bottom） -->
  图像 <img src="/i/eg_cute.gif" align="bottom"> 在文本中
  图像 <img src ="/i/eg_cute.gif" align="middle"> 在文本中
  图像 <img src ="/i/eg_cute.gif" align="top"> 在文本中</p>
  ```

* 浮动图片

  ```html
  <!-- 图像将浮动到文本的左侧 -->
  <img src ="/i/eg_cute.gif" align ="left"> 
  ```

* 调整图像尺寸 `<img src="/eg_mouse.jpg" alt="替换文本" width="104" height="142" />`

* 为图片显示替换文本 （alt 属性）

* 制作图像链接 

  ```html
  <a href="/example/html/lastpage.html">
    <img border="0" src="/i/eg_buttonnext.gif" />
  </a>
  ```

* 创建图像映射

  ```html
  <body>
    <p>请点击图像上的星球，把它们放大。</p>
    <img src="/i/eg_planets.jpg" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="circle" coords="180,139,14" href ="/example/html/venus.html" target ="_blank" alt="Venus" />
      <area shape="circle" coords="129,161,10" href ="/example/html/mercur.html" target ="_blank" alt="Mercury" />
      <area shape="rect" coords="0,0,110,260" href ="/example/html/sun.html" target ="_blank" alt="Sun" />
    </map>
  
    <p>⚠️ img 元素中的 "usemap" 属性引用 map 元素中的 "id" 或 "name" 属性（根据浏览器），所以我们同时向 map 元素添加了 "id" 和 "name" 属性。</p>
  </body>
  ```

* 把图像转换为图像映射

## 表格 `table` 🌹

数据单元格可以包含**文本**、**图片**、**列表**、**段落**、**表单**、**水平线**、**表格**等等。

### 表格标签

```txt
<table>
<caption>	表格标题

<th>	表头
<tr>	行
<td>	单元格

<thead>	表格的页眉
<tbody>	表格的主体
<tfoot>	表格的页脚

<col>	用于表格的属性
<colgroup>	表格列的组
```

### 举例实现

* 表格边框

  ```html
  <table border="15">
    <tr>
      <th>表头1</th>
      <th>表头2</th>
    </tr> 
    <tr>
      <td>First</td>
      <td>Row</td>
    </tr>   
    <tr>
      <td>Second</td>
      <td>Row</td>
    </tr>
  </table>
  ```

* 没有边框的表格

* 表格中的表头 （th）

* 空单元格 （为防止空单元格的边框显示异常，在单元格中添加一个空格占位符 `&nbsp;` 。）

* 带有标题的表格

  ```html
  <table border="6">
  <caption>我的标题</caption> <!-- caption 标题-->
  <tr>
    <td>100</td>
    <td>200</td>
    <td>300</td>
  </tr>
  <tr>
    <td>400</td>
    <td>500</td>
    <td>600</td>
  </tr>
  </table>
  ```

* 跨行/跨列的表格单元格（跨列：`colspan="2"` 、跨行：`rowspan="2"`）

* 表格内的标签（单元格包含：表格/列表）

* 单元格边距 `<table border="1">` `<table border="1" cellpadding="10">`

* 单元格间距 `<table border="1">` `<table border="1" cellspacing="10">`

* 向表格添加背景颜色或背景图像

* 向表格单元添加背景颜色或背景图像

* 在表格中排列内容

  ```html
  <table width="400" border="1">
   <tr>
    <th align="left">消费项目....</th>
    <th align="right">一月</th>
    <th align="right">二月</th>
   </tr>
   <tr>
    <td align="left">衣服</td>
    <td align="right">$241.10</td>
    <td align="right">$50.20</td>
   </tr>
   <tr>
    <td align="left">化妆品</td>
    <td align="right">$30.00</td>
    <td align="right">$44.45</td>
   </tr>
   <tr>
    <td align="left">食物</td>
    <td align="right">$730.40</td>
    <td align="right">$650.00</td>
   </tr>
   <tr>
    <th align="left">总计</th>
    <th align="right">$1001.50</th>
    <th align="right">$744.65</th>
   </tr>
  </table>
  ```

* 框架（frame）属性

  使用 "frame" 属性来控制围绕表格的**边框**

  ```html
  <!-- frame: box(外部边框)/above（顶部边框）/below（底部边框）/hsides（上下边框）/vsides（左右边框） -->
  <table frame="box">
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
  </table>
  ```

## 列表 `list` 🌹

### ul-li(无序)

```html
<ul type="disc">
  <li>Coffee</li>
  <li>Milk</li>
</ul>

<!-- type 属性，自定义项目符号
  disc，黑点（默认）
  circle，白点
  square，黑色方块
-->
```

### ol-li(有序)

```html
<ol type="A" start="50">
  <li>Coffee</li>
  <li>Milk</li>
</ol>

<!-- 
	type属性，编号类型（A，大写字母；a,小写字母；I，罗马字母；i，小写罗马字母）
	start属性，序号起始；
-->
```

### dl-dt-dd(自定义)

自定义列表不仅仅是一列项目，而是**项目及其注释**的组合。

```html
<dl>
  <dt>Coffee</dt> <!--项目-->
  <dd>Black hot drink</dd> <!--项目注释-->
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```

## 表单 `form` 🌹 ##

```html
<form action="http://www.example.com/test.asp" method="post/get">
  <input type="text" name="lastname" value="Nixon" size="30" maxlength="50"/>
  <input type="password"/>
  <input type="checkbox" checked="checked"/>
  <input type="radio" checked="checked"/>
  <input type="submit"/>
  <input type="reset"/>
  <input type="hidden"/>
  <select>
    <option>Apples</option>
    <option selected>Bananas</option>
    <option>Cherries</option>
  </select>
  <textarea name="Comment" rows="4" cols="20"></textarea>
</form>
```

Demo

## HTML 框架 `<frame>` 🌹 ##

通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。

```html
<frameset cols="25%, 75%">
  <frame src="frame_a.htm">
  <frame src="frame_a.htm">
</frameset>
```

### ⭐️ HTML 内联框架 `iframe` ###

**iframe 用于在网页内显示网页。**

`<iframe src="url"></iframe>` url 指向隔离页面的位置。

```html
<!-- 设置高度和宽度 -->
<iframe src="demo_iframe.htm" width="200" height="200"></iframe>

<!-- 删除边框，frameborder置0 -->
<iframe src="demo_iframe.htm" frameborder="0"></iframe>

<!-- iframe 可用作链接的目标（target），target 属性必须引用 iframe 的name属性 -->
<iframe src="demo_iframe.htm" name="iframe_demo"></iframe>
<p><a href="http://www.w3school.com.cn" target="iframe_demo">链接文本</a></p>
```

## html头部元素 ##

- head 定义关于文档的信息
- title 文档标题
- base 定义页面上所有链接的默认地址或默认目标
- link 外部资源
- meta 关于文档的元数据（name,content,http-equiv,scheme）
- script 脚本
- style 文档的样式



## Others:::HTML 统一资源定位器 ##

URL（Uniform Resource Locator），译为“统一资源定位符”

网址，遵守以下的语法规则：

    eg：http://www.w3school.com.cn/html/index.asp
    
    scheme://host.domain:port/path/filename

**解释：**

- scheme - 定义因特网服务的类型。（http，https，ftp，files）
- host - 定义域主机（http 的默认主机是 www）
- domain - 定义因特网域名，比如 w3school.com.cn
- port - 定义主机上的端口号（http 的默认端口号是 80）
- path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）
- filename - 定义文档/资源的名称

**URL 只能使用 ASCII 字符集来通过因特网进行发送。**