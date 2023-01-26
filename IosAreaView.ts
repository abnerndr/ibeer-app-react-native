import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
  iosSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : 35,
  },
});
