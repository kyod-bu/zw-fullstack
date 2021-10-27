import React, { useState,  } from "react";

import { StyleSheet, FlatList, SectionList, Text, View } from "react-native";

const fruits = [
  "Apple",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Grapes",
  "Lemon",
  "Lychee",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Raspberry",
  "Strawberry",
  "Kiwi",
  "Watermelon",
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  itemContainer: {
    padding: 16,
  },
  text: {
    fontSize: 26,
  },
  itemHeader: {
    padding: 2,
  },
});

const sectionFruits = [
  {
    title: "A",
    data: ["Apple"],
  },
  {
    title: "B",
    data: ["Banana", "Blackberry", "Blueberry"],
  },
  {
    title: "C",
    data: ["Cherry"],
  },
  {
    title: "G",
    data: ["Grapes"],
  },
  {
    title: "L",
    data: ["Lemon", "Lychee"],
  },
  {
    title: "M",
    data: ["Mango"],
  },
  {
    title: "O",
    data: ["Orange"],
  },
  {
    title: "P",
    data: ["Peach", "Pear", "Pineapple"],
  },
  {
    title: "R",
    data: ["Raspberry"],
  },
  {
    title: "S",
    data: ["Strawberry"],
  },
  {
    title: "K",
    data: ["Kiwi"],
  },
  {
    title: "W",
    data: ["Watermelon"],
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const ListDemo: React.FC<{}> = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    setRefreshing(true);
    delay(2000).then(() => {
      setRefreshing(false);
    });
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={fruits}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item}
        refreshing={refreshing}
        onRefresh={fetchData}
      />

      {/* <SectionList
        sections={sectionFruits}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.itemHeader}>
              <Text style={styles.text}>{section.title}</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item}
      /> */}
    </View>
  );
};
