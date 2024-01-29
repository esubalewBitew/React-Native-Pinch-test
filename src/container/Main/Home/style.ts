import { StyleSheet, Platform, StatusBar } from "react-native";
import Colors from "../../../style/Colors";

interface Styles {
  container: {
    backgroundColor: string;
    flex: number;
    paddingHorizontal: number;
    paddingTop?: number;
  };
  addUserContainer: {
    position: 'absolute';
    bottom: number;
    right: number;
    height: number;
    width: number;
    borderRadius: number;
    borderWidth: number;
    borderColor: string;
    justifyContent: 'center';
    alignItems: 'center';
    backgroundColor: string;
  };
  addUserImageStyle: {
    height: number;
    width: number;
    resizeMode: "contain";
  };
  FloatingCounterContainerStyle: {
    position: 'absolute';
    top: number;
    right: number;
    left: number;
    flexDirection: 'row';
    width: string;
    justifyContent: 'center';
    alignItems: 'center';
    paddingVertical: number;
  };
  counterContainer: {
    backgroundColor: string;
    minHeight: number;
    minWidth: number;
    borderRadius: number;
    justifyContent: 'center';
    alignItems: 'center';
    padding: number;
    marginHorizontal: number;
  };
  counterLabel: {
    color: string;
    fontSize: number;
  };
}

const styles: Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 15,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight - 20 : undefined,
      },
      ios: {
        paddingTop: 40,
      },
    }),
  },
  addUserContainer: {
    position: 'absolute',
    bottom: 30,
    right: 25,
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  addUserImageStyle: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  FloatingCounterContainerStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
    left: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  counterContainer: {
    backgroundColor: Colors.ORANGE,
    minHeight: 50,
    minWidth: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 20,
  },
  counterLabel: {
    color: Colors.WHITE,
    fontSize: 25,
  },
});

export default styles;
