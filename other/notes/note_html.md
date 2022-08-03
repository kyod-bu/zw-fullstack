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

<!--
	<input> 元素的类型（type）有：text/radio/submit
	<input> 元素的属性有：type/name/value/checked
	⚠️ text 的默认宽度是 20 个字符。
-->
```

**表单元素**指的是不同类型的 input 元素、复选框、单选按钮、提交按钮等等。

表单（form）的 **action 属性** 定义在提交表单时执行的动作。

表单（form）的 **method 属性** 规定在提交表单时所用的 HTTP 方法（GET 或 POST）。

💡用 `<fieldset>` **组合**表单数据

```html
<form action="action_page.php" method="get" target="_blank" accept-charset="utf-8">
  <fieldset>
    <legend>Personal information:</legend>
    First name:<br />
    <input type="text" name="firstname" value="Mickey" />
    <br />
    Last name:<br />
    <input type="text" name="lastname" value="Mouse" />
    <br /><br />
    <input type="submit" value="Submit" />
  </fieldset>
</form>
```

### 表单属性

* accept-charset	规定在被提交表单中使用的字符集（默认：页面字符集）

* action	规定向何处提交表单的地址（URL）（提交页面）

* autocomplete	规定浏览器应该自动完成（填写）表单（默认：开启）

* enctype	规定被提交数据的编码（默认：url-encoded）（⚠️ 仅供 `method="post"`）

* method	规定在提交表单时所用的 HTTP 方法（默认：GET）

  * GET 的注意事项：
    * 永远不要使用 GET 发送敏感数据（提交的表单数据在 URL 中可见）
    * URL 的长度受限（2048 个字符）
    * 对于用户希望将结果添加为书签的表单提交很有用
    * GET 适用于非安全数据，例如 Google 中的查询字符串
  * POST 的注意事项：
    * 将表单数据附加在 HTTP 请求的正文中（不在URL中显示提交的表单数据）
    * POST 没有大小限制，可用于发送大量数据
    * 带有 POST 的表单提交，无法添加书签

  ❗️❗️❗️如果表单数据包含敏感信息或个人信息，请务必使用 POST！

* name	规定识别表单的名称（对于 DOM 使用：`document.forms.name`）

* novalidate	规定提交时浏览器不应验证表单

* rel	规定链接资源和当前文档之间的关系

* target	规定 action 属性中地址的目标（默认：`_self` ，另外的：`_blank` `_self` `_parent` `_top` `framename`）

### 表单元素

```html
<!-- 根据 type 属性，可以变化为多种形态 -->
<input />

<!-- 下拉列表 -->
<select name="cars">
  <option value="volvo">Volvo</option> <!-- 待选项 -->
  <option value="saab">Saab</option>
  <option value="fiat" selected>Fiat</option> <!--预定义选项-->
  <option value="audi">Audi</option>
</select>

<!-- 多行输入字段 -->
<textarea name="message" rows="10" cols="30">
  The cat was playing in the garden.
</textarea>

<!-- 按钮 -->
<button type="button" onclick="alert('Hello World!')">Click Me!</button>


<!-- HTML5 新增表单元素 -->
<!-- datalist 元素为 input 元素规定预定义选项列表，用户会在它们输入数据时看到预定义选项的下拉列表 -->
<form action="action_page.php">
  <input list="browsers" />
  <datalist id="browsers">	<!-- 💡<input>的list属性必须引用<datalist>的id属性 -->
    <option value="Internet Explorer" />
    <option value="Firefox" />
    <option value="Chrome" />
    <option value="Opera" />
    <option value="Safari" />
  </datalist>
</form>

<!-- Others -->
<keygen></keygen>
<output></output>
```

### 输入类型 `<input type="*"/>`

```html
<!-- 根据 type 属性，可以变化为多种形态 -->
<input type="text" /> <!--文本输入-->
<input type="password" /> <!--密码字段-->
<input type="submit" /> <!--定义表单数据至“表单处理程序”的按钮-->
<input type="radio" /> <!--单选按钮-->
<input type="checkbox" /> <!--复选框，复选框允许用户在有限数量的选项中选择零个或多个选项-->
<input type="button" /> <!--按钮-->

<!-- HTML5 新增输入类型 -->
<!-- color/date/datetime/datetime-local/email/month/number/range/search/tel/time/url/week -->
<input type="number" /> <!--用于应该包含“数字值”的输入字段，能够对数字作出限制-->
<input type="date" /> <!--用于应该包含“日期”的输入字段-->
<input type="color" /> <!--用于应该包含“颜色”的输入字段-->
<input type="range" /> <!--用于应该包含“一定范围内的值”的输入字段-->
<input type="month" /> <!--允许用户选择月份和年份-->
<input type="week" /> <!--允许用户选择周和年-->
<input type="time" /> <!--允许用户选择时间（无时区）-->
<input type="datetime" /> <!--允许用户选择日期和时间（有时区）-->
<input type="datetime-local" /> <!--允许用户选择日期和时间（无时区）-->
<input type="email" /> <!--用于应该包含“电子邮件”的输入字段，能够在提交时自动对电子邮件地址进行验证-->
<input type="search" /> <!--用于搜索字段（搜索字段的表现类似常规的文本字段）-->
<input type="tel" /> <!--用于应该包含“电话号码”的输入字段-->
<input type="url" /> <!--用于应该包含“URL”的输入字段，在提交时能够自动验证 URL 字段-->
```

### 输入属性（输入限制）

* disabled	规定输入字段应该被**禁用**
* max	规定输入字段的最大值
* maxlength	规定输入字段的最大字符数
* min	规定输入字段的最小值
* pattern	规定通过其检查输入值的正则表达式
* readonly	规定输入字段为**只读**（无法修改）
* required	规定输入字段是必需的（必需填写）
* size	规定输入字段的宽度（**以字符计**）
* step	规定输入字段的合法数字间隔
* value	规定输入字段的默认值（⭐️初始值）

**HTML5 属性**

HTML5 为 `<input />` 增加了属性：`autocomplete` `autofocus` `form` `formaction` `formenctype` `formmethod` `formnovalidate` `formtarget` `height` `width` `list` `min` `max` `multiple` `pattern(ragexp)` `placeholder` `required` `step`

并为 `<form>` 增加了属性：`autocomplete` `novalidate`

* **autocomplete**	规定表单或输入字段是否应该自动完成。（若开启 `autocomplete="on"`，浏览器会基于用户之前的输入值自动填写值。）

  ⚠️ 您可以把表单的 autocomplete 设置为 on，同时把特定的输入字段设置为 off，反之亦然。

  autocomplete 属性适用于 `<form>` 以及如下 `<input>` 类型：text、search、url、tel、email、password、datepickers、range 以及 color。

  ```html
  <form action="action_page.php" autocomplete="on">
    First name: <input type="text" name="fname" /><br />
    Last name: <input type="text" name="lname" /><br />
    E-mail: <input type="email" name="email" autocomplete="off" /><br />
    <input type="submit" />
  </form>
  ```

  ⚠️ 在某些浏览器中，您也许需要**手动启用**自动完成功能。

* **novalidate**	属于 `<form>` 属性。如果设置，则 novalidate 规定在提交表单时不对表单数据进行验证。

### Input 表单属性（form* 属性）

#### form 属性

input 的 `form` 属性规定 `<input>` 元素所属的表单。此属性的值必须等于它所属的 `<form>` 元素的 id 属性。

```html
<!-- 位于 HTML 表单（但仍是表单的一部分）之外的输入字段 -->
<form action="/action_page.php" id="form1">
  <label for="fname">姓氏：</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <input type="submit" value="提交" />
</form>

<label for="lname">名字：</label>
<input type="text" id="lname" name="lname" form="form1" /><!--关注此处的form属性-->
```

#### formaction 属性

input 的 `formaction` 属性规定当提交表单时，对输入（数据）进行处理的文件的 URL。

⚠️ 该属性会覆盖 `<form>` 元素的 `action` 属性。

`formaction` 属性适用于以下输入类型：submit 和 image

```html
<!-- 带有两个提交按钮的 HTML 表单，它们具有不同的操作（action） -->
<form action="/action_page.php">
  <label for="fname">姓氏：</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <label for="lname">名字：</label>
  <input type="text" id="lname" name="lname" /><br /><br />
  <input type="submit" value="提交" />
  <input type="submit" formaction="/action_page2.php" value="以管理员提交" />
