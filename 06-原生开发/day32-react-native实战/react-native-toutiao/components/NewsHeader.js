import React from "react";

import {
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { pxResolve } from "../utils/px";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  headerBar: {
    height: pxResolve(40),
    backgroundColor: "#d33d3c",
    flexDirection: "row",
    paddingLeft: pxResolve(10),
    paddingRight: pxResolve(10),
    alignItems: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: pxResolve(18),
    color: "white",
  },
  searchBox: {
    backgroundColor: "#f5f5f3",
    flex: 1,
    marginLeft: pxResolve(15),
    height: pxResolve(25),
    borderRadius: pxResolve(3),
    padding: pxResolve(3),
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: pxResolve(18),
  },
  searchText: {
    fontSize: pxResolve(13),
  },
});

export const NewsHeader = (props) => {
  const { navToSearch } = props;
  return (
    <View style={styles.headerBar}>
      <Text style={styles.headerTitle}>今日头条</Text>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.searchBox}
        onPress={navToSearch}
      >
        <Icon style={styles.searchIcon} name="search" />
        <Text style={styles.searchText}>搜你想搜</Text>
      </TouchableOpacity>
    </View>
  );
};
