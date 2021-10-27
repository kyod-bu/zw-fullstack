import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  ListRenderItem,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { LayoutDemo } from "./examples/LayoutDemo";
import { Touchable } from "./examples/Touchable";
import { TextInputDemo } from "./examples/TextInputDemo";
import { ScrollViewDemo } from "./examples/ScrollViewDemo";
import { ImageDemo } from "./examples/ImageDemo";
import { ListDemo } from "./examples/ListDemo";
import { NetworkDemo } from "./examples/NetworkDemo";
import { ActivityIndicatorDemo } from "./examples/ActivityIndicatorDemo";
import { KeyboardAvoidingViewDemo } from "./examples/KeyboardAvoidingViewDemo";
import { AlertDemo } from "./examples/AlertDemo";
import { AnimatedDemo } from "./examples/AnimatedDemo";
import { ResponderDemo } from "./examples/ResponderDemo";
import { ColorSchemaDemo } from "./examples/ColorSchemaDemo";
import { WindowDimensionsDemo } from "./examples/WindowDimensionsDemo";
import { LayoutPropsDemo } from "./examples/LayoutPropsDemo";
import { ModalDemo } from "./examples/ModalDemo";
import { SwitchDemo } from "./examples/SwitchDemo";
import { StatusBarDemo } from "./examples/StatusBarDemo";
import { TransformDemo } from "./examples/TransformDemo";
import { ShareDemo } from "./examples/ShareDemo";

interface NewsItem {
  id: string;
  title: string;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LayoutPropsDemo />
      {/* <LayoutDemo /> */}
      {/* <TransformDemo /> */}
      {/* <TextInputDemo /> */}
      {/* <Touchable /> */}
      {/* <KeyboardAvoidingViewDemo /> */}
      {/* <ImageDemo /> */}
      {/* <ScrollViewDemo /> */}
      {/* <ListDemo /> */}
      {/* <SwitchDemo /> */}
      {/* <StatusBarDemo /> */}
      {/* <ActivityIndicatorDemo /> */}
      {/* <NetworkDemo /> */}
      {/* <AlertDemo /> */}
      {/* <ModalDemo /> */}
      {/* <AnimatedDemo /> */}
      {/* <ResponderDemo /> */}
      {/* <ShareDemo /> */}
      {/* <WindowDimensionsDemo /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
