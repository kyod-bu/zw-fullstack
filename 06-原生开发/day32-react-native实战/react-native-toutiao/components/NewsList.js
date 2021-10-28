import React, { useMemo } from "react";

import {
  StyleSheet,
  FlatList,
  TouchableHighlight,
  View,
  Text,
  Image,
  RefreshControl,
  PixelRatio,
} from "react-native";
import { pxResolve } from "../utils/px";

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#f5f5f3",
    height: pxResolve(1),
  },
  newsItem: {
    backgroundColor: "white",
    padding: pxResolve(10),
  },
  itemTitle: {
    // 标题
    fontSize: pxResolve(16),
    color: "black",
  },
  itemAbstract: {
    // 摘要
    fontSize: pxResolve(12),
    color: "gray",
    paddingTop: pxResolve(5),
  },
  stick_label: {
    // 粘性标签
    fontSize: pxResolve(10),
    color: "red",
  },
  imgBox: {
    flexDirection: "row",
    marginTop: pxResolve(6),
  },
  itemImg: {
    flex: 1,
    marginRight: pxResolve(4),
    height: pxResolve(70),
  },
  lastImg: {
    flex: 1,
    marginRight: 0,
    height: pxResolve(70),
  },
  oneImg: {
    flex: 1,
    height: pxResolve(180),
  },
  tipsBox: {
    flexDirection: "row",
    marginTop: pxResolve(6),
  },
  tips: {
    fontSize: pxResolve(12),
    marginRight: pxResolve(6),
  },
});

export const NewsList = React.forwardRef((props, ref) => {
  const { data, loadMore, onSelectNews, onRefresh, refreshing } = props;

  const onPressArr = useMemo(() => {
    return data.map((item) => {
      return () => onSelectNews(item.url);
    });
  }, [data]);

  return (
    <FlatList
      ref={ref}
      ItemSeparatorComponent={() => {
        return <View style={styles.line} />;
      }}
      data={data}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
      keyExtractor={(item, index) => index.toString()} // key属性
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight onPress={onPressArr[index]}>
          {/* 新闻item */}
          <View style={styles.newsItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemAbstract}>{item.abstract}</Text>

            {/* 图片列表 */}
            <View style={styles.imgBox}>
              {item.image_list
                ? item.image_list.map((img, index) => {
                    return (
                      <Image
                        style={
                          item.image_list.length === 1
                            ? styles.oneImg
                            : item.image_list.length - 1 === index
                            ? styles.lastImg
                            : styles.itemImg
                        }
                        source={{ uri: img.url }}
                        resizeMode="stretch"
                        key={index}
                      />
                    );
                  })
                : []}
            </View>

            {/* 评论信息 */}
            <View style={styles.tipsBox}>
              <Text style={styles.stick_label}>{item.stick_label}</Text>
              <Text style={styles.tips}>{item.source}</Text>
              <Text style={styles.tips}>
                {(item.comment_count || 0) + "评论"}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      )}
      /* 刷新控制 */
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["red", "#ffd500", "#0080ff", "#99e600"]}
          tintColor="red"
          title="Loading..."
          titleColor="red"
        />
      }
    />
  );
});
