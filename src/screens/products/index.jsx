import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { styles } from "./styles";
import { Input } from "../../components";
import PRODUCTS from "../../constants/data/products.json";
import { COLORS } from "../../themes";

const Products = ({ onHandleGoBack, categoryId }) => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [deleteIconState, setDeleteIconState] = useState({
    color: COLORS.disabled,
    disabled: true,
  });
  const [borderColor, setBorderColor] = useState(COLORS.disabled);
  const onHandleChangeText = (text) => {
    setSearch(text);
  };
  const onHandleFocus = () => {
    setBorderColor(COLORS.secondary);
  };
  const onHandleBlur = () => {
    setBorderColor(COLORS.disabled);
  };

  const clearSearch = () => {
    setSearch("");
  };

  const filteredProductsByCategory = PRODUCTS.filter(
    (product) => product.categoryId === categoryId
  );

  const filterBySearch = (query) => {
    let updatedList = [...filteredProductsByCategory];
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().search(query.toLowerCase()) !== -1;
    });

    setFilteredProducts(updatedList);
  };

  useEffect(() => {
    if (search.length !== 0) {
      setDeleteIconState({ color: COLORS.text, disabled: false });
    } else {
      setDeleteIconState({ color: COLORS.disabled, disabled: true });
    }

    filterBySearch(search);
  }, [search]);

  return (
    <View style={styles.container}>
      <Pressable onPress={onHandleGoBack} style={styles.goBack}>
        <Ionicons name="chevron-back" size={28} color={COLORS.text} />
        <Text style={styles.goBackText}>Back</Text>
      </Pressable>
      <View style={styles.inputSearchContainer}>
        <Input
          placeholderTextColor={COLORS.primary}
          placeholder="Search"
          onHandleFocus={onHandleFocus}
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          borderColor={borderColor}
          value={search}
        />
        <Ionicons
          name="backspace"
          size={24}
          color={deleteIconState.color}
          disabled={deleteIconState.disabled}
          onPress={clearSearch}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.productsContainer}
        data={
          search.length === 0 ? filteredProductsByCategory : filteredProducts
        }
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.noProducts}>
          <Text style={styles.noProductsText}>No products found</Text>
        </View>
      )}
    </View>
  );
};

export default Products;
