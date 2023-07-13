import { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import { Header } from "./components/";
import { Categories, Products } from "./screens";
import { COLORS } from "./themes";

export default function App() {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const headerTitle = isCategorySelected ? categoryName : "Categories";
  const onHandleNavigate = (id, name) => {
    setIsCategorySelected(!isCategorySelected);
    setCategoryName(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={headerTitle} />
        {isCategorySelected ? (
          <Products onHandleGoBack={onHandleNavigate} />
        ) : (
          <Categories onSelect={onHandleNavigate} />
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
