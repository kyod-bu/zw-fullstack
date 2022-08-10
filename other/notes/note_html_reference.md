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

### 链接

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

### 列表

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

<menu>	定义命令的菜单/列表。
<menuitem>	定义用户可以从弹出菜单调用的命令/菜单项目。
<command>	定义命令按钮。
```

### 表格

```html
<table>	定义表格
<caption>	定义表格标题。
<th>	定义表格中的表头单元格。
<tr>	定义表格中的行。
<td>	定义表格中的单元。
<thead>	定义表格中的表头内容。
<tbody>	定义表格中的主体内容。
<tfoot>	定义表格中的表注内容（脚注）。
<col>	定义表格中一个或多个列的属性值。
<colgroup>	定义表格中供格式化的列组。
```

### 样式和语义

```html
<style>	定义文档的样式信息。
<div>	定义文档中的节。
<span>	定义文档中的节。
<header>	定义 section 或 page 的页眉。
<footer>	定义 section 或 page 的页脚。
<main>	定义文档的主要内容。
<section>	定义 section。
<article>	定义文章。
<aside>	定义页面内容之外的内容。
<details>	定义元素的细节。
<dialog>	定义对话框或窗口。
<summary>	为 <details> 元素定义可见的标题。
<data>	添加给定内容的机器可读翻译。
```



### 元信息

```html
<head>	定义关于文档的信息。
<meta>	定义关于 HTML 文档的元信息。
<base>	定义页面中所有链接的默认地址或默认目标。
<basefont>	定义页面中文本的默认字体、颜色或尺寸。HTML5 中不支持。请使用 CSS 代替。
```



### 编程

```html
<script>	定义客户端脚本。</script>
<noscript>	定义针对不支持客户端脚本的用户的替代内容。
<applet>	定义嵌入的 applet。HTML5 中不支持。请使用 <embed> 和 <object> 代替。
<embed>	为外部应用程序（非 HTML）定义容器。
<object>	定义嵌入的对象。
<param>	定义对象的参数。
```



## HTML 浏览器支持

## HTML 全局属性

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