import React from "react";

import { StyleSheet, ScrollView, Text, PixelRatio } from "react-native";

import { pxResolve } from "../utils/px";

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: pxResolve(40),
    borderBottomWidth: pxResolve(1),
    borderBottomColor: "#f5f5f3",
  },
  tabList: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  tabItem: {
    width: pxResolve(50),
    height: pxResolve(40),
    maxHeight: pxResolve(40),
    textAlign: "center",
    lineHeight: pxResolve(30),
  },
  tabText: {},
  selectedText: {
    color: "#fa4747",
  },
});

export const channelInfos = [
  { id: "news_hot", name: "热点" },
  { id: "news_society", name: "社会" },
  { id: "news_entertainment", name: "娱乐" },
  { id: "news_tech", name: "科技" },
  { id: "news_car", name: "汽车" },
  { id: "news_sports", name: "体育" },
  { id: "news_finance", name: "财经" },
  { id: "news_military", name: "军事" },
  { id: "news_world", name: "国际" },
  { id: "essay_joke", name: "段子" },
  { id: "question_and_answer", name: "问答" },
  { id: "image_funny", name: "趣图" },
  { id: "组图", name: "图片" },
];

export const NewsChannelTabs = (props) => {
  const { channelInfo, setChannelInfo } = props;

  const channels = channelInfos.map((c) => c.name);

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.tabList}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
    >
      {channels.map((item, index) => {
        return (
          <Text
            key={item}
            onPress={() => {
              setChannelInfo(channelInfos.find((c) => c.name === item));
            }}
            style={[
              styles.tabItem,
              channelInfo.name === item ? styles.selectedText : styles.tabText,
            ]}
          >
            {item}
          </Text>
        );
      })}
    </ScrollView>
  );
};
