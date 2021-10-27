import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  Button,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

interface Movie {
  id: string;
  title: string;
  releaseYear: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const NetworkDemo: React.FC<{}> = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Movie[]>([]);

  const onPress = useCallback(() => {
    setLoading(true);
    setData([]);
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        return delay(2000).then(() => json);
      })
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="Fetch" />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};