</form>
```

#### formenctype 属性

input 的 `formenctype` 属性指定提交表单时，应如何编码表单数据（仅适用于 `method="post"` 的表单 ）。

⚠️ 此属性会覆盖 `<form>` 元素的 `enctype` 属性。

`formenctype` 属性适用于以下输入类型：submit 和 image

```html
<!-- 有两个提交按钮的表单，第一个发送使用默认编码的表单数据，第二个发送编码为“multipart/form-data”的表单数据 -->
<form action="/action_page_binary.asp" method="post">
  <label for="fname">姓氏：</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <input type="submit" value="提交" />
  <input type="submit" formenctype="multipart/form-data" value="以 Multipart/form-data 编码提交" />
</form>
```

#### formmethod 属性

input 的 `formmethod` 属性定义了将表单数据发送到 action URL 的 HTTP 方法。

⚠️ 此属性将覆盖 `<form>` 元素的 `method` 属性。

`formmethod` 属性适用于以下输入类型：submit 和 image。

表单数据可以作为 URL 变量（`method="get"`）或作为 HTTP post 事务（`method="post"`）发送。

* 关于 GET 的注意事项：
  * 以名称/值对的形式将表单数据追加到 URL
  * 永远不要使用 GET 发送敏感数据！（提交的表单数据在 URL 中可见！）❗️
  * URL 的长度受到限制（2048 个字符）
  * 对于用户希望将结果添加为书签的表单提交很有用❗️
  * GET 适用于非安全数据，例如 Google 中的查询字符串
* 关于 POST 的注意事项：
  * 将表单数据附加在 HTTP **请求的正文中**（不在 URL 中显示提交的表单数据）❗️
  * POST 没有大小限制，可用于发送大量数据。
  * 带有 POST 的表单提交无法添加书签❗️

⚠️ 如果表单数据包含敏感信息或个人信息，请务必使用 POST！

```html
<!-- 有两个提交按钮的表单，第一个使用 method="get" 发送表单数据，第二个使用 method="post" 发送表单数据 -->
<form action="/action_page.php" method="get">
  <label for="fname">姓氏：</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <label for="lname">名字：</label>
  <input type="text" id="lname" name="lname" /><br /><br />
  <input type="submit" value="使用 GET 提交" />
  <input type="submit" formmethod="post" value="使用 POST 提交" />
</form>
```

#### formtarget 属性

input 的 `formtarget` 属性指定了一个名称或关键字，该名称或关键字规定在提交表单后在何处显示收到的响应。

⚠️ 此属性将覆盖 `<form>` 元素的 `target` 属性。

`formtarget` 属性适用于以下输入类型：submit 和 image。

```html
<!-- 有两个提交按钮且有不同目标窗口的表单 -->
<form action="/action_page.php">
  <label for="fname">姓氏：</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <label for="lname">名字：</label>
  <input type="text" id="lname" name="lname" /><br /><br />
  <input type="submit" value="提交" />
  <input type="submit" formtarget="_blank" value="提交到新窗口/标签页" />
</form>
```

#### formnovalidate 属性

input 的 `formnovalidate` 属性规定提交时不验证 `<input />` 元素。

⚠️ 此属性将覆盖 `<form>` 元素的 `novalidate` 属性。

`formnovalidate` 属性适用于以下输入类型：submit

```html
<!-- 有两个提交按钮的表单（进行和不进行验证） -->
<form action="/action_page.php">
  <label for="email">Enter your email：</label>
  <input type="email" id="email" name="email" /><br /><br />
  <input type="submit" value="提交" />
  <input type="submit" formmovalidate="formnovalidate" value="不进行验证的提交" />
</form>
```

#### novalidate 属性

`novalidate` 属性是 `<form>` 属性。

如果已设置，novalidate 属性规定在提交时不应验证所有表单数据。

```html
<!-- 规定在提交时不验证任何表单数据 -->
<form action="/action_page.php" novalidate>
  <label for="email">Enter your email：</label>
  <input type="email" id="email" name="email" /><br /><br />
  <input type="submit" value="提交" />
</form>
```

## HTML 图形🌹 ##

### 画布 Canvas ###

`canvas` 元素用于在网页上绘制图形。

HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图形。

画布是一个矩形区域，您可以控制其每一像素。

canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

```html
<!-- 1、创建 canvas 元素 -->
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
  Your browser does not support the canvas element.
</canvas>

<!-- 2、通过 JavaScript 来绘制（canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成） -->
<script type="text/javascript">
  var c = document.getElementById("myCanvas");
  var cxt = c.getContext("2d"); // 内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
  // 下面两行，绘制一个红色的矩形
  cxt.fillStyle = "#FF0000";
  cxt.fillRect(0, 0, 150, 75);

  // 绘制一条线
  cxt.moveTo(10, 10);
  cxt.lineTo(150, 150);
  cxt.lineTo(10, 50);
  cxt.stroke();

  // 绘制一个圆
  cxt.fillStyle = "#FF0000";
  cxt.beginPath();
  cxt.arc(70, 18, 15, 0, Math.PI*2, true);
  cxt.closePath();
  cxt.fill();

  // 渐变（使用您指定的颜色来绘制渐变背景）
  var grd = cxt.createLinearGradient(0, 0, 175, 50);
  grd.addColorStop(0, "#FF0000");
  grd.addColorStop(1, "#00FF00");
  cxt.fillStyle = grd;
  cxt.fillRect(0, 0, 175, 50);
</script>

<!-- 把一幅图像放置到画布上 -->
<script>
  window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream"); // 获取页面中的图像元素
    ctx.drawImage(img, 10, 10);
  };
</script>
```

### SVG ###

HTML5 支持内联 SVG。

**什么是 SVG？**

* SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
* SVG 用于定义用于网络的基于矢量的图形
* SVG 使用 XML 格式定义图形
* SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
* SVG 是万维网联盟的标准

**SVG 的优势（与其他图像格式相比，如 jpeg/gif）**

* SVG 图像可通过文本编辑器来创建和修改
* SVG 图像可被搜索、索引、脚本化或压缩
* SVG 是可伸缩的
* SVG 图像可在任何的分辨率下被高质量地打印
* SVG 可在图像质量不下降的情况下被放大

**浏览器支持：Internet Explorer 9、Firefox、Opera、Chrome 以及 Safari 支持内联 SVG。**

**把 SVG 直接嵌入 HTML 页面**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>SVG demo</title>
  </head>

  <body>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
      <!--绘制五角星-->
      <polygon points="100,10 40,180 190,60 10,60 160,180" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
    </svg>
  </body>
</html>
```

### 画布 *vs* SVG ###

**Canvas 和 SVG 都允许您在浏览器中创建图形，但是它们在根本上是不同的。**

* **SVG**

  SVG 是一种使用 XML 描述 2D 图形的语言。

  SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。

  在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

* **Canvas**

  Canvas 通过 JavaScript 来绘制 2D 图形。

  Canvas 是逐像素进行渲染的。

  在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

* **Canvas 与 SVG 的比较**

  * **Canvas**
    * 依赖分辨率
    * **不支持事件处理器**
    * 弱的文本渲染能力
    * 能够以 .png 或 .jpg 格式保存结果图像
    * 最适合图像密集型的游戏，其中的许多对象会被频繁重绘
  * **SVG**
    * 不依赖分辨率
    * **支持事件处理器**
    * 最适合带有大型渲染区域的应用程序（比如谷歌地图）
    * 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
    * 不适合游戏应用

## HTML 多媒体🌹 ##

### 多媒体 ###

**Web 上的多媒体指的是音效、音乐、视频和动画。**

现代网络浏览器已支持很多多媒体格式。

#### 什么是多媒体？

多媒体来自多种不同的格式。它可以是您**听到或看到的任何内容**，文字、图片、音乐、音效、录音、电影、动画等等。

在因特网上，您会经常发现**嵌入网页中的多媒体元素**，***现代浏览器已支持多种多媒体格式***。

#### 浏览器支持

不同的浏览器以不同的方式处理对音效、动画和视频的支持。某些元素能够以内联的方式处理，而某些则需要额外的插件。

#### 多媒体格式

多媒体元素（比如视频和音频）存储于媒体文件中。

确定媒体类型的最常用的方法是查看文件扩展名。当浏览器得到文件扩展名 .htm 或 .html 时，它会假定该文件是 HTML 页面。.xml 扩展名指示 XML 文件，而 .css 扩展名指示样式表。图片格式则通过 .gif 或 .jpg 来识别。

