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
<code>	计算机代码（不保留多余的空格和折行）
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

### 链接到一个外部样式表 `<link href="*.css" />`

```html
<link rel="stylesheet" type="text/css" href="mystyle.css" />
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

## HTML 框架 `<frameset>` 🌹 ##

通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。

```html
<!-- 垂直框架: cols属性 -->
<frameset cols="25%, 50%, 25%">
  <frame src="/example/frame_a.html">
  <frame src="/example/frame_b.html">
  <frame src="/example/frame_c.html">
</frameset>

<!-- 水平框架：rows属性 -->
<frameset rows="25%, 50%, 25%">
  <frame src="/example/frame_a.html">
  <frame src="/example/frame_b.html">
  <frame src="/example/frame_c.html">
</frameset>
```

通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。每份HTML文档称为一个框架，并且每个框架都独立于其他的框架。

使用框架 `<frameset>` 的坏处：

* 开发人员必须同时跟踪更多的 HTML 文档
* 很难打印整张页面

### 框架结构标签 `<frameset>`

框架结构标签（`<frameset>`）定义如何将窗口分割为框架。

每个 frameset 定义了一系列行**或**列。

rows/cols 的值规定了每行或每列占据屏幕的面积。

⚠️ frameset 标签也称为**框架集**。

### 框架标签 `<frame>`

`frame` 标签定义了放置在每个框架中的 HTML 文档。

```html
<frameset rows="25%, 75%">
  <frame src="/example/frame_a.html">
  <frame src="/example/frame_b.html">
</frameset>
```

### 注意事项

假如一个框架有可见边框，用户可以拖动边框来改变它的大小。为了避免这种情况发生，可以在 `<frame>` 标签中加入 `noresize="noresize"` 。

为不支持框架的浏览器添加 `<noframes>` 标签。

‼️ 不能将 `<body></body>` 标签与 `<frameset></frameset>` 标签同时使用！不过，假如你添加包含一段文本的 `<noframes>` 标签，就必须将这段文字嵌套于 `<body></body>` 标签内。

### ⭐️ HTML 内联框架 `iframe` ###

**iframe 用于在网页内显示网页。**

`<iframe src="url"></iframe>` url 指向隔离页面的位置。

```html
<!-- 设置高度和宽度 -->
<iframe src="demo_iframe.html" width="200" height="200"></iframe>

<!-- 删除边框，frameborder置0 -->
<iframe src="demo_iframe.html" frameborder="0"></iframe>

<!-- iframe 可用作链接的目标（target），target 属性必须引用 iframe 的name属性 -->
<iframe src="demo_iframe.html" name="iframe_demo"></iframe>
<p><a href="http://www.w3school.com.cn" target="iframe_demo">链接文本</a></p>
```

### 举例：

```html
<!-- 1.如何使用 <noframes> 标签 -->
<html>
  <frameset cols="25%, 50%, 25%">
    <frame src="/example/frame_a.html" />
    <frame src="/example/frame_b.html" />
    <frame src="/example/frame_c.html" />

    <noframes>
      <body>
        您的浏览器无法处理框架！
      </body>
    </noframes>
  </frameset>
</html>

<!-- 2.混合框架结构 -->
<html>
  <frameset rows="50%, 50%">
    <frame src="/example/frame_a.html" />
    <frameset cols="25%, 75%">
      <frame src="/example/frame_b.html" />
      <frame src="/example/frame_c.html" />
    </frameset>
  </frameset>
</html>

<!-- 3.含有 noresize="noresize" 属性的框架结构 -->

<!-- 4.导航框架
	导航框架包含一个将第二个框架作为目标的链接列表。名为 "contents.html" 的文件包含三个链接。
-->
<html>
  <frameset cols="120, *">
    <frame src="/demo/html/content.html" />
    <frame src="/example/html/frame_a.html" name="showframe" />

    <!-- 6.跳转至框架内的一个指定的节：使用 <a name="C10"> 进行标识。-->
    <frame src="/example/html/frame_a.html" />
    <frame src="/example/html/link.html#C10" />
  </frameset>
