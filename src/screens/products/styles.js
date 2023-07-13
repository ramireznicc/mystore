import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    marginVertical: 6,
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  goBackText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginVertical: 12,
  },
  productsContainer: {
    flex: 1,
    marginHorizontal: 12,
    gap: 12,
  },
  noProducts: {
    flex: 1,
    alignItems: "center",
  },
  noProductsText: {
    fontSize: 16,
    fontWeight: 500,
  },
});
