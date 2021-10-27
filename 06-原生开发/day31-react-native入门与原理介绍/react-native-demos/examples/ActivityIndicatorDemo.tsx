import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export const ActivityIndicatorDemo: React.FC<{}> = (props) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
      <ActivityIndicator size="small" color="#00ff00" />
      <ActivityIndicator size="large" color="#0000ff" />
      <ActivityIndicator size="small" color="#00ff00" />
    </View>
  );
};
