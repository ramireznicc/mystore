import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";

import { Header, CategoryItem } from "./components/";
import CATEGORIES from "./constants/data/categories.json";
import { COLORS } from "./themes";

export default function App() {
  const onSelectItem = (id) => {
    console.warn(id);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="categories" />
        <FlatList
          data={CATEGORIES}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryItem {...item} onSelect={onSelectItem} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categoryContainer: {
    marginHorizontal: 14,
    marginVertical: 14,
  },
  listCategory: {
    gap: 14,
    paddingBottom: 20,
  },
});
