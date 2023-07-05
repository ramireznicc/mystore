import { TouchableHighlight, ImageBackground, Text } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../themes";

const CategoryItem = ({
  id,
  name,
  backgroundColor,
  backgroundImage,
  onSelect,
}) => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.primary}
      style={[styles.container, { backgroundColor }]}
      onPress={() => onSelect(id)}
    >
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.image}
        resizeMode="cover"
      >
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItem;
