import { TouchableOpacity, ImageBackground, Text } from "react-native";

import { styles } from "./styles";

const CategoryItem = ({
  id,
  name,
  backgroundColor,
  backgroundImage,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={() => onSelect(id, name)}
    >
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.image}
        resizeMode="cover"
      >
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryItem;
