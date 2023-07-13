import { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import { Header } from "./components/";
import { Categories, Products } from "./screens";
import { COLORS } from "./themes";

export default function App() {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({
    name: null,
    id: null,
  });
  const headerTitle = isCategorySelected ? selectedCategory.name : "Categories";

  const onCategorySelected = (categoryId, categoryName) => {
    setSelectedCategory({ name: categoryName, id: categoryId });
    setIsCategorySelected(!isCategorySelected);
  };

  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={headerTitle} />
        {isCategorySelected ? (
          <Products
            onHandleGoBack={onHandleNavigate}
            categoryId={selectedCategory.id}
          />
        ) : (
          <Categories onSelect={onCategorySelected} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
