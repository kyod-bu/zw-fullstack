import React, { useCallback, useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";

import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { pxResolve } from "../utils/px";
import Icon from "@expo/vector-icons/MaterialIcons";
import { getHotSearch, getSearchTips } from "../api/news";

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    height: pxResolve(40),
    backgroundColor: "white",
    borderBottomWidth: pxResolve(1),
    borderBottomColor: "#f5f5f3",
    alignItems: "center",
  },
  backIconBox: {
    width: pxResolve(40),
    height: pxResolve(40),
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: pxResolve(30),
  },
  searchBox: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    borderWidth: pxResolve(1),
    borderRadius: pxResolve(10),
    borderColor: "#f2f2f2",
    height: pxResolve(30),
    padding: pxResolve(5),
  },
  searchIcon: {
    fontSize: pxResolve(20),
  },
  searchInput: {
    flex: 1,
    color: "#212121",
    height: pxResolve(30),
    fontSize: pxResolve(12),
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: pxResolve(5),
    paddingRight: pxResolve(5),
  },
  searchBtn: {
    width: pxResolve(50),
    fontSize: pxResolve(13),
    textAlign: "center",
    color: "#3385ff",
  },
  hotWordsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  hotWordBox: {
    paddingLeft: pxResolve(20),
    paddingRight: pxResolve(20),
    paddingTop: pxResolve(2),
    paddingBottom: pxResolve(2),
    borderWidth: pxResolve(1),
    borderColor: "#bdbdbd",
    margin: pxResolve(5),
  },
  hotWord: {
    fontSize: pxResolve(12),
  },
  tipsWordBox: {
    borderWidth: 0,
    flexDirection: "row",
    marginBottom: pxResolve(10),
    height: pxResolve(38),
    alignItems: "center",
  },
  tipsWord: {
    fontSize: pxResolve(14),
    marginLeft: pxResolve(8),
  },
});

export const SearchScreen = (props) => {
  const { navigation } = props;
  const [searchText, setSearchText] = useState("");
  const [tipsWords, setTipsWords] = useState([]);
  const [hotWords, setHotWords] = useState([]);

  useEffect(() => {
    getHotSearch().then((data) => {
      setHotWords(data);
    });
  }, []);

  const getTipsWords = useCallback((word) => {
    if (word.trim() === "") {
      setTipsWords([]);
      return;
    }

    getSearchTips(word).then((data) => {
      setTipsWords(data);
    });
  }, []);

  useEffect(() => {
    getTipsWords(searchText);
  }, [searchText, getTipsWords]);

  const searchWord = (word) => {
    console.log("search word", word);
    Keyboard.dismiss();
    if (word.trim() === "") {
      return;
    }

    WebBrowser.openBrowserAsync(
      `http://www.yidianzixun.com/channel/w/${encodeURIComponent(word)}`
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchBar}>
        {/* 返回按钮 */}
        <View style={styles.backIconBox}>
          <Icon
            style={styles.backIcon}
            name="chevron-left"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        {/* 搜索框 */}
        <View style={styles.searchBox}>
          <Icon style={styles.searchIcon} name="search" />
          <TextInput
            style={styles.searchInput}
            onChangeText={setSearchText}
            value={searchText}
            placeholder="搜你想搜"
            placeholderTextColor="#bdbdbd"
            underlineColorAndroid="transparent"
            selectionColor="#3385ff"
          />
        </View>
        <Text onPress={() => searchWord(searchText)} style={styles.searchBtn}>
          搜索
        </Text>
      </View>
      {tipsWords.length <= 0 ? (
        <View style={{ flex: 1, padding: pxResolve(10) }}>
          <Text style={{ fontSize: pxResolve(13), color: "#212121" }}>
            大家都在搜
          </Text>
          <View style={styles.hotWordsList}>
            {hotWords.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.hotWordBox}
                  key={index}
                  onPress={() => searchWord(item)}
                >
                  <Text style={styles.hotWord}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : (
        <View style={{ flex: 1, padding: pxResolve(10) }}>
          {tipsWords.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.tipsWordBox}
                key={index}
                onPress={() => searchWord(item)}
              >
                <Icon style={styles.searchIcon} name="search" />
                <Text style={styles.tipsWord}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};
