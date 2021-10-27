import React from "react";

import {
  Text,
  // Appearance
} from "react-native";

export const ColorSchemaDemo: React.FC<{}> = (props) => {
  // const colorScheme = Appearance.getColorScheme();
  const colorScheme = "dark";
  return <Text>Current ColorScheme: {colorScheme}</Text>;
};
