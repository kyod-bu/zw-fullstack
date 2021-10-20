# React Native 入门与原理介绍

## 什么是 React Native

**问题：**假如我开发了⼀款 iOS App，⽕了。我该如何照顾到 Android ⽤户呢？

**可能的答案：**再学⼀遍 Android，开发⼀个相同功能的应⽤

React 的语法跨平台，Learn once, write everywhere

## 为什么要学 React Native

* 移动互联网趋势
* 多端代码同构
* 组件化

## React Native 的优势

Android和iOS应用中多种视图的一些示例。

![Android 和 iOS 应用中多种视图的一些示例](./img/Android和iOS应用中多种视图的一些示例.png)

## 开发环境配置

* Node.js LTS 12
* npm install -g expo-cli
* expo init xxx

### Android，iOS 环境配置

* 官方： <https://reactnative.dev/docs/next/environment-setup>
* 中文： <https://reactnative.cn/docs/environment-setup>
* Android 应用可以在 MacOS 和 windows 进行开发
* iOS 必须要有 MacOS

## React Native 组件应用

### React Native 样式处理

```js
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ddd",
    padding: 10,
  },
});

export default function App() {
  return (
    <View style={styles.root}>
  		<View style={[styles.container, style.horizontal]}></View>
  	</View>
  );
}
```

### React Native 布局

![布局](./img/布局.png)

### React Native 变形

* 类⽐ css 中的 transform 属性

### React Native 异形屏

```jsx
export const SafeAreaViewDemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page content</Text>
    </SafeAreaView>
  );
};
```

### React Native TextInput

* TextInput Demo
* Platform specifified code

### React Native 触摸样式

* Button
* TouchableHighlight
* TouchableNativeFeedback (Android）
* TouchableOpacity

### React Native 图片

* 本地静态资源图⽚
* 通过网络动态资源图片
* 背景图片

### React Native 列表

* ScrollView
* FlatList
* SectionList

### React Native 开关按钮

* Switch
* onValueChange
* value
* 设置颜⾊在不同平台有不同的渲染

### React Native 状态栏

* 系统最上⾯的状态栏
* 显示、隐藏
* 内容模式 default、light-content、dark-content

### React Native 活动指示器

* 表示正在处理的状态
* 具体的展示与平台相关

![活动指示器](./img/活动指示器.png)

### React Native 网络请求

```js
import { useCallback } from 'react';

const onPress = useCallback(() => {
  setLoading(true);
  setData([]);
  fetch("https://reactnative.dev/movies.json")
    .then((response) => response.json())
    .then((json) => {
    return delay(2000).then(() => json);
  })
    .then((json) => setData(json.movies))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);
```

### React Native API 应用

### 告警窗口

* 弹出告警界⾯
* 可以设置标题、消息、自定义按钮

### 模态框弹窗

* Modal
* 可⻅ visible
* 动画类型 none，fade，slide
* 透明背景

### 动画

* 基于时间的变化
* ⾃带 View、Text、Image、ScrollView、FlatList、SectionList ⽀持动画

### 响应手势

* View -> Responder
* PanResponder

### 响应事件参数

```js
onPanResponderMove: (event, gestureState) => {}
```

* nativeEvent
  * changedTouches: 在上一次事件之后，所有发生变化的触摸事件的数组集合（即上一次事件后，所有移动过的触摸点）
  * identifier: 触摸点的 ID
  * locationX: 触摸点相对于父元素的横坐标
  * locationY: 触摸点相对于父元素的纵坐标
  * pageX: 触摸点相对于根元素的横坐标
  * pageY: 触摸点相对于根元素的纵坐标
  * target: 触摸点所在的元素 ID
  * timestamp: 触摸事件的时间戳，可用于移动速度的计算
  * touches: 当前屏幕上的所有触摸点的集合

* 一个 gestureState 对象有如下的字段：
  * stateID: 触摸状态的 ID。在屏幕上有至少一个触摸点的情况下，这个ID会一直有效。
  * moveX: 最近一次移动时的屏幕横坐标
  * moveY: 最近一次移动时的屏幕纵坐标
  * x0: 当响应器产生时的屏幕横坐标
  * y0: 当响应器产生时的屏幕纵坐标
  * dx: 从触摸操作开始时的累计横坐标路程
  * dy: 从触摸操作开始时的累计纵坐标路程
  * vx: 当前的横向移动速度
  * vy: 当前的纵向移动速度
  * numberActiveTouches: 当前在屏幕上的有效触摸点的数量

### 振动

* Vibration.vibrate（pattern, repeat）
* pattern 是 number 或者 number 的数组
* Vibration.cancel()

### 获取 window 长度宽度

window = useWindowDimensions();

window.width
window.height