</html>

<!-- 5.内联框架 -->
<html>
  <body>
    <iframe src="/i/eg_landscape.jpg"></iframe>
    <p>⚠️ 一些老的浏览器不支持 iframe。</p>
    <p>如果得不到支持，iframe 是不可见的。</p>
  </body>
</html>

<!-- 7.使用框架导航跳转至指定的节
	左侧的导航框架包含了一个链接列表，这些链接将第二个框架作为目标。第二个框架显示被链接的文档。导航框架其中的链接指向目标文件中指定的节。
-->
<html>
  <frameset cols="180, *">
    <frame src="/demo/html/content.html" />
    <frame src="/example/html/link.html" name="showframe" />
  </frameset>
</html>
```

## 背景（bgcolor *VS* background）

**好的背景使站点看上去特别棒。**

`<body>` 拥有两个配置背景的属性。背景可以是**颜色**或者**图像**。

```html
<!-- 背景颜色：bgcolor -->
<body bgcolor="#000000"></body>
<body bgcolor="rgb(0,0,0)"></body>
<body bgcolor="black"></body>

<!-- 背景：background -->
<body background="clouds.gif"></body>
<body background="http://www.w3school.com.cn/clouds.gif"></body>
<!--
	gif 和 jpg 文件均可用作 HTML 背景。
	如果图像小于页面，图像会进行重复。

	可用性强的背景图像：
	/i/eg_bg_06.gif（即，http://www.w3school.com.cn/i/eg_bg_06.gif）
	/i/eg_bg_04.gif
-->
```

⚠️ 如果你打算使用背景图片，需要注意一下几点：

* 背景图片是否增加了页面的**加载时间**。（⚠️ 图像文件不应超过 10k。）
* 背景图像是否与页面中的**其它图像**搭配良好。
* 背景图像是否与页面中的**文字颜色**搭配良好。
* 图像在页面中**平铺后**，看上去还可以吗？
* 对文字的注意力被背景图像**喧宾夺主**了吗？

‼️`<body>` 标签中的背景颜色（bgcolor）、背景（background）和文本（text）属性在最新的 HTML 标准（HTML4 和 XHTML）中**已被废弃**。W3C 在他们的推荐标准中已删除这些属性。

👍 应该使用层叠样式表（CSS）来定义 HTML 元素的布局和显示属性。

## 头部 `<head>` 🌹⭐️ ##

`<head>` 元素是所有头部元素的**容器**。

可以添加到 head 部分的标签：`<title>` 、 `<base>` 、 `<link>` 、 `<meta>` 、 `<script>` 、 `<style>`。

- `<head>` 定义关于文档的信息

- `<title>` 文档标题

- `<base>` 定义页面上所有链接的**默认地址**或默认目标（target）⭐️

- `<link>` 外部资源（样式表）

- `<meta>` 关于文档的元数据（name,content,http-equiv,scheme）⭐️⭐️

  meta 元数据不会显示在页面上，但是对于机器是可读的。

  使用场景：规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。

  元数据可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。

- `<script>` 脚本

- `<style>` 定义文档的样式（head中的css）

```html
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
  <meta http-equiv="Content-Language" content="zh-cn" />
  <!-- 定义页面的描述信息 -->
  <meta name="description" content="Free Web tutorials on HTML, CSS, XML" />
  <!-- 定义页面的关键词 -->
  <meta name="keywords" content="HTML, CSS, XML" />

  <base href="http://www.w3school.com.cn/images/"/>
  <base target="_blank"/>

  <link rel="stylesheet" type="text/css" href="mystyle.css" />
  <!-- 内部样式 css -->
  <style>
    body { background: red }
    p { color: blue }
  </style>

  <title>文档标题</title>
