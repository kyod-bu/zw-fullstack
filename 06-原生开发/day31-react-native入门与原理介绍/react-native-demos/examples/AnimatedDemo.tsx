import React, { useRef } from "react";

import { StyleSheet, Animated, View, Button, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16,
  },
});

export const AnimatedDemo: React.FC<{}> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // 2 秒 0 -> 1
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const fadeOut = () => {
    // 2秒 1 -> 0
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim, // Bind opacity to animated value
          },
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  );
};
