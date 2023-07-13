import { FlatList } from "react-native";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
import CATEGORIES from "../../constants/data/categories.json";

const Categories = ({ onSelect }) => {
  return (
    <FlatList
      data={CATEGORIES}
      style={styles.categoryContainer}
      contentContainerStyle={styles.listCategory}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CategoryItem {...item} onSelect={onSelect} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Categories;
