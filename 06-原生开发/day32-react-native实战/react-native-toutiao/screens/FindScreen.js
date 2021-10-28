import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import Icon from "@expo/vector-icons/MaterialIcons";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  RefreshControl,
  Image,
} from "react-native";

import { pxResolve } from "../utils/px";
import { getFindList } from "../api/find";

export default function FindScreen() {
  const [data, setData] = React.useState([]);

  const fetchFinds = (offset) => {
    return getFindList(offset).then((data) => {
      let usableData = [];
      data.map((item, index) => {
        usableData.push({
          key: `${index}_${item.id}`,
          id: item.id,
          url: item.url,
          image: item.image_info.url,
          text: item.title,
          summary: item.summary,
          authorImage:
            item.authors[0].avatar.normal ||
            "https://1-im.guokr.com/TL27-S81EuoahCN7pVlXlzCI6I07ORoBQCo7fDv5EUqgAAAAoAAAAFBO.png?imageView2/1/w/48/h/48",
          authorName: item.authors[0].nickname,
          commentNum: Math.floor(Math.random() * 200),
          likeNum: Math.floor(Math.random() * 200),
        });

        setData((a) => a.concat(usableData));
      });
    });
  };
  React.useEffect(() => {
    fetchFinds(10);
  }, []);

  const [loadingMore, setLoadingMore] = React.useState(false);
  const loadMore = () => {
    if (!data.length) {
      return;
    }
    if (loadingMore) {
      return;
    }
    setLoadingMore(true);
    fetchFinds(data.length + 10).then(
      () => {
        setLoadingMore(false);
      },
      () => {
        setLoadingMore(false);
      }
    );
  };

  const navById = (itemId) => {
    const target = data.find((item) => item.id === itemId);
    WebBrowser.openBrowserAsync(target.url);
  };

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    if (refreshing) {
      return;
    }
    setRefreshing(true);
    setData([]);
    getFindList(10).then(
      () => {
        setRefreshing(false);
      },
      () => {
        setRefreshing(false);
      }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.length > 0 ? data.slice(5) : []}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        ListHeaderComponent={() => null}
        renderItem={({ item, separators, index }) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navById(item.id)}
          >
            <View style={styles.itemBox}>
              <View style={styles.itemMain}>
                <View style={styles.mainLeft}>
                  <Text numberOfLines={2} style={styles.title}>
                    {item.text}
                  </Text>
                  <Text numberOfLines={2} style={styles.summary}>
                    {item.summary}
                  </Text>
                </View>
                <Image
                  style={styles.mainRight}
                  source={{ uri: item.image }}
                  resizeMode="stretch"
                />
              </View>
              <View style={styles.itemTips}>
                <View style={styles.tipsLeft}>
                  <Image
                    style={styles.authorImg}
                    source={{ uri: item.authorImage }}
                    resizeMode="stretch"
                  />
                  <Text style={styles.authorName}>{item.authorName}</Text>
                </View>
                <View style={styles.tipsRight}>
                  <Icon style={styles.icon} name="comment" />
                  <Text style={styles.num}>{item.commentNum + ""}</Text>
                  <Icon style={styles.icon} name="thumb-up" />
                  <Text style={styles.num}>{item.likeNum + ""}</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
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
    </View>
  );
}

const styles = StyleSheet.create({
  itemBox: {
    height: pxResolve(150),
    paddingTop: pxResolve(15),
    paddingLeft: pxResolve(10),
    paddingRight: pxResolve(10),
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  itemMain: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainLeft: {
    width: pxResolve(220),
  },
  title: {
    color: "black",
  },
  summary: {
    color: "#b4b4b4",
    marginTop: pxResolve(6),
    fontSize: pxResolve(12),
  },
  mainRight: {
    width: pxResolve(120),
    height: pxResolve(100),
  },
  itemTips: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: pxResolve(0.8),
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingBottom: pxResolve(10),
  },
  tipsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorImg: {
    width: pxResolve(20),
    height: pxResolve(20),
    borderRadius: pxResolve(50),
  },
  authorName: {
    marginLeft: pxResolve(10),
    fontSize: pxResolve(12),
  },
  tipsRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: pxResolve(2),
    marginLeft: pxResolve(10),
    color: "#b4b4b4",
  },
  num: {
    fontSize: pxResolve(12),
    color: "#b4b4b4",
  },
});