多媒体元素元素也拥有带有不同扩展名的文件格式，比如 .swf、.wmv、.mp3 以及 .mp4。

#### 视频格式

MP4 格式是一种新的即将普及的因特网视频格式。HTML5 、Flash 播放器以及优酷等视频网站均支持它。

| 格式      | 文件      | 描述                                                         |
| :-------- | :-------- | :----------------------------------------------------------- |
| AVI       | .avi      | AVI (Audio Video Interleave) 格式是由微软开发的。所有运行 Windows 的计算机都支持 AVI 格式。它是因特网上很常见的格式，但非 Windows 计算机并不总是能够播放。 |
| WMV       | .wmv      | Windows Media 格式是由微软开发的。Windows Media 在因特网上很常见，但是如果未安装额外的（免费）组件，就无法播放 Windows Media 电影。一些后期的 Windows Media 电影在所有非 Windows 计算机上都无法播放，因为没有合适的播放器。 |
| MPEG      | .mpg.mpeg | MPEG (Moving Pictures Expert Group) 格式是因特网上**最流行**的格式。它是跨平台的，得到了所有最流行的浏览器的支持。 |
| QuickTime | .mov      | QuickTime 格式是由苹果公司开发的。QuickTime 是因特网上常见的格式，但是 QuickTime 电影不能在没有安装额外的（免费）组件的 Windows 计算机上播放。 |
| RealVideo | .rm.ram   | RealVideo 格式是由 Real Media 针对因特网开发的。该格式允许低带宽条件下（在线视频、网络电视）的视频流。由于是低带宽优先的，质量常会降低。 |
| Flash     | .swf.flv  | Flash (Shockwave) 格式是由 Macromedia 开发的。Shockwave 格式需要额外的组件来播放。但是该组件会预装到 Firefox 或 IE 之类的浏览器上。 |
| Mpeg-4    | .mp4      | Mpeg-4 (with H.264 video compression) 是一种针对因特网的新格式。事实上，YouTube 推荐使用 MP4。YouTube 接收多种格式，然后全部转换为 .flv 或 .mp4 以供分发。越来越多的视频发布者转到 MP4，将其作为 Flash 播放器和 HTML5 的因特网共享格式。 |

#### 声音格式

