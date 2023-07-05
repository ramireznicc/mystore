import { SafeAreaView, View, StyleSheet } from "react-native";

import { Header } from "./components/";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="categories" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