</head>
```

## 布局 div *VS* table 🌹⭐️ ##

### 使用 `<div>` 元素的 HTML 布局

⚠️ `<div>` 元素常用作布局工具，因为能够轻松地通过 CSS 对其进行定位。

常用布局结构：

* 上中下布局 `Header-Content-Footer`
* 顶部-侧边布局-通栏（多用于应用型的网站）`Header-Sider-Content-Footer`
* 顶部-侧边布局（多用于展示类网站）`Header-Content-Sider-Content-Footer`
* 侧边布局（侧边导航可收起）`Sider-Header-Content-Footer`
* 响应式布局（配置 breakpoint 属性，进行 trigger 交互视窗宽度） ⭐️

```css
/* 常用布局样式 */
.header {
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
}
.nav {
  line-height: 30px;
  background-color: #eeeeee;
  height: 300px;
  width: 100px;
  float: left;
  padding: 5px;
}
.section {
  width: 350px;
  float: left;
  padding: 10px;
}
.footer {
  background-color: black;
  color: white;
  clear: both;
  text-align: center;
  padding: 5px;
}
```

### 使用 HTML5 的网站布局

```txt
header	定义文档或节的页眉
nav	定义导航链接的容器
section	定义文档中的节
article	定义独立的自包含文章
aside	定义内容之外的内容（比如：侧栏）
footer	定义文档或节的页脚
details	定义额外的细节
summary	定义 details 元素的标题
```

### 使用表格的 HTML 布局

⚠️ `<table>` 元素不是作为布局工具而设计的。

`table` 元素的作用是显示表格化的数据。

使用 `table` 元素能够取得布局效果，因为能够通过 CSS 设置表格元素的样式。

```html
<body>
  <table class="lamp">
    <tr>
      <th><img src="/images/lamp.jpg" alt="Note" style="height:32px;width:32px"></th>
      <td>The table element was not designed to be a layout tool.</td>
    </tr>
  </table>

  <style>
    table.lamp {
      width: 100%;
      border: 1px solid #d4d4d4;
    }
    table.lamp th,td {
      padding: 10px;
    }
    table.lamp td {
      width: 40px;
    }
  </style>
</body>
```

## HTML 响应式 Web 设计 ⭐️

响应式 Web 设计（RWD，Responsive Web Design）

RWD 能够以可变尺寸传递网页

RWD 对于平板和移动设备是必须的

* 创建自己的响应式设计（`float: left`）

* 使用 Bootstrap（现成的CSS框架）

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width", initial-scale=1.0 />
      <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
    </head>

    <body>
      <div class="contenter">
        <div class="jumbotron">
          <h1>Demo</h1>
          <p>Resize this responsive page!</p>
        </div>
      </div>

      <div class="contenter">
        <div class="row">
          <div class="col-md-4">
            <h2>London</h2>
            <p>London is the capital city of England.</p>
            <p>t is the most populous city in the United Kingdom,
      with a metropolitan area of over 13 million inhabitants.</p>
          </div>
          <div class="col-md-4">
            <h2>London</h2>
            <p>London is the capital city of England.</p>
            <p>t is the most populous city in the United Kingdom,
      with a metropolitan area of over 13 million inhabitants.</p>
          </div>
          <div class="col-md-4">
            <h2>London</h2>
            <p>London is the capital city of England.</p>
            <p>t is the most populous city in the United Kingdom,
      with a metropolitan area of over 13 million inhabitants.</p>
          </div>
        </div>
      </div>
    </body>
  </html>
  ```

## HTML5 中新的语义元素

许多网站包含了指示导航、页眉以及页脚的 HTML 代码，例如这些：`<div id="nav"> <div class="header"> <div id="footer">`。

HTML5 提供了定义页面不同部分的新语义元素：

