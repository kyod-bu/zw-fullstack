import React from "react";

import { StyleSheet, ScrollView, View, Image, Text } from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

const list: string[] = [];
for (let i = 0; i < 100; i++) {
  list.push(`Item ${i}`);
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export const ScrollViewDemo: React.FC<{}> = (props) => {
  return (
    <ScrollView>
      {list.map((item) => {
        return (
          <View key={item} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            <Image source={logo} />
          </View>
        );
      })}
    </ScrollView>
  );
};
