import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export const SafeAreaViewDemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page content</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