```html
<article></article>
<aside></aside>
<details></details>
<figcaption></figcaption>
<figure></figure>
<footer></footer>
<header></header>
<main></main>
<nav></nav>
<section></section>
<time></time>

<!-- section: 文档中的节
	根据 W3C 的 HTML 文献：“节（section）是有主题的内容组，通常具有标题”。
	可以将网站首页划分为：简介、内容、联系信息等节。
-->
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>

<!-- article: 独立的自包含内容
	文档有其自身的意义，并且可以独立于网站其他内容进行阅读。
	<article> 元素的使用场景：论坛/博客/新闻
-->
<article>
  <h1>What Does WWF Do?</h1>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>

<!--
	在 HTML5 中，<article>元素定义完整的相关元素自包含块。
	<section>元素定义为相关元素块。
-->

<!-- header 元素为文档或节规定`页眉`。
	<header>元素应该被用作介绍性内容的容器。
	您可以在一个文档中使用多个 <header> 元素。
-->
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>

<!-- footer 元素为文档或节规定`页脚`。
	<footer> 元素应该提供有关其包含元素的信息。
	页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。
	您可以在一个文档中使用多个 <footer> 元素。
-->
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
</footer>

<!-- nav 元素定义导航链接集合。
	<nav> 元素旨在定义大型的导航链接块。不过，并非文档中所有链接都应该位于 <nav> 元素中！
-->
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>

<!-- aside 元素页面主内容之外的某些内容（比如侧栏）。
	aside 内容应该与周围内容相关。
-->
<p>My family and I visited The Epcot center this summer.</p>
<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>

<!-- figure 和 figcaption 元素
	在书籍和报纸中，与图片搭配的标题很常见。
	标题（caption）的作用是为图片添加可见的解释。
	通过 HTML5，图片和标题能够被组合在 <figure> 元素中：
-->
<figure>
  <!-- img 元素定义图像 -->
  <img src="pic_mountain.jpg" alt="The Pulpit Rock" width="304" height="228">
  <!-- figcaption 元素定义标题 -->
  <figcaption>Fig1. - The Pulpit Pock, Norway.</figcaption>
</figure>
```

### 为何使用 HTML5 元素？

如果使用 HTML4 的话，开发者会使用他们喜爱的属性名来设置页面元素的样式：header, top, bottom, footer, menu, navigation, main, container, content, article, sidebar, topnav, ... 如此，浏览器便无法识别正确的网页内容。

而通过 HTML5 元素，比如：`<header> <footer> <nav> <section> <article>`，此问题迎刃而解。

根据 W3C，语义网：<q>允许跨应用程序、企业和团体对数据进行分享和重用。</q>

### HTML5 中的语义元素

```html
<article>	<!-- 定义文章 -->
<aside>	<!-- 定义页面内容以外的内容 -->
<details>	<!-- 定义用户能够查看或隐藏的额外细节 -->
<figcaption>	<!-- 定义 figure 元素的标题 -->
<figure>	<!-- 规定自包含内容，比如图示、图表、照片、代码清单等 -->
<header>	<!-- 规定文档或节的页眉 -->
<footer>	<!-- 定义文档或节的页脚 -->
<main>	<!-- 规定文档的主内容 -->
<mark>	<!-- 定义重要的或强调的文本 -->
<nav>	<!-- 定义导航链接 -->
<section>	<!-- 定义文档中的节 -->
<summary>	<!-- 定义 details 元素的可见标题 -->
<time>	<!-- 定义日期/时间 -->
```

## HTML 实体

参考文档：https://www.w3school.com.cn/html/html_entities.asp

HTML 中的预留字符必须被替换为字符实体。

⚠️ 使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，浏览器也许并不支持所有实体名称（对实体数字的支持却很好）。

```html
<!-- HTML 中常用的字符实体 -->
显示结果	描述	实体名称	实体编号
 	空格	&nbsp;	&#160;
<	小于号	&lt;	&#60;
>	大于号	&gt;	&#62;
&	和号	&amp;	&#38;
"	引号	&quot;	&#34;
¥	元（yen）	&yen;	&#165;
©	版权（copyright）	&copy;	&#169;
×	乘号	&times;	&#215;
÷	除号	&divide;	&#247;
```

## HTML 符号

键盘上不存在的字符也可以由实体代替。

1. 普通键盘上不存在的众多数学、技术和货币符号。
2. 希腊字母
3. 其他实体

## HTML 表情符号（Emoji） ##

