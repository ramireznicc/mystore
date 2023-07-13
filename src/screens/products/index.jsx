import { View, Text, Button } from "react-native";

import { styles } from "./styles";

const Products = ({ onHandleGoBack }) => {
  return (
    <View style={styles.container}>
      <Text>Category Selected</Text>
      <Button title="goBack" onPress={onHandleGoBack} />
    </View>
  );
};

export default Products;
