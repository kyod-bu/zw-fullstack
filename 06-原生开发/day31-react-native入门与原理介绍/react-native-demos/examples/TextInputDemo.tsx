import React, { useState } from "react";

import { StyleSheet, View, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export const TextInputDemo: React.FC<{}> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeText = (t: string) => setInputValue(t);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        value={inputValue}
        onChangeText={onChangeText}
      />
    </View>
  );
};
