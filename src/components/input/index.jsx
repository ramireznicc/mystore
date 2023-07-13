import { View, TextInput } from "react-native";

import { styles } from "./styles";

const Input = ({
  borderColor,
  onHandleFocus,
  onHandleBlur,
  onHandleChangeText,
  onHandleDelete,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, { borderColor }]}
        onFocus={onHandleFocus}
        onBlur={onHandleBlur}
        onChangeText={onHandleChangeText}
        autoCorrect={false}
        autoCapitalize="none"
        cursorColor={borderColor}
        placeholderTextColor={borderColor}
      />
    </View>
  );
};

export default Input;