**表情符号（Emoji）是来自 UTF-8 字符集的字符：😄 😍 💗**

### 什么是 Emoji？

表情符号（Emoji）类似图像或图标，但它们并不是。

它们来自 UTF-8（Unicode）字符集的字母（字符）。

⚠️ UTF-8 几乎涵盖世界上所有字符和符号。

### HTML charset 属性

为了正确显示 HTML 页面，Web 浏览器必须知道页面中使用的字符集。

```html
<meta charset="UTF-8" /> <!-- 如果未规定，UTF-8 则是 HTML 中的默认字符集。-->
```

### UTF-8 字符

很多 UTF-8 字符无法在键盘上键入，但始终可以使用数字（被称为实体编号）来显示它们：

* A -> 65
* B -> 66
* C -> 67

Emoji 字符：

* 😄 是 128516
* 😍 是 128525
* 💗 是 128151

⚠️ 由于表情符号是字符，因此可以像 HTML 中的其他任何字符一样复制、显示和调整它们的大小。

## HTML 编码（字符集） ##

**为了正确显示 HTML 页面，Web 浏览器必须知道要使用哪个字符集。**

### 从 ASCII 到 UTF-8

ASCII 是第一个字符编码标准。**ASCII 定义了 128 种**可以在互联网上使用的字符：**数字（0-9）**、**英文字母（A-Z）**和一些**特殊字符**，比如：`! $ + - ( ) @ < >`。

**ISO-8859-1 是 HTML 4 的默认字符集**。此字符集支持 256 个不同的字符代码。HTML 4 同时支持 UTF-8。

ANSI（Windows-1252）是原始的 Windows 字符集。 ANSI 与 ISO-8859-1 相同，不同之处在于 ANSI 具有 32 个额外的字符。

**HTML5 规范鼓励 Web 开发人员使用 UTF-8 字符集，该字符集涵盖了世界上几乎所有的字符和符号！**⭐️

### HTML charset 属性

```html
<meta charset="UTF-8" />
```

### 字符集之间的差异

参考：https://www.w3school.com.cn/html/html_charset.asp

* **ASCII 字符集：**（**128种**，数字0～9、英文字母a~zA~Z、特殊字符）
* **ANSI 字符集：**（原始的Windows字符集，与ISO-8859-1相同，另外有**32个**额外的字符）
* **ISO-8859-1 字符集：**（**256个**不同的字符）
* **UTF-8 字符集：**（包含**超过 10000 个**不同字符，涵盖了世界上几乎所有的字符和符号！推荐👍）

### `@charset` CSS 规则

可以使用 CSS `@charset` 规则来指定样式表中使用的字符编码。

```css
/* 将样式表的编码设置为 Unicode UTF-8 */
@charset "UTF-8";
```

## HTML 统一资源定位器（URL） ##

URL（Uniform Resource Locator），译为“统一资源定位符”，也被称为**网址**。

当你点击 HTML 页面中的某个链接时，对应的 `<a>` 标签指向万维网上的一个地址。

统一资源定位器（URL）用于定位万维网上的文档（或其他数据）。

