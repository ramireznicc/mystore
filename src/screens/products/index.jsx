import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { styles } from "./styles";
import { Input } from "../../components";
import PRODUCTS from "../../constants/data/products.json";
import { COLORS } from "../../themes";

const Products = ({ onHandleGoBack, categoryId }) => {
  const [search, setSearch] = useState("");
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

  const onHandleDelete = () => {
    setSearch("");
  };

  const productsFiltered = PRODUCTS.filter(
    (product) => product.categoryId === categoryId
  );

  useEffect(() => {
    if (search.length === 0) {
      setDeleteIconState({ color: COLORS.disabled, disabled: true });
    } else {
      setDeleteIconState({ color: COLORS.text, disabled: false });
    }
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
        <Ionicons name="search" size={24} color={COLORS.text} />
        <Ionicons
          name="backspace"
          size={24}
          color={deleteIconState.color}
          disabled={deleteIconState.disabled}
          onPress={onHandleDelete}
        />
      </View>
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Products;