| 格式      | 文件      | 描述                                                         |
| :-------- | :-------- | :----------------------------------------------------------- |
| MIDI      | .mid.midi | MIDI (Musical Instrument Digital Interface) 是一种针对电子音乐设备（比如合成器和声卡）的格式。MIDI 文件不含有声音，但包含可被电子产品（比如声卡）播放的数字音乐指令。[点击这里播放 The Beatles](https://www.w3school.com.cn/i/beatles.mid)。因为 MIDI 格式仅包含指令，所以 MIDI 文件极其小巧。上面的例子只有 23k 的大小，但却能播放将近 5 分钟。MIDI 得到了广泛的平台上的大量软件的支持。大多数流行的网络浏览器都支持 MIDI。 |
| RealAudio | .rm.ram   | RealAudio 格式是由 Real Media 针对因特网开发的。该格式也支持视频。该格式允许低带宽条件下的音频流（在线音乐、网络音乐）。由于是低带宽优先的，质量常会降低。 |
| Wave      | .wav      | Wave (waveform) 格式是由 IBM 和微软开发的。所有运行 Windows 的计算机和所有网络浏览器（除了 Google Chrome）都支持它。 |
| WMA       | .wma      | WMA 格式 (Windows Media Audio)，质量优于 MP3，兼容大多数播放器，除了 iPod。WMA 文件可作为连续的数据流来传输，这使它对于网络电台或在线音乐很实用。 |
| MP3       | .mp3.mpga | MP3 文件实际上是 MPEG 文件的声音部分。MPEG 格式最初是由运动图像专家组开发的。MP3 是其中最受欢迎的针对音乐的声音格式。期待未来的软件系统都支持它。 |

#### 使用哪种格式？

**WAVE** 是因特网上最受欢迎的***无压缩*** 声音格式，所有流行的浏览器都支持它。如果您需要未经压缩的声音（音乐或演讲），那么您应该使用 WAVE 格式。

**MP3** 是最新的***压缩*** 录制音乐格式。MP3 这个术语已经成为数字音乐的代名词。如果您的网址从事录制音乐，那么 MP3 是一个选项。

### 对象 `<object>`（插件） ###

插件（Plug-in）是扩展浏览器标准功能的计算机程序。

插件被设计用于许多不同的目的：

- 运行 Java 小程序
- 运行 ActiveX 控件
- 显示 Flash 电影
- 显示地图
- 扫描病毒
- 验证银行账号

⚠️ 大多数浏览器不再支持 Java Applet 和插件。

⚠️ 所有浏览器均不再支持 ActiveX 控件。

⚠️ 在现代浏览器中，对 Shockwave Flash 的支持也已关闭。

#### `<object>` 元素

所有浏览器均支持 `<object>` 元素。

`<object>` 元素定义 HTML 文档中的嵌入式对象。

它旨在将插件（例如 Java applet、PDF 阅读器和Flash播放器）嵌入网页中，但也可以用于将 HTML 包含在 HTML 中：

```html
<object width="100%" height="500px" data="snippet.html"></object>

<object data="audi.jpeg"></object>
```

#### `<embed>` 元素

所有主要浏览器均支持 `<embed>` 元素。

`<embed>` 元素也可定义了 HTML 文档中的嵌入式对象。

Web 浏览器长期以来一直支持 `<embed>` 元素。但是，它不属于 HTML5 之前的 HTML 规范的一部分。

```html
<embed src="audi.jpeg">
```

⚠️ `<embed>` 元素没有结束标记。它无法包含替代文本。

`<embed>` 元素也可用于在 HTML 中包含 HTML：

```html
<embed width="100%" height="500px" data="snippet.html">
```

### 音频 ###

在 HTML 中播放声音的方法有很多种。

#### 问题，以及解决方法

在 HTML 中播放音频并不容易！

您需要谙熟大量技巧，以确保您的音频文件在所有浏览器中（Internet Explorer, Chrome, Firefox, Safari, Opera）和所有硬件上（PC, Mac , iPad, iPhone）都能够播放。

#### 使用插件

浏览器插件是一种扩展浏览器标准功能的小型计算机程序。

插件有很多用途：播放音乐、显示地图、验证银行账号，控制输入等等。

可使用 `<object>` 或 `<embed>` 标签来将插件添加到 HTML 页面。

这些标签定义资源（通常非 HTML 资源）的容器，根据类型，它们即会由浏览器显示，也会由外部插件显示。

#### 使用 `<embed>` 元素

`<embed>` 标签定义外部（非 HTML）内容的容器。（这是一个 HTML5 标签，在 HTML4 中是非法的，但是所有浏览器中都有效）。

下面的代码片段能够显示嵌入网页中的 MP3 文件：

```html
<embed height="100" width="100" src="song.mp3" />
```

**问题：**

* `<embed>` 标签在 HTML4 中是无效的。页面无法通过 HTML4 验证。
* 不同的浏览器对音频格式的支持也不同。
* 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频。
* 如果用户的计算机未安装插件，无法播放音频。
* 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放。

⚠️ 使用 `<!DOCTYPE html> (HTML5)` 解决验证问题。

#### 使用 `<object>` 元素

`<object>` 标签也可以定义外部（非 HTML）内容的容器。

下面的代码片段能够显示嵌入网页中的 MP3 文件：

```html
<object height="100" width="100" data="song.mp3"></object>
```

**问题：**

* 不同的浏览器对音频格式的支持也不同。
* 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频。
* 如果用户的计算机未安装插件，无法播放音频。
* 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放。

#### 使用 HTML5 `<audio>` 元素

`<audio>` 元素是一个 HTML5 元素，在 HTML4 中是非法的，但是所有浏览器中都有效。

```html
<audio controls="controls">
  <source src="song.mp3" type="audio/mp3" />
  <source src="song.ogg" type="audio/ogg" />
  Your browser does not support this audio format.
</audio>
```

上面的例子使用了一个 mp3 文件，这样它在 Internet Explorer、Chrome 以及 Safari 中是有效的。

为了使这段音频在 Firefox 和 Opera 中同样有效，添加了一个 ogg 类型的文件。如果失败，会显示错误消息。

**问题：**

- `<audio>` 标签在 HTML 4 中是无效的。您的页面无法通过 HTML 4 验证。
- 您必须把音频文件转换为不同的格式。
- `<audio>` 元素在老式浏览器中不起作用。

⚠️ 使用 `<!DOCTYPE html> (HTML5)`  解决验证问题。

#### 最好的 HTML 解决方法

```html
<audio controls="controls" height="100" width="100">
  <source src="song.mp3" type="audio/mp3" />
  <source src="song.ogg" type="audio/ogg" />
  <embed height="100" width="100" src="song.mp3" />
</audio>
```

上面的例子使用了两个不同的音频格式。HTML5 `<audio>` 元素会尝试以 mp3 或 ogg 来播放音频。如果失败，代码将回退尝试 `<embed>` 元素。

**问题：**

- 您必须把音频转换为不同的格式。
- `<audio>` 元素无法通过 HTML 4 和 XHTML 验证。
- `<embed>` 元素无法通过 HTML 4 和 XHTML 验证。
- `<embed>` 元素无法回退来显示错误消息。

⚠️ 使用 `<!DOCTYPE html> (HTML5)` 解决验证问题。

#### 向网站添加音频的最简单方法

向网页添加音频的最简单的方法是什么？

雅虎的媒体播放器绝对算其中之一。

使用雅虎媒体播放器是一个不同的途径。您只需简单地让雅虎来完成歌曲播放的工作就好了。

它能播放 mp3 以及一系列其他格式。通过一行简单的代码，您就可以把它添加到网页中，轻松地将 HTML 页面转变为专业的播放列表。

##### 雅虎媒体播放器

```html
<a href="song.mp3">Play Sound</a>

<!-- 需要把这段 JavaScript 插入网页底部 -->
<script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script>
```

⚠️ 使用雅虎播放器是免费的。只需简单地把 MP3 文件链接到您的 HTML 中，JavaScript 会自动地为每首歌创建播放按钮。

雅虎媒体播放器为您的用户提供的是一个**小型的**播放按钮，而不是完整的播放器。不过，当您点击该按钮，会弹出完整的播放器。

⚠️ 这个播放器始终停靠在窗框底部。只需点击它，就可将其滑出。

##### 使用超链接

如果网页包含指向媒体文件的超链接，大多数浏览器会使用***“辅助应用程序”***来播放文件。

以下代码片段显示指向 mp3 文件的链接。如果用户点击该链接，浏览器会启动“辅助应用程序”来播放该文件：

```html
<a href="song.mp3">Play the sound</a>
```

##### 内联的声音

当您在网页中包含声音，或者作为网页的组成部分时，它被称为内联声音。

⚠️ 如果您打算在 web 应用程序中使用内联声音，您需要意识到很多人都觉得内联声音令人恼火。同时请注意，用户可能已经关闭了浏览器中的内联声音选项。

我们最好的建议是**只在用户希望听到**内联声音的地方包含它们。一个正面的例子是，在用户需要听到录音并点击某个链接时，会打开页面然后播放录音。

#### HTML 4.01 多媒体标签

| 标签                                                         | 描述                                         |
| :----------------------------------------------------------- | :------------------------------------------- |
| [`<applet>`](https://www.w3school.com.cn/tags/tag_applet.asp) | 不赞成。定义内嵌 applet。                    |
| `<embed>`                                                    | HTML4 中不赞成，HTML5 中允许。定义内嵌对象。 |
| [`<object>`](https://www.w3school.com.cn/tags/tag_object.asp) | 定义内嵌对象。                               |
| [`<param>`](https://www.w3school.com.cn/tags/tag_param.asp)  | 定义对象的参数。                             |

#### HTML 5 多媒体标签 ⭐️

| 标签                                                        | 描述                                 |
| :---------------------------------------------------------- | :----------------------------------- |
| [`<audio>`](https://www.w3school.com.cn/tags/tag_audio.asp) | 标签定义声音，比如音乐或其他音频流。 |
| [`<embed>`](https://www.w3school.com.cn/tags/tag_embed.asp) | 标签定义嵌入的内容，比如插件。       |

### 视频 ###

在 HTML 中播放视频的方法有很多种。

```html
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  <object data="movie.mp4" width="320" height="240">
    <embed src="movie.swf" width="320" height="240" />
  </object>
</video>
```

#### 问题，以及解决方法

在 HTML 中播放视频并不容易！

您需要谙熟大量技巧，以确保您的视频文件在所有浏览器中（Internet Explorer, Chrome, Firefox, Safari, Opera）和所有硬件上（PC, Mac , iPad, iPhone）都能够播放。

#### 使用 `<embed>` 元素

`<embed>` 标签的作用是在 HTML 页面中嵌入多媒体元素。

下面的 HTML 代码片段显示嵌入网页中的 Flash 视频：

```html
<embed src="movie.swf" height="200" width="200" />
```

**问题：**

* HTML4 无法识别 `<embed>` 标签。您的页面无法通过验证。
* 如果浏览器不支持 Flash，那么视频将无法播放。
* iPad 和 iPhone 不能显示 Flash 视频。
* 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放。

#### 使用 `<object>` 元素

`<object>` 标签的作用是在 HTML 页面中嵌入多媒体元素。

下面的 HTML 代码片段显示嵌入网页中的 Flash 视频：

```html
<object data="movie.swf" height="200" width="200"></object>
```

**问题：**

* 如果浏览器不支持 Flash，将无法播放视频。
* iPad 和 iPhone 不能显示 Flash 视频。
* 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放。

#### 使用 `<video>` 元素

`<video>` 是一个 HTML5 中的新标签。

`video` 标签的作用是在 HTML 页面中嵌入视频元素。

以下 HTML 片段会显示一段潜入网页的 ogg、mp4 或 webm 格式的视频：

```html
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
```

**问题：**

- 您必须把视频转换为不同的格式。
- `<video>` 元素在老式浏览器中无效。
- `<video>` 元素无法通过 HTML4 和 XHTML 验证。

#### 最好的 HTML 解决方法

**HTML 5 + `<object>` + `<embed>`**

```html
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  <object data="movie.mp4" width="320" height="240">
    <embed src="movie.swf" width="320" height="240" />
  </object>
</video>
```

上面的例子使用了四种不同的视频格式。HTML5 `<video>` 元素会尝试播放以 mp4 、ogg 或 webm 格式中的一种来播放视频。如果均失败，则回退到 `<embed>` 元素。

**问题：**

- 您必须把视频转换为很多不同的格式。
- `<video>` 元素无法通过 HTML 4 和 XHTML 验证。
- `<embed>` 元素无法通过 HTML 4 和 XHTML 验证。

⚠️ 使用 `<!DOCTYPE html> (HTML5)` 解决验证问题。

##### 优酷解决方案

在 HTML 中显示视频的最简单的方法是使用优酷等视频网站。

如果您希望在网页中播放视频，那么您可以把视频上传到优酷等视频网站，然后在您的网页中插入 HTML 代码即可播放视频：

```html
<embed src="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf" width="480" height="400" type="application/x-shockwave-flash">
</embed>
```

##### 使用超链接

如果网页包含指向媒体文件的超链接，大多数浏览器会使用***“辅助应用程序”***来播放文件。

以下代码片段显示指向 AVI 文件的链接。如果用户点击该链接，浏览器会启动“辅助应用程序”，比如 Windows Media Player 来播放这个 AVI 文件：

```html
<a href="movie.avi">Play a video file</a>
```

##### 关于内联视频的一段注释

当视频被包含在网页中时，它被称为**内联视频**。

如果您打算在 web 应用程序中使用内联视频，您需要意识到很多人都觉得内联视频令人恼火。

同时请注意，用户可能已经关闭了浏览器中的内联视频选项。

我们最好的建议是**只在用户希望看到**内联视频的地方包含它们。一个正面的例子是，在用户需要看到视频并点击某个链接时，会打开页面然后播放视频。

#### HTML 4.01 多媒体标签

| 标签                                                         | 描述                      |
| :----------------------------------------------------------- | :------------------------ |
| [`<applet>`](https://www.w3school.com.cn/tags/tag_applet.asp) | 不赞成。定义内嵌 applet。 |
| `<embed>`                                                    | 不赞成。（HTML5 中允许）  |
| [`<object>`](https://www.w3school.com.cn/tags/tag_object.asp) | 定义内嵌对象。            |
| [`<param>`](https://www.w3school.com.cn/tags/tag_param.asp)  | 定义对象的参数。          |

#### HTML 5 多媒体标签 ⭐️

| 标签                                                        | 描述                                 |
| :---------------------------------------------------------- | :----------------------------------- |
| [`<video>`](https://www.w3school.com.cn/tags/tag_video.asp) | 标签定义声音，比如音乐或其他音频流。 |
| [`<embed>`](https://www.w3school.com.cn/tags/tag_embed.asp) | 标签定义嵌入的内容，比如插件。       |

### YouTube ###

在 HTML 中包含视频的最简单的方法是 使用 YouTube。

#### 纠结视频格式？

将视频转换为不同的格式可能既困难又耗时。

一个更简单的解决方案是让 YouTube 在您的网页中播放视频。

#### YouTube Video Id

保存（或播放）视频时，YouTube 会显示一个 id（例如 ih1l6wb7LhU）。

您可以使用这个 id，并在 HTML 代码中引用您的视频。

#### 在 HTML 中保留 YouTube 视频

如需在网页上播放视频，请执行以下操作：

- 将视频上传到 YouTube
- 记下视频 id
- 在您的网页中定义 `<iframe>` 元素
- 让 `src` 属性指向视频的 URL
- 使用 `width` 和 `height` 属性来规定播放器的尺寸
- 向 URL 添加其他参数

```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/ih1l6wb7LhU">
</iframe>
```

#### YouTube Autoplay + Mute

您可以通过在 YouTube URL 上添加 autoplay=1 来让视频在用户访问页面时自动开始播放。但是，自动开始播放视频会让您的访问者感到烦恼！

⚠️ 在大多数情况下，Chromium 浏览器都不允许自动播放。但始终允许静音自动播放。

在 `autoplay=1` 之后添加 `mute=1`，可让您的视频自动开始播放（但已静音）。

**YouTube - Autoplay + Mute**

```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/ih1l6wb7LhU?autoplay=1&mute=1">
</iframe>
```

#### YouTube Playlist

以逗号分隔的要播放的视频列表（原始 URL 除外）。

#### YouTube Loop

添加 `loop=1` 会让您的视频永远循环。

值 0（默认）：视频将播放一次。

值 1：视频将循环（永远）。

**YouTube - Loop**

```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/ih1l6wb7LhU?playlist=ih1l6wb7LhU&loop=1">
</iframe>
```

#### YouTube Controls

添加 `controls=0` 会使视频播放器不显示控件。

值 0：播放器控件不显示。

值 1（默认）：播放器控件显示。

**YouTube - Controls**

```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/ih1l6wb7LhU?controls=0">
</iframe>
```

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

## HTML 5🌹🌹🌹🌹🌹

### HTML 5 简介

```html
<!DOCTYPE html>
<html>
  <head>
    <title>demo</title>
  </head>
  <body>
    <video width="420" controls>
      <source src="mov_bbb.mp4" type="video/mp4">
      <source src="mov_bbb.ogg" type="video/ogg">
      Your browser does not support the video tag.
    </video>
  </body>
</html>
```

#### 什么是 HTML5？

HTML5 是最新的 HTML 标准。

HTML5 是专门为承载丰富的 web 内容而设计的，并且无需额外插件。

HTML5 拥有新的语义、图形以及多媒体元素。

HTML5 提供的新元素和新的 API 简化了 web 应用程序的搭建。

HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行。

#### HTML5 中的新内容？

HTML5 的新的文档类型（DOCTYPE）声明非常简单：`<!DOCTYPE html>`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Title of the document</title>
  </head>

  <body>
    Content of the document......
  </body>
</html>
```

⚠️ HTML5 中默认的字符编码是 UTF-8。

#### HTML5 - 新的属性语法

HTML5 标准允许 4 种不同的属性语法。（在 `<input>` 标签中的使用，请参考表单 form）

#### HTML5 - 新特性

HTML5 的一些最有趣的新特性：

- 新的语义元素，比如 `<header>`, `<footer>`, `<article>`, and `<section>`。
- 新的表单控件，比如数字、日期、时间、日历和滑块。
- 强大的图像支持（借由 `<canvas>` 和 `<svg>`）
- 强大的多媒体支持（借由 `<video>` 和 `<audio>`）
- 强大的新 API，比如用**本地存储取代 cookie**。

#### HTML5 - 被删元素

以下 HTML 4.01 元素已从 HTML5 中删除：

```html
<acronym>
<applet>
<basefont>
<big>
<center>
<dir>
<font>
<frame>
<frameset>
<noframes>
<strike>
<tt>
```

### HTML 5 浏览器支持🌹

**您可以帮助老版本浏览器处理 HTML5。**

#### HTML5 浏览器支持

所有现代浏览器都支持 HTML5。

此外，所有浏览器，不论新旧，都会自动把**未识别元素当做行内元素来处理**。

正因如此，您可以帮助老式浏览器处理”未知的“ HTML 元素。

#### 把 HTML5 元素定义为块级元素

HTML5 定义了 ***8*** 个新的***语义*** HTML 元素。所有都是*块级*元素。

您可以把 CSS `display` 属性设置为 ***block***，以确保老式浏览器中正确的行为：

```css
header, section, footer, aside, nav, main, article, figure {
  display: block;
}
```

#### 向 HTML 添加新元素

您可以通过浏览器 trick 向 HTML 添加任何新元素：

本例向 HTML 添加了一个名为 `<myHero>` 的新元素，并为其定义 display 样式：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Creating an HTML Element</title>
    <!-- 这里的 JavaScript 语句 `document.createElement("myHero")` 仅适用于IE -->
    <script>document.createElement("myHero")</script>
    <style>
      myHero {
        display: block;
        background-color: #ddd;
        padding: 50px;
        font-size: 30px;
      }
    </style>
  </head>

  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    <myHero>My First Hero</myHero> <!--自定义新的元素 myHero-->
  </body>
</html>
```

#### Internet Explorer 的问题

上述方案可用于所有新的 HTML5 元素，但是：

⚠️ Internet Explorer 8 以及更早的版本，不允许对未知元素添加样式。

幸运的是，Sjoerd Visscher 创造了 "HTML5 Enabling JavaScript", ***"the shiv"***：

```html
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

以上代码是一段注释，但是 IE9 的早期版本会读取它（并理解它）。

#### 完整的 Shiv 解决方案👍⭐️

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Styling HTML5</title>
    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>

  <body>
    <h1>My First Article</h1>
    <article>
      London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.
    </article>
  </body>
</html>
```

引用 shiv 代码的链接必须位于 `<head>` 元素中，因为 Internet Explorer 需要在读取之前认识所有新元素。

#### HTML5 Skeleton

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>HTML5 Skeleton</title>
    <meta charset="utf-8" />
    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <style>
      body { font-family: Verdana, sans-serif; font-size: 0.8em; }
      header, nav, section, article, footer { border: 1px solid grey; margin: 5px; padding: 8px; }
      nav ul { margin: 0; padding: 0; }
      nav ul li { display: inline;  margin: 5px; }
    </style>
  </head>

  <body>
    <header>
      <h1>HTML5 Skeleton</h1>
    </header>

    <nav>
      <li><a href="html5_semantic_elements.asp">HTML5 Semantic</a></li>
      <li><a href="html5_geolocation.asp">HTML5 Geolocation</a></li>
      <li><a href="html5_canvas.asp">HTML5 Graphics</a></li>
    </nav>

    <section>
      <h1>Famous Cities</h1>

      <article>
        <h2>London</h2>
        <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
      </article>

      <article>
        <h2>Paris</h2>
        <p>Paris is the capital and most populous city of France.</p>
      </article>

      <article>
        <h2>Tokyo</h2>
        <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.</p>
      </article>
    </section>

    <footer>
      <p>© 2014 W3Schools. All rights reserved.</p>
    </footer>
  </body>
</html>
```

### HTML 5 新元素🌹🌹

#### 新的语义/结构元素

HTML5 提供的新元素可以构建更好的文档结构：

```html
<article>定义文档内的文章</article>
<aside>定义页面内容之外的内容</aside>

<bdi>定义与其他文本不同的文本方向</bdi>
<details>定义用户可查看或隐藏的额外细节</details>
<dialog>定义对话框或窗口</dialog>

<figcaption></figcaption> <!--定义 <figure> 元素的标题-->
<figure>定义自包含内容，比如图示、图表、照片、代码清单等等</figure>

<footer>定义文档或节的页脚</footer>
<header>定义文档或节的页眉</header>
<main>定义文档的主内容</main>

<mark>定义重要或强调的内容</mark>
<menuitem>定义用户能够从弹出菜单调用的命令/菜单项目</menuitem>
<meter>定义已知范围（尺度）内的标量测量</meter>
<nav>定义文档内的导航链接</nav>
<progress>定义任务进度</progress>

<rp>定义在不支持 ruby 注释的浏览器中显示什么</rp>
<rt>定义关于字符的解释/发音（用于东亚字体）</rt>
<ruby>定义 ruby 注释（用于东亚字体）</ruby>

<section>定义文档中的节</section>
<summary></summary> <!--定义 <details> 元素的可见标题-->

<time>定义日期/时间</time>
<wbr>定义可能的折行（line-break）</wbr>
```

#### 新的表单元素

```html
<datalist>定义输入控件的预定义选项</datalist>
<keygen>定义键对生成器字段（用于表单）</keygen>
<output>定义计算结果</output>
```

#### 新的输入类型

| 新的输入类型                                                 | 新的输入属性                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `color` `date` `datetime` `datetime-locale` `mail` `month` `number` `range` `search` `tel` `time` `url` `week` | `autocomplete` `autofocus` `form` `formaction` `formenctype` `formmethod` `formnovalidate` `formtarget` `height 和 width` `list` `min 和 max` `multiple` `pattern (regexp)` `placeholder` `required` `step` |

#### HTML5-新的属性语法

HTML5 允许四种不同的属性语法。

该例演示 `<input>` 标签中使用的不同语法：

| 属性语法 | 描述                                              |
| :------- | :------------------------------------------------ |
| 空       | `<input type="text" value="Bill Gates" disabled>` |
| 未引用   | `<input type="text" value=Bill>`                  |
| 双引号   | `<input type="text" value="Bill Gates">`          |
| 单引号   | `<input type="text" value='Bill Gates'>`          |

在 HTML5 中，根据属性所需，可能会使用所有这四种语法。

#### HTML5 图像

| 标签       | 描述                             |
| :--------- | :------------------------------- |
| `<canvas>` | 定义使用 JavaScript 的图像绘制。 |
| `<svg>`    | 定义使用 SVG 的图像绘制。        |

#### 新的媒介元素

| 标签        | 描述                                 |
| :---------- | :----------------------------------- |
| `<audio>` ⭐️ | 定义声音或音乐内容。                 |
| `<embed>`   | 定义外部应用程序的容器（比如插件）。 |
| `<source>`  | 定义 `<video>` 和 `<audio>` 的来源。 |
| `<track>`   | 定义 `<video>` 和 `<audio>` 的轨道。 |
| `<video>` ⭐️ | 定义视频或影片内容。                 |

### HTML 5 迁移

[HTML 5 迁移](https://www.w3school.com.cn/html/html5_migration.asp) 

把一张已有的 HTML4 页面转换为 HTML5 页面，在不破坏如何原始内容和结构的情况下。

⚠️ 您可以使用相同的技巧从 HTML4 以及 XHTML 迁移至 HTML5。

|     典型的 HTML4     | 典型的 HTML5 |
| :------------------: | :----------: |
| `<div id="header">`  |  `<header>`  |
|  `<div id="menu">`   |   `<nav>`    |
| `<div id="content">` | `<section>`  |
|  `<div id="post">`   | `<article>`  |
| `<div id="footer">`  |  `<footer>`  |

* HTML4：

  ```html
  <!-- Doctype -->
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
  "http://www.w3.org/TR/html4/loose.dtd">
  
  <!-- 编码 -->
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  ```

* HTML5：

  ```html
  <!-- Doctype -->
  <!DOCTYPE html>
  
  <!-- 编码 -->
  <meta charset="utf-8">
  
  <!-- 添加 shiv -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  ```

**`<article>` `<section>` 与  `<div>` 之间的差异：**

在 HTML5 标准中，`<article>` `<section>` 与 `<div>` 之间的差异很小，令人困惑。

在 HTML5 标准中：

* `<section>` 元素被定位为相关元素的块。
* `<article>` 元素被定义为相关元素的完整的**自包含块**。

* `<div>` 元素被定义为子元素的块。

**简单理解：**我们可以使用 `<section>` 作为相关 `<articles>` 的容器。也能够把 `<article>` 用作文章的容器。

## HTML API

### HTML 5 地理定位

**HTML5 Geolocation（地理定位）用于定位用户的位置。**

#### 定位用户的位置

HTML5 Geolocation API 用于获得**用户的地理位置**。

⚠️ 鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

#### 浏览器支持

Internet Explorer 9、Firefox、Chrome、Safari 以及 Opera 支持地理定位。

⚠️ 对于拥有 GPS 的设备，比如 iPhone，地理定位更加精确。

#### HTML5-使用地理位置

请使用 getCurrentPosition() 方法来获得用户的位置。

```html
<!-- 一个简单的地理定位实例：可返回用户位置的`经度`和`纬度` -->
<!DOCTYPE html>
<html>
  <head>
    <title>demo</title>
  </head>
  
  <body>
    <p id="demo">点击这个按钮，获得您的坐标：</p>
    <button onclick="getLocation()">试一下</button>
    
    <script>
      var x = document.getElementById("demo");
      
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(shouPosition);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      
      function shouPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
          "<br />Longitude: " + position.coords.longitude;
      }
    </script>
  </body>
</html>
```

**解释：**

* 检测是否支持地理定位
* 如果支持，则运行 getCurrentPosition() 方法。如果不支持，则向用户显示一段消息。
* 如果 `getCurrentPosition()` 运行成功，则向参数 showPosition 中规定的函数返回一个 **coordinates 对象**
* `showPosition()` 函数获得并显示**经度**和**纬度**

⚠️ 该例子是一个非常基础的地理定位脚本，不含错误处理。

#### 处理错误和拒绝

`getCurrentPosition()` 方法的第二个参数用于处理错误。它规定当获取用户位置失败时运行的函数：

```js
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED: // 用户不允许地理位置
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE: // 无法获取当前位置
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT: // 操作超时
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}
```

#### 在地图中显示结果

如需在地图中显示结果，您需要访问可使用经纬度的**地图服务**，比如谷歌地图或百度地图：

```js
function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;
  
  // 使用脚本来显示带有标记、缩放和拖曳选项的交互式地图
  var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
  
  // 使用返回的经纬度数据在谷歌地图中显示位置（使用静态图像）。
  document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "' />";
}
```

#### 给定位置的信息

在地图上显示用户的位置。不过，地理定位对于给定位置的信息同样很有用处。

**案例：**

* 更新本地信息
* 显示用户周围的兴趣点
* 交互式车载导航系统（GPS）

#### getCurrentPosition() 方法 - 返回数据

若成功，则 `getCurrentPosition()` 方法返回对象。始终会返回 latitude、longitude 以及 accuracy 属性。如果可用，则会返回其他下面的属性。

| 属性                    | 描述                   |
| :---------------------- | :--------------------- |
| coords.latitude         | 十进制数的**纬度**     |
| coords.longitude        | 十进制数的**经度**     |
| coords.accuracy         | **位置精度**           |
| coords.altitude         | 海拔，海平面以上以米计 |
| coords.altitudeAccuracy | 位置的海拔精度         |
| coords.heading          | 方向，从正北开始以度计 |
| coords.speed            | 速度，以米/每秒计      |
| timestamp               | 响应的日期/时间        |

#### Geolocation 对象 - 其他有趣的方法

`watchPosition()` 返回**用户的当前位置**，并继续返回用户移动时的更新位置（就像汽车上的 GPS）。

`clearWatch()` 停止 watchPosition() 方法

**实例：**

```html
<!-- 下面的例子展示 watchPosition() 方法。您需要一台精确的 GPS 设备来测试该例（比如 iPhone）-->
<script>
  var x = document.getElementById("demo");
  function getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
          "<br />Longitude: " + position.coords.longitude;
  }
</script>
```

### HTML 5 拖放🌹

#### 拖放

拖放（Drag 和 Drop）是很常见的特性。它指的是您抓取某物并拖入不同的位置。

拖放是 HTML5 标准的组成部分：任何元素都是可拖放的。

#### 浏览器支持

表格中的数字指示了完全支持拖放的首个浏览器版本。

| API  | 谷歌浏览器 | IE 浏览器 | 火狐浏览器 | Safari 浏览器 | Opera 浏览器 |
| ---- | ---------- | --------- | ---------- | ------------- | ------------ |
| 拖放 | 4.0        | 9.0       | 3.5        | 6.0           | 12.0         |

#### HTML 拖放实例

```html
<!DOCTYPE html>
<html>
  <head>
    <title>demo</title>
    <script>
      function allowDrap(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
    </script>
  </head>
  
  <body>
    <div id="div1" ondrap="drop(event)" ondragover="allowDrap(event)"></div>
    <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69" />
  </body>
</html>
```

#### 把元素设置为可拖放

**首先：**为了把一个元素设置为可拖放，请把 draggable 属性设置为 true：`<img draggable="true">`

#### 拖放的内容 - `ondragstart` 和 `setData()`

**然后：**规定当元素被拖动时发生的事情。

在上面的例子中，`ondragstart` 属性调用了一个 `drag(event)` 函数，规定拖动什么数据。

`dataTransfer.setData()` 方法设置被拖动数据的**数据类型**和**值**：

```js
function drag(ev) {
  // 数据类型："text"
  // 值：可拖动的元素的id("drag1")
  ev.dataTransfer.setData("text", ev.target.id);
}
```

#### 拖到何处 - `ondragover`

`ondragover` 事件规定被拖动的数据能够被放置到何处。

默认地，数据/元素无法被放置到其他元素中。为了实现拖放，我们必须阻止元素的这种默认的处理方式。

这个任务由 `ondragover` 事件的 `event.preventDefault()` 方法完成。

#### 进行放置 - `ondrop`

当放开被拖数据时，会发生 `drop` 事件。

在上面的例子中，`ondrop` 属性调用了一个函数，`drop(event)`：

```js
function drop(ev) {
  ev.preventDefault(); // 阻止浏览器默认处理方式
  var data = ev.dataTransfer.getData("text"); // 获得被拖的数据
  ev.target.appendChild(document.getElementById(data)); // 把被拖元素追加到放置元素中
}
```

**代码解释：**

- 调用 preventDefault() 来阻止数据的浏览器默认处理方式（drop 事件的默认行为是以链接形式打开）
- 通过 dataTransfer.getData() 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据
- 被拖数据是被拖元素的 id ("drag1")
- 把被拖元素追加到放置元素中

#### 更多实例 - 来回拖放图片

如何在两个 `<div>` 元素之间来回拖放图像：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>demo</title>
    <style type="text/css">
      #div1, #div2 { float: left; width: 198px; height: 66px; margin: 10px; padding: 10px; border: 1px solid #aaaaaa; }
    </style>
    <script type="text/javascript">
      function allowDrap(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
      }
    </script>
  </head>
  
  <body>
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img src="/i/eg_dragdrop_w3school.gif" draggable="true" ondragstart="drag(event)" id="drag1" />
    </div>
    <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
  </body>
</html>
```

### HTML 5 Web 存储（本地存储）🌹

❗️**HTML 本地存储：优于 cookies。**

#### 什么是 HTML 本地存储？

通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。

在 HTML5 之前，应用程序数据只能存储在 cookie 中，包括每个服务器请求。本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。

与 cookie 不同，存储限制要大得多（至少5MB），并且信息不会被传输到服务器。

本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。

#### 浏览器支持

表格中的数组指示了完全支持本地存储的首个浏览器版本。

| API         | 谷歌浏览器 | IE 浏览器 | 火狐浏览器 | Safari 浏览器 | Opera 浏览器 |
| ----------- | ---------- | --------- | ---------- | ------------- | ------------ |
| Web Storage | 4.0        | 8.0       | 3.5        | 4.0           | 11.5         |

#### HTML 本地存储对象

HTML 本地存储提供了两个在客户端存储数据的对象：

- `window.localStorage` 存储没有截止日期的数据
- `window.sessionStorage` 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失）

⚠️ 在使用本地存储时，请检测 `localStorage` 和 `sessionStorage` 的浏览器支持：

```js
if (typeof(Storage) !== "undefined") {
  // 针对 localStorage/sessionStorage 的代码
} else {
  // 抱歉！不支持 Web Storage ..
}
```

#### localStorage 对象

`localStorage` 对象存储的是没有截止日期的数据。当浏览器被关闭时数据不会被删除，在下一天、周或年中，都是可用的。

```js
// 存储
localStorage.setItem("lastname", "Gates");
// 取回
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// ==== 上面的例子也可以这样写： ====
localStorage.lastname = "Gates"; // 存储
document.getElementById("result").innerHTML = localStorage.lastname; // 取回
```

**解释：**

- 创建 localStorage 名称/值对，其中：name="lastname"，value="Gates"
- 取回 "lastname" 的值，并把它插到 id="result" 的元素中

删除 "lastname" localStorage 项目的语法如下：

```js
localStorage.removeItem("lastname");
```

**注释：名称/值对始终存储为字符串。如果需要请记得把它们转换为其他格式！**

下面的例子对用户点击按钮的次数进行计数。在代码中，值字符串被转换为数值，依次对计数进行递增：

```js
if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
    localStorage.clickcount = 1;
}
document.getElementById("result").innerHTML = "您已经点击这个按钮 " + localStorage.clickcount + " 次。";
```

#### sessionStorage 对象

`sessionStorage` 对象等同 localStorage 对象，不同之处在于只对一个 session 存储数据。如果用户关闭具体的浏览器标签页，数据也会被删除。

下例在当前 session 中对用户点击按钮进行计数：

```js
if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else {
    sessionStorage.clickcount = 1;
}
document.getElementById("result").innerHTML = "在本 session 中，您已经点击这个按钮 " + sessionStorage.clickcount + " 次。";
```

### HTML 5 应用缓存（应用程序缓存）🌹

**使用应用程序缓存，通过创建 cache manifest 文件，可轻松创建 web 应用的离线版本。**

#### 什么是应用程序缓存？

HTML5 引入了应用程序缓存（Application Cache），这意味着可对 web 应用进行缓存，并可在没有因特网连接时进行访问。

应用程序缓存为应用带来三个优势：

1. **离线浏览** - 用户可在应用离线时使用它们
2. **速度** - 已缓存资源加载得更快
3. **减少服务器负载** - 浏览器将只从服务器下载更新过或更改过的资源

#### 浏览器支持

表格中的数字指示了完全支持应用程序缓存的首个浏览器版本。

| API               | 谷歌浏览器 | IE 浏览器 | 火狐浏览器 | Safari 浏览器 | Opera 浏览器 |
| ----------------- | ---------- | --------- | ---------- | ------------- | ------------ |
| Application Cache | 4.0        | 10.0      | 3.5        | 4.0           | 11.5         |

#### HTML Cache Manifest 实例

下例展示了带有 cache manifest 的 HTML 文档（供离线浏览）：

```html
<!DOCTYPE html>
<html manifest="demo.appcache">
  <body>
    文档内容 ……
  </body>
</html>
```

#### Cache Manifest 基础

如需启用应用程序缓存，请在文档的 `<html>` 标签中包含 manifest 属性：

```html
<!DOCTYPE html>
<html manifest="demo.appcache">
  ……
</html>
```

每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。

manifest 文件的建议文件扩展名是：**".appcache"**。

**⚠️ 注意：**manifest 文件需要设置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置。

#### Manifest 文件

manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。

manifest 文件有三个部分：

- **CACHE MANIFEST** - 在此标题下列出的文件将在首次下载后进行缓存
- **NETWORK** - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
- **FALLBACK** - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

##### CACHE MANIFEST

第一行，CACHE MANIFEST，是必需的：

```appcache
CACHE MANIFEST
/theme.css
/logo.gif
/main.js
```

上面的 manifest 文件列出了三个资源：一个 CSS 文件，一个 GIF 图像，以及一个 JavaScript 文件。当 manifest 文件被加载后，浏览器会从网站的根目录下载这三个文件。然后，无论用户何时与因特网断开连接，这些资源依然可用。

##### NETWORK

下面的 NETWORK 部分规定文件 "login.php" 永远不会被缓存，且离线时是不可用的：

```appcache
NETWORK:
login.asp
```

可以使用星号来指示所有其他其他资源/文件都需要因特网连接：

```appcache
NETWORK:
*

FALLBACK
```

下面的 FALLBACK 部分规定如果无法建立因特网连接，则用 "offline.html" 替代 /html/ 目录中的所有文件：

```appcache
FALLBACK:
/html/ /offline.html
```

**注释：**第一个 URI 是资源，第二个是替补。

#### 更新缓存

一旦应用被缓存，它就会保持缓存直到发生下列情况：

- 用户清空浏览器缓存
- manifest 文件被修改
- 由程序来更新应用缓存

#### 实例 - 完整的 Cache Manifest 实例

```appcache
CACHE MANIFEST
# 2012-02-21 v1.0.0
/theme.css
/logo.gif
/main.js

NETWORK:
login.asp

FALLBACK:
/html/ /offline.html
```

**提示：**以 "#" 开头的是注释行，但也可满足其他用途。应用的缓存只会在其 manifest 文件改变时被更新。如果您编辑了一幅图像，或者修改了一个 JavaScript 函数，这些改变都不会被重新缓存。更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法。

#### 关于应用程序缓存的注意事项

**‼️请留心缓存的内容。**

一旦文件被缓存，则浏览器会继续展示已缓存的版本，即使您修改了服务器上的文件。为了确保浏览器更新缓存，您需要更新 manifest 文件。

**注释：**浏览器对缓存数据的容量限制可能不太一样（某些浏览器的限制是每个站点 5MB）。

### HTML 5 Web Workers🌹🌹

**Web Worker 是运行在后台的 JavaScript，不会影响页面的性能。**

#### 什么是 Web Worker？

当在 HTML 页面中执行脚本时，页面是不可响应的，直到脚本已完成。

Web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 运行在后台。

#### 浏览器支持

表格中的数字指示了完全支持 Web Worker 的首个浏览器版本。

| API        | 谷歌浏览器 | IE 浏览器 | 火狐浏览器 | Safari 浏览器 | Opera 浏览器 |
| ---------- | ---------- | --------- | ---------- | ------------- | ------------ |
| Web Worker | 4.0        | 10.0      | 3.5        | 4.0           | 11.5         |

#### HTML Web Workers 实例

下面的例子创建了一个简单的 web worker，在后台计数：

计数：

启动 Worker 停止 Worker

```html
<!DOCTYPE html>
<html>
  <head>
    <title>demo</title>
  </head>
  
  <body>
    <p>计数: <output id="result"></output></p>
    <button onclick="startWorker()">开始 Worker</button>
    <button onclick="stopWorker()">停止 Worker</button>
    <br /><br />
    
    <script>
      var w;
      function startWorker() {
        if(typeof(Worker) !== "undefined") {
          if(typeof(w) == "undefined") {
            w = new Worker("/example/html5/demo_workers.js")
          }
          w.onmessage = function (event) {
            document.getElementById("result").innerHTML = event.data;
          }
        } else {
          document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
        }
      }
      
      function stopWorker() {
        w.terminate();
      }
    </script>
  </body>
</html>
```

#### 检测 Web Worker 支持

在创建 web worker 之前，请检测用户浏览器是否支持它：

```js
if(typeof(Worker) !== "undefined") {
  // 是的！支持 Web worker！
  // 一些代码……
} else {
  // 抱歉！不支持 Web worker！
  // Sorry, your browser does not support Web Workers...
}
```

#### 创建 Web Worker 文件

现在，让我们在一个外部 JavaScript 文件中创建我们的 web worker。

在此处，我们创建了计数脚本。该脚本存储于 "demo_workers.js" 文件中：

```js
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i); // 用于向 HTML 页面传回一段消息
  setTimeout("timedCount()", 500);
}

timedCount();
```

以上代码中重要的部分是 postMessage() 方法 - 它用于向 HTML 页面传回一段消息。

**注释:** web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务。

#### 创建 Web Worker 对象

现在我们已经有了 web worker 文件，我们需要从 HTML 页面调用它。

下面的代码行检测是否存在 worker，如果不存在，- 它会创建一个新的 web worker 对象，然后运行 "demo_workers.js" 中的代码：

```js
if(typeof(w) == "undefined") {
  w = new Worker("demo_workers.js")
}
```

然后我们就可以从 web worker 发生和接收消息了。

向 web worker 添加一个 "onmessage" 事件监听器：

```js
w.onmessage = function (event) {
  document.getElementById("result").innerHTML = event.data;
};
```

当 web worker 传送消息时，会执行事件监听器中的代码。来自 web worker 的数据会存储于 event.data 中。

#### 终止 Web Worker

当创建 web worker 后，它会继续监听消息（即使在外部脚本完成后）直到其被终止为止。

如需终止 web worker，并释放浏览器/计算机资源，请使用 terminate() 方法：`w.terminate();`

#### 复用 Web Worker

如果您把 worker 变量设置为 undefined，在其被终止后，可以重复使用该代码：`w = undefined;`

#### 完整的 Web Worker 实例代码

我们已经看到了 .js 文件中的 Worker 代码。下面是 HTML 页面的代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>demo</title>
  </head>
  
  <body>
    <p>计数: <output id="result"></output></p>
    <button onclick="startWorker()">开始 Worker</button>
    <button onclick="stopWorker()">停止 Worker</button>
    <br /><br />
    
    <script>
      var w;
      
      function startWorker() {
        if(typeof(Worker) !== "undefined") {
          if(typeof(w) == "undefined") {
            w = new Worker("demo_workers.js")
          }
          w.onmessage = function (event) {
            document.getElementById("result").innerHTML = event.data;
          }
        } else {
          document.getElementById("result").innerHTML = "Sorry, No Web Worker wupport.";
        }
      }
      
      function stopWorker() {
        w.terminate();
        w = undefined;
      }
    </script>
  </body>
</html>
```

#### Web Worker 和 DOM

由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象：

- window 对象
- document 对象
- parent 对象

### HTML 5 SSE（Server-Sent 事件）

**Server-Sent 事件允许网页从服务器获得更新。**

#### Server-Sent 事件 - One Way Messaging

Server-Sent 事件指的是网页自动从服务器获得更新。

以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过 Server-Sent 事件，更新能够自动到达。

例如：Facebook/Twitter 更新、股价更新、新的博文、赛事结果，等等。

#### 浏览器支持

表格中的数字指示了完全支持 Server-Sent 事件的首个浏览器版本。

| API                     | 谷歌浏览器 | IE 浏览器 | 火狐浏览器 | Safari 浏览器 | Opera 浏览器 |
| ----------------------- | ---------- | --------- | ---------- | ------------- | ------------ |
| SSE（Server-Sent 事件） | 6.0        | 不支持    | 6.0        | 5.0           | 11.5         |

#### 接收 Server-Sent 事件通知

EventSource 对象用于接收服务器发送事件通知：

```js
var source = new EventSource("demo_sse.php");
source.onmessage = function (event) {
  document.getElementById("result").innerHTML += event.data + "<br />";
};
```

**例子解释：**

- 创建一个新的 EventSource 对象，然后规定发送更新的页面的 URL（本例中是 "demo_sse.php"）
- 每当接收到一次更新，就会发生 onmessage 事件
- 当 onmessage 事件发生时，把已接收的数据推入 id 为 "result" 的元素中

#### 检测 Server-Sent 事件支持

```js
if(typeof(EventSource) !== "undefined") {
  // 是的！支持服务器发送事件！
  // 一些代码……
} else {
  // 抱歉！不支持服务器发送事件！
}
```

#### 服务器代码实例

为了使上例运行，您需要能够发送数据更新的服务器（比如 PHP 或 ASP）。

服务器端事件流的语法非常简单。请把 "Content-Type" 报头设置为 "text/event-stream"。现在，您可以开始发送事件流了。

**PHP 中的代码（demo_sse.php）：**

```php
<?php
  header('Content-Type: text/event-stream');
  header('Cache-Control: no-cache');

  $time = date('r');
  echo "data: The server time is: {$time}\n\n";
  flush();
?>
```

**ASP 中的代码（VB）（demo_sse.asp）：**

```asp
<%
  Response.ContentType = "text/event-stream"
  Response.Expires = -1
  Response.Write("data: The server time is: " & now())
  Response.Flush()
%>
```

**代码解释：**

- 把报头 "Content-Type" 设置为 "text/event-stream"
- 规定不对页面进行缓存
- 输出要发送的日期（始终以 "data: " 开头）
- 向网页刷新输出数据

#### EventSource 对象

在上例中，我们使用 onmessage 事件来获取消息。不过还可以使用其他事件：

| 事件      | 描述                     |
| :-------- | :----------------------- |
| onopen    | 当通往服务器的连接被打开 |
| onmessage | 当接收到消息             |
| onerror   | 当发生错误               |
