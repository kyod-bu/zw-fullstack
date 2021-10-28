import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { channelInfos } from "../components/NewsChannelTabs";
import { getNewsByChannel } from "../api/news";
import { NewsHeader } from "../components/NewsHeader";
import { NewsChannelTabs } from "../components/NewsChannelTabs";
import { NewsList } from "../components/NewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/actions/news";

export default function NewsScreen(props) {
  const { navigation } = props;
  const listRef = React.useRef(null);
  const [channelInfo, setChannelInfo] = React.useState(channelInfos[0]);

  const [news, setNews] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [loadingMore, setLoadingMore] = React.useState(false);

  const dispatch = useDispatch();
  const newsData = useSelector((store) => store.news.data);
  const isFetchingNews = useSelector((store) => store.news.fetching);
  React.useEffect(() => {
    dispatch(fetchNews(channelInfo.id, 1, 20));
  }, []);

  const getCurrentNews = React.useCallback(() => {
    return getNewsByChannel(channelInfo.id, 1, 20).then((newsRes) => {
      setNews((x) => x.concat(newsRes));
    });
  }, [channelInfo]);

  React.useEffect(() => {
    setNews([]);
    getCurrentNews().then(() => {
      if (listRef.current) {
        listRef.current.scrollToOffset({
          x: 0,
          y: 0,
          animated: false,
        });
      }
    });
  }, [getCurrentNews]);

  const navToSearch = () => {
    navigation.navigate("Search");
  };

  const navToNewsDetail = (url) => {
    WebBrowser.openBrowserAsync(url);
  };

  const loadMore = () => {
    if (!news.length) {
      return;
    }
    if (loadingMore) {
      return;
    }
    const start = news.length;
    const end = start + 20;
    console.log("loadmore", start, end);
    setLoadingMore(true);
    getNewsByChannel(channelInfo.id, start, end).then(
      (newsRes) => {
        setNews((x) => x.concat(newsRes));
        setLoadingMore(false);
      },
      () => setLoadingMore(false)
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    setNews([]);
    getCurrentNews().then(
      () => {
        setRefreshing(false);
      },
      () => {
        setRefreshing(false);
      }
    );
  };

  return (
    <View style={styles.container}>
      <NewsHeader navToSearch={navToSearch} />
      <NewsChannelTabs
        channelInfo={channelInfo}
        setChannelInfo={setChannelInfo}
      />
      <NewsList
        ref={listRef}
        data={news}
        loadMore={loadMore}
        onSelectNews={navToNewsDetail}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
}

NewsScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
