import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ddd",
    padding: 10,
  },
});

const randomColor = () => {
  return "#000000".replace(/0/g, function () {
    return (~~Math.random() * 16).toString(16);
  });
};

export const Touchable: React.FC<{}> = (props) => {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount((n) => n + 1);
  };
  const [rippleColor, setRippleColor] = useState(randomColor());
  const onPressWithRipple = () => {
    setCount((n) => n + 1);
    setRippleColor(randomColor());
  };
  return (
    <View style={styles.root}>
      <View style={styles.countContainer}>
        <Text>{count}</Text>
      </View>
      <Button onPress={onPress} title="button 点击" color="#841584" />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>opacity 点击</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.button}
        onPress={onPress}
        underlayColor="#eee"
      >
        <Text>highlight 点击</Text>
      </TouchableHighlight>
      {Platform.OS === "android" ? (
        <TouchableNativeFeedback
          style={styles.button}
          background={TouchableNativeFeedback.Ripple(rippleColor, false)}
          onPress={onPressWithRipple}
        >
          <Text>点击</Text>
        </TouchableNativeFeedback>
      ) : null}
    </View>
  );
};
