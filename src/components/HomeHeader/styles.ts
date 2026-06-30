import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 324,
    paddingHorizontal: 24,
    paddingBottom: 18,
    gap: 24,
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.white,
  },
});
