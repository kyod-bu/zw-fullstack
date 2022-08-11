# HTML 参考手册

## HTML 元素（功能排序）🌹

[HTML 元素（功能排序）](https://www.w3school.com.cn/tags/html_ref_byfunc.asp)

### 基础

```html
<!DOCTYPE html>	定义文档类型
<html>
  <head>
    <title>文档标题</title>
  </head>
  <body>
    <h1>标题1～6</h1>
    <p>段落</p>
    <br /> <!--换行-->
    <hr /> <!--水平线-->
  </body>
</html>
```

### 格式化🌹🌹

```html
<abbr>	定义缩写。⭐️

<!-- address 定义文档作者或拥有者的联系信息。-->
<address>
  Written by <a>Donald Duck</a>.<br />
  Visit us at: Example.com<br />
  Box 564, Disneyland USA
</address>
  
<bdi dir="ltr">	定义文本的文本方向，使其脱离其周围文本的方向设置。【属性：dir: ltr(auto)/rtl/auto】</bdi>
<bdo dir="ltr">	定义文字方向。【属性：dir: ltr(auto)/rtl/auto】</bdo>
  
<!--引用-->
<blockquote>	定义长的引用。</blockquote>
<q>	定义短的引用。</q>
  
<!--文本设置-->
<tt>,<i>,<b>,<big>,<small> 均是字体样式元素，不反对使用。但如果只是单纯的改变文本样式，建议使用样式表来取得更见丰富的效果。
  
<em>,<strong>,<dfn>,<code>,<samp>,<kbd>,<var>,<cite> 均是短语元素，虽然文本呈现出特殊样式，但实际上，它们都拥有确切的语义。不反对使用。但如果只是为了达到某种视觉效果，建议使用样式表来取得更见丰富的效果。
 
<del>	定义被删除文本。【属性：cite: URL（指向一个文档的URL，可解释文本被删原因）；datetime：YYYYMMDD（被删除的日期和时间）】
<ins>	定义被插入文本。【属性同 del。这两个元素可一同使用，来描述文档中的更新和修正】
  🌰 举例：a dozen is <del>20</del><ins>12</ins> pieces.

<mark>	定义有记号的文本。【突出显示部分文本】
<meter>	定义预定义范围内的度量。【度量给定范围内的数据】⭐️⭐️⭐️
  🌰 举例：磁盘用量、查询结果的相关性，等等。
  ⚠️ 备注：<meter>标签不应用于指示进度（在进度条中）。如果标记进度条，请使用<progress>标签。
<progress value="22" max="100"></progress>	定义任何类型的任务的进度。⭐️⭐️⭐️
  
<pre>	定义预格式文本。【被包围在pre元素间的文本，通常会保留空格和换行，而文本也会呈现为等宽字体】常用来表示计算机的源代码。⭐️⭐️⭐️

<rp>	定义若浏览器不支持 ruby 元素显示的内容。
<rt>	定义 ruby 注释的解释。
<ruby>	定义 ruby 注释。

<sup>	定义上标文本。
<sub>	定义下标文本。

<template>	定义用作容纳页面加载时隐藏内容的容器。【template 中的内容可以稍后使用 JavaScript 呈现】⭐️⭐️⭐️
⚠️ 如果有一些需要重复使用的 HTML 代码，则可以使用 template 标记。如果没有 template 标记的情况下执行此操作，必须使用 JavaScript 创建 HTML 代码，以防止浏览器呈现这些代码。
🌰 举例：对数组中的每个元素，都使用一个新的div元素来填充网页。每个div元素的 HTML 代码都在 template 元素内。

<time>	定义日期/时间。【目前主流的浏览器都不支持 time 标签】【属性：datetime；pubdate】

<wbr>	定义可能的换行符。【如果单词太长，或者担心浏览器会在错误的位置换行，可以使用 wbr 元素来添加 Word Break Opportunity】
```

```html
<!-- template 元素实例 -->
<button onclick="showContent()">显示被隐藏的内容</button>

<template>
  <div class="myClass">我喜欢：</div>
</template>

<script>
  var myArr = ["Audi", "BMW", "Ford", "Honda", "Jaguar", "Nissan"];
  function showContent() {
    var temp, item, a, i;
    temp = document.getElementsByTagName("template")[0];
    item = temp.content.querySelector("div");
    for(i=0; i<myArr.length; i++) {
      a = document.importNode(item, true);
      a.textContent += myArr[i];
      document.body.appendChild(a);
    }
  }
</script>

<script>
  // 检查 <template> 的浏览器支持
  if(document.createElement("template").content) {
    document.write("Your browser supports template!");
  } else {
    document.write("你的浏览器不支持 template！");
  }
</script>
```

### 表单和输入🌹🌹🌈

**表单输入常用：**

* 输入文本：text、textarea、number
* 开关：switch
* 选择：
  * 单选：radio
  * 多选：checkbox、select、treeselect
* 日期时间：datepicker、cascader、rangepicker
* 上传：file、image

```html
<form>	定义供用户输入的 HTML 表单。【常用属性：action; method】
  
<label>	定义 input 元素的标注。  
<input />	定义输入控件。【type：button,checkbox,file,hidden,image,password,radio,reset,submit,text】
<datalist>	定义下拉列表。【datalist 标签定义选项列表。请配合 input 元素使用，来定义 input 可能的值】
  ⚠️ datalist 及其选项不会被显示出来，它仅仅是合法的输入值列表
  <!--举例-->
  <input id="myCar" list="cars" />
  <datalist id="cars">
    <option value="BMW" />
    <option value="Ford" />
    <option value="Volvo" />
  </datalist>
  
<textarea>	定义多行的文本输入控件。【属性：rows, cols】【更好的方法：使用CSS的 height/width】
<button>	定义按钮。【HTML 表单中推荐使用：<input type="button" value="btn文本" />】
  
<select>	定义选择列表（下拉列表）。
<optgroup>	定义选择列表中相关选项的组合。【当使用一个长选项列表时，对相关的选项进行组合会使处理更加容易】
<option>	定义选择列表中的选项。
<!--举例-->
  <select>
    <optgroup label="A">
      <option value="a1">A1</option>
      <option value="a2">A2</option>
    </optgroup>
    <optgroup label="B">
      <option value="b1">B1</option>
      <option value="b2">B2</option>
    </optgroup>
  </select>
  
<fieldset>	定义围绕表单中元素的边框。【可将表单元素分组】
<legend>	定义 fieldset 元素的标题。
  <!--举例-->
  <fieldset>
    <legend>健康信息</legend>
    身高：<input type="text" />
    体重：<input type="text" />
  </fieldset>
  
<keygen>	定义生成密钥。【keygen 标签规定用于表单的密钥对生成器字段】当提交表单时，私钥存储在本地，公钥发送到服务器。
<output>	定义输出的一些类型。
```

### 框架

```html
<frame>	定义框架集的窗口或框架。（HTML5 中不支持）
<frameset>	定义框架集。（HTML5 中不支持）
<noframes>	定义针对不支持框架的用户的替代内容。（HTML5 中不支持）
  
<iframe src="/i/demo.jpg" />	定义内联框架。【iframe 元素会创建包含另外一个文档的内联框架（即，行内框架）】
```

### 图像🌹（关注：`<img>` `<canvas>` `<svg>`）

```html
<img src="/i/eg_tulip.jpg" alt="🌷郁金香" />	定义图像。
⚠️ 从技术上来讲，<img> 标签并不会在网页中插入图像，而是从网页上链接图像。img 标签创建的是被引用图像的占位空间。

<map>	定义图像映射。【带有可点击区域的一副图像】
<area>	定义图像地图内部的区域。【⚠️ area 元素永远嵌套在 map 元素内部，area 元素可定义图像映射中的区域】
  <!--举例（img 中的 usemap 属性可引用 map 中的id/name属性，取决于浏览器）-->
  <img src="planets.jpg" border="0" usemap="#planetmap" alt="Planets" />
  <map name="planetmap" id="planetmap">
    <area shape="circle" coords="180,139,14" href="venus.html" alt="Venus" />
    <area shape="circle" coords="129,161,10" href="mercur.html" alt="Mercury" />
    <area shape="rect" coords="0,0,110,260" href="sun.html" alt="Sun" />
  </map>
  
<canvas>	定义图形。‼️
<svg>	定义 SVG 图形的容器。‼️
  
<figure>	定义媒介内容的分组，以及它们的标题。
<figcaption>	定义 figure 元素的标题。
  <!--举例-->
  <figure>
    <figcaption>黄浦江上的卢浦大桥</figcaption>
    <img src="shanghai_lupu_bridge.jpg" width="350" height="234" />
  </figure>
```

### 音频/视频🌹（`<audio>` `<video>`）

```html
<audio>	定义声音内容。
<source>	定义媒介源。
<track>	定义用在媒体播放器中的文本轨道。【用于规定字幕文件或其他包含文本的文件，当媒介播放时，这些文件是可见的。】
<video>	定义视频。【使用方法同 audio】
  
<!--举例：音频-->  
<audio src="/i/horse.ogg" controls="controls">
  Your browser does not support the audio element.
</audio>

<audio controls>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
  
<!-- 播放带有字幕的视频 -->
<video width="320" height="240" controls="controls">
  <source src="forrest_gump.mp4" type="video/mp4" />
  <source src="forrest_gump.ogg" type="video/ogg" />
  <track kind="subtitles" src="subs_chi.srt" srclang="zh" label="Chinese" />
  <track kind="subtitles" src="subs_eng.srt" srclang="en" label="English" />
  Your browser does not support the audio element.
</video>  
```

### 链接🌹

```html
<a href="http://www.w3school.com.cn">	定义锚。【可以使用 CSS伪类 向文本超链接添加复杂而多样的样式】
<link rel="stylesheet" type="text/css" href="theme.css" />	定义文档与外部资源的关系。
<nav>	定义导航链接。
  
<!--举例-->
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
</nav>
```

### 列表🌹（ul-li、ol-li、dl-dt-dd）

```html
<!-- 无序列表（ul-li）-->
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<!-- 有序列表（ol-li）-->
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<!-- 自定义列表（dl-dt-dd）-->
<dl>
  <dt>计算机</dt>
  <dd>用来计算的仪器……</dd>
  <dt>显示器</dt>
  <dd>以视觉方式显示信息的装置……</dd>
</dl>

<menu>	定义命令的菜单/列表。【目前所有主流浏览器都不支持<menu>标签】⚠️ 请使用 CSS 来设置列表的样式！
<menuitem>	定义用户可以从弹出菜单调用的命令/菜单项目。
<command>	定义命令按钮。
```

### 表格🌹（th-tr-td、thead-tbody-tfoot、colgroup-col）

```html
<table>	定义表格
<caption>	定义表格标题。【紧跟table之后。每个表格只能有一个标题】【属性 align：left/right/top/bottom，推荐使用样式取代】
  
<th>	定义表格中的表头单元格。
<tr>	定义表格中的行。
<td colspan="2">	定义表格中的单元。【跨行/列：rowspan/colspan】

<thead>	定义表格中的表头内容。
<tbody>	定义表格中的主体内容。
<tfoot>	定义表格中的表注内容（脚注）。
  
<col>	定义表格中一个或多个列的属性值。【属性：align(水平对齐方式)、char、charoff、span、valign(垂直对齐方式)、width】
<colgroup>	定义表格中供格式化的列组。
```

```html
<!-- 表格举例：th-tr-td -->
<table border="1">
  <caption>表格标题</caption>
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

```html
<!-- 表格举例2：thead-tbody-tfoot -->
<table border="1">
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
```

```html
<!-- 表格举例3：col-colgroup -->
<table width="100%" border="1">
  <col align="left" />
  <col align="left" />
  <col align="right" />
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
  <tr>
    <td>2489604</td>
    <td>My first CSS</td>
    <td>$47</td>
  </tr>
</table>
```

### 样式和语义⭐️

```html
<style type="text/css">	定义文档的样式信息。【若引入外部样式，请使用 <link rel="stylesheet" type="text/css" href="theme.css" />】
  
<div>	定义文档中的节。【块级元素】
<span>	定义文档中的节。【行内元素】
  
<header>	定义 section 或 page 的页眉。【介绍信息】
<footer>	定义 section 或 page 的页脚。【通常包含：文档的作者、版权信息、使用条款链接、联系信息等等】
<main>	定义文档的主要内容。
<section>	定义 section。
<article>	定义文章。【一篇文章应有其自身的意义，应该有可能独立于站点的其余部分对其进行分发（论坛帖子/包子文章/博客条目/用户评论）】
<aside>	定义页面内容之外的内容。【aside 的内容应该与附近的内容相关。如：aside 的内容可用作文章的“侧栏”】
  
<details>	定义元素的细节。【details 标签用于描述文档或文档某个部分的细节】【可与 summary 标签配合使用，展示标题的细节】
<summary>	为 <details> 元素定义可见的标题。
  
<dialog>	定义对话框或窗口。【属性 open，规定 dialog 元素是活动的，用户可与之交互。】
  
<data>	添加给定内容的机器可读翻译。【该元素既为数据处理器提供了机器可读的值，又为浏览器中的渲染提供了人类可读的值。】
```

```html
<!-- details-summary 使用示例（当用户点击标题时，会显示出详细信息） -->
<details>
  <summary>HTML 5</summary>
  This document teaches you everything you have to learn about HTML 5.
</details>
```

### 元信息⭐️

```html
<head>	定义关于文档的信息。【用于定义文档的头部，它是所有头部元素的容器（可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等）】
  ⚠️ 可用在 head 部分的元素：<base> <link> <meta> <script> <style> <title>
    
<meta>	定义关于 HTML 文档的元信息。(比如针对搜索引擎和更新频度的描述和关键词)【元数据总是以名称/值的形式被成对传递的。】
  💡属性：	charset 	规定 HTML 文档的字符编码
  				content		定义与 http-equiv 或 name 属性相关的元信息
         http-equiv	把content属性关联到HTTP头部（值：content-security-policy/content-type/default-style/refresh）
  				name		把content属性关联到一个名称（值：application-name/author/description/generator/keywords/viewport）
          scheme		定义用于翻译 content 属性值的格式
  
<base>	定义页面中所有链接的默认地址或默认目标。【这其中包括 <a>、<img>、<link>、<form> 标签中的 URL】【属性：href、target】
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="keywords" content="HTML,ASP,PHP,SQL">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <base href="http://www.w3school.com.cn/i/" />
  <base target="_blank" />
</head>
<body>
  <!-- ⚠️ 由于我们在 head 部分规定了一个基准URL，浏览器将在如下地址寻找图片 http://www.w3school.com.cn/i/eg_smile.gif -->
  <img src="eg_smile.gif" />
  
  <!-- ⚠️ 即使链接中没有 target="_blank" 属性，但是链接会在新窗口中打开 -->
  <a href="http://www.w3school.com.cn">W3School</a>
</body>
</html>
```

### 编程⭐️

```html
<script>	定义客户端脚本。</script>【可以通过 src 属性指向外部脚本文件】
	⚠️ 如果script元素内部的代码，没有位于某个函数中，那么这些代码会在页面加载时被立即执行，frameset标签之后的脚本会被忽略。
<!-- 举例 -->
<script type="text/javascript">
  document.write("Hello World!");
</script>

<noscript>	定义针对不支持客户端脚本的用户的替代内容。
  <noscript>Your browser does not support JavaScript!</noscript>
  
<embed>	为外部应用程序（非 HTML）定义容器。【属性：height、width、src、type】
  <!-- 举例 -->
  <embed src="helloworld.swf" />
  
<object>	定义嵌入的对象。【使用此元素向HTML页面添加多媒体。此元素允许你规定插入对象的数据和参数，以及可用来显示和操作数据的代码】
  ⚠️ <object> 标签用于包含对象，比如图像、音频、视频、Java applets、ActiveX、PDF、Flash。
  
<param>	定义对象的参数。
```

## HTML 全局属性

全局属性是可与所有 HTML 元素一起使用的属性。

```txt
id		规定元素的唯一 id。【可用作链接锚anchor】
class	规定元素的一个或多个类名（引用样式表中的类）。【⚠️ 类名不能以数字开头】
style	规定元素的行内 CSS 样式。【会覆盖掉全局的样式设定】
title	规定有关元素的额外信息。
lang	规定元素内容的语言。
dir	规定元素中内容的文本方向。（rtl | ltr）

accesskey	规定激活元素的快捷键。
tabindex	规定元素的 tab 键次序。

====== HTML5 新增 ======
contenteditable	规定元素内容是否可编辑。
contextmenu	规定元素的上下文菜单。上下文菜单在用户点击元素时显示。
data-*	用于存储页面或应用程序的私有定制数据。
draggable	规定元素是否可拖动。
dropzone	规定在拖动被拖动数据时是否进行复制、移动或链接。
hidden	规定元素仍未或不再相关。
spellcheck	规定是否对元素进行拼写和语法检查。
translate	规定是否应该翻译元素内容。
```

## HTML 事件

## HTML 颜色名

## HTML 画布

## HTML 视频/音频

## HTML 字符集

## HTML 文档类型

## HTML URL 编码

## HTML 语言代码

## HTML 国家代码

## HTTP 消息

## HTTP 方法

## 键盘快捷键