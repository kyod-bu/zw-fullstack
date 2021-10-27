import React, { useState } from "react";

import {
  StyleSheet,
  Button,
  View,
  ScrollView,
  Text,
  Image,
  ImageProps,
  ImageBackground,
  PixelRatio,
} from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  img: {
    maxWidth: "100%",
  },
  bgImage: {
    flex: 1,
    height: 300,
    alignItems: "center",
  },
  caption: {
    color: "white",
    fontSize: 16,
  },
});

export const ImageDemo: React.FC<{}> = (props) => {
  const [catOrDog, setCatOrDog] = useState<"cat" | "dog">("cat");
  const toggleCatOrDog = () => {
    setCatOrDog((current) => {
      if (current === "cat") {
        return "dog";
      }
      return "cat";
    });
  };

  const [resizeMode, setResizeMode] = useState<ImageProps["resizeMode"]>(
    "cover"
  );

  const toggleResizeMode = () => {
    setResizeMode((current) => {
      if (current === "cover") {
        return "contain";
      }

      return "cover";
    });
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Text>本地静态资源</Text>
        <View>
          <Image style={styles.img} source={require("../assets/logo.png")} />
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <Text>选择性渲染静态资源</Text>
          <Button onPress={toggleCatOrDog} title="Cat or Dog?" />
          <Button onPress={toggleResizeMode} title="Resize Mod" />
        </View>
        <View>
          {catOrDog === "cat" ? (
            <Image
              style={styles.img}
              resizeMode={resizeMode}
              source={require("../assets/cat.jpg")}
            />
          ) : (
            <Image
              style={[
                styles.img,
                {
                  width: PixelRatio.getPixelSizeForLayoutSize(200),
                  height: PixelRatio.getPixelSizeForLayoutSize(200),
                },
              ]}
              resizeMode={resizeMode}
              source={require("../assets/dog.jpg")}
            />
          )}
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <Text>网络图片</Text>
        </View>
        <View>
          <Image
            style={[
              styles.img,
              {
                width: 50,
                height: 50,
              },
            ]}
            source={{
              uri: "https://reactjs.org/logo-og.png",
              width: PixelRatio.getPixelSizeForLayoutSize(50),
              height: PixelRatio.getPixelSizeForLayoutSize(50),
            }}
          />
          <Text>{PixelRatio.get()}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <Text>背景图片</Text>
        </View>
        <View>
          <ImageBackground
            style={styles.bgImage}
            source={require("../assets/cat.jpg")}
          >
            <Text style={styles.caption}>Kitty</Text>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};
