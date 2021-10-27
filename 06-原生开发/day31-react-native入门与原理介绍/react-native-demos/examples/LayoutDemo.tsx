import React from "react";

import { StyleSheet, View, Image, Text } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "gray",
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "beige",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "aqua",
  },
  right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "orange",
  },
});

export const LayoutDemo: React.FC<{}> = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.upper}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.left}>
          <Text>left</Text>
        </View>
        <View style={styles.right}>
          <Text>right</Text>
        </View>
      </View>
    </View>
  );
};
