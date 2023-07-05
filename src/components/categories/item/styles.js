import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  image: {
    width: "100%",
    height: 140,
    justifyContent: "flex-end",
  },
  title: {
    color: COLORS.white,
    letterSpacing: 0.5,
    fontWeight: "bold",
    fontSize: 22,
    padding: 14,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});
