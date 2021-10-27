import React, { useState, useRef, useReducer } from "react";

import { StyleSheet, View, Text, Animated, PanResponder } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});

export const ResponderDemo: React.FC<{}> = (props) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ]),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>拖拽演示</Text>
      <Animated.View
        style={{
          transform: [
            {
              translateX: pan.x,
            },
            {
              translateY: pan.y,
            },
          ],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box}></View>
      </Animated.View>
    </View>
  );
};
