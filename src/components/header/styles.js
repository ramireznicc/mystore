import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    borderColor: COLORS.secondary,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.text,
  },
});
