import React from "react";

import { StyleSheet, useWindowDimensions, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const WindowDimensionsDemo: React.FC<{}> = (props) => {
  const window = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text>{`Window Dimensions: height - ${window.height}, width: ${window.width}`}</Text>
    </View>
  );
};
