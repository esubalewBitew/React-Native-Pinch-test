import { StyleSheet, StatusBar, Platform, Dimensions } from "react-native";
import Colors from "../../../style/Colors";

interface Styles {
  container: {
    backgroundColor: string;
    flex: number;
    paddingHorizontal: number;
    paddingTop?: number;
  };
  loadingIndicator: {
    justifyContent: 'center';
    alignItems: 'center';
    marginTop: number;
  };
}

const styles: Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    paddingHorizontal: 20,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight - 20 : undefined,
      },
    }),
  },
  loadingIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('screen').height / 2.7,
  },
});

export default styles;
