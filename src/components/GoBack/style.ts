import { StyleSheet } from "react-native";

interface Styles {
  container: {};

  backArrowImageStyle: {
    height: number;
    width: number;
    resizeMode: "contain" | "cover" | "stretch" | "center" | "repeat" | undefined;
  };
}

const styles: Styles = StyleSheet.create({
  container: {
  },
  backArrowImageStyle: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});

export default styles;