```txt
例如：
http://www.w3school.com.cn/html/index.asp
file:///Users/testuser/workspace/demo.html

💡【规则】网址，遵守以下的语法规则：
scheme://host.domain:port/path/filename

两种写法，效果一样的（`http://host:port/` -> `http://domain/`）
域名：http://localhost/ 👍（名称比数字好记）
因特网协议（IP）地址：http://127.0.0.1:80/
```

**解释：**

- **scheme** - 定义因特网服务的类型。（流行的scheme：http，https，ftp，file）
  * http：超文本传输协议（以 http:// 开头的普通网页。不加密。）
  * https：安全超文本传输协议（安全网页。**加密**所有信息交换。）
  * ftp：文件传输协议（用于将文件**下载**或**上传**至网站）
  * file：（您计算机上的文件）
- **host** - 定义域主机（http 的默认主机是 www）
- **domain** - 定义因特网域名，比如 w3school.com.cn
- **port** - 定义主机上的端口号（http 的默认端口号是 80）
- **path** - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）
- **filename** - 定义文档/资源的名称

### URL 编码

**URL 编码会将字符转换为可通过因特网传输的格式。**

Web 浏览器通过 URL 从 web 服务器请求页面。（URL 是网页的地址，比如 *http://www.w3school.com.cn*。）

‼️⭐️⚠️ **URL 只能使用 [ASCII 字符集](https://www.w3school.com.cn/charsets/ref_html_ascii.asp) 来通过因特网进行发送。**

由于 URL 常常会包含 ASCII 集合之外的字符，URL 必须转换为有效的 ASCII 格式。

URL 编码使用 "%" 其后跟随两位的十六进制数来替换非 ASCII 字符。

URL 不能包含空格。URL 编码通常使用 + 来替换空格。

🌰 URL 编码示例：[完整的 URL 编码参考手册](https://www.w3school.com.cn/tags/html_ref_urlencode.asp)

```txt
字符	URL 编码
€	%80
£	%A3
©	%A9
®	%AE
À	%C0
Á	%C1
Â	%C2
Ã	%C3
Ä	%C4
Å	%C5
```

## Web 服务器（Web Server） 🌹

**如果希望向世界发布您的网站，那么您必须把它存放在 web 服务器上。**

### 托管自己的网站

在自己的**服务器**上托管网站始终是一个选项。有几点需要考虑：

* **硬件支出**

  如果要运行“真正”的网站，你不得不购买强大的服务器硬件。不要指望低价的 PC 能够应付这些工作。你还需要稳定的（一天24小时）高速连接。

* **软件支出**

* 请记住，**服务器授权通常比客户端授权更昂贵**。同时请注意，服务器授权也许有用户数量限制。

* **人工费**

  不要指望低廉的人工费用。你必须安装自己的硬件和软件。你同时要处理漏洞和病毒，以确保您的服务器时刻正常地运行于一个“任何事都可能发生”的环境中。

### 使用因特网服务提供商（ISP）

从 ISP 租用服务器也很常见。

大多数小公司会把网站存放到由 ISP 提供的服务器上。其优势有以下几点：

* **连接速度**

  大多数 ISP 都拥有连接因特网的高速连接。

* **强大的硬件**

  ISP 的 web 服务器通常强大到能够由若干网站分享资源。您还要看一下 ISP 是否提供高效的负载平衡，以及必要的备份服务器。

* **安全性和可靠性**

  ISP 是网站托管方面的专家。它们应该提供 99% 以上的在线时间，最新的软件补丁，以及最好的病毒防护。

### 选择 ISP 时的注意事项

* **24 小时支持**

  确保 ISP 提供 24 小时支持。不要使自己置于无法解决严重问题的尴尬境地，同时还必须等待第二个工作日。如果您不希望支付长途电话费，那么免费电话服务也是必要的。

* **每日备份**

  确保 ISP 会执行每日备份的例行工作，否则你有可能损失有价值的数据。

* **流量**

  研究一下 ISP 的流量限制。如果出现由于网站受欢迎而激增的不可预期的访问量，那么您要确保不会因此支付额外费用。

* **带宽或内容限制**

  研究一下 ISP 的带宽和内容限制。如果你计划发布图片或播出视频或音频，请确保你有此权限。

* **E-mail 功能**

  请确保 ISP 支持你需要的 e-mail 功能。

* **数据库访问**

  如果你计划使用网站数据库中的数据，那么请确保您的 ISP 支持你需要的数据库访问。

  在你选取一家 ISP 之前，请务必阅读 W3School 的 [Web 主机教程](https://www.w3school.com.cn/hosting/index.asp)。

## HTML 文档类型

```html
<!-- <!DOCTYPE> 声明帮助浏览器正确地显示网页。 -->
<!DOCTYPE html>
<html>
  <head>
    <title>文档的标题</title>
  </head>

  <body>
    文档的内容……
  </body>
</html>
```
