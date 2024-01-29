import { StyleSheet } from "react-native";

interface Styles {
  container: {
    width: string;
    paddingHorizontal: number;
    flexDirection: 'row';
    borderWidth: number;
    borderBottomColor: string;
    borderBottomWidth: number;
    paddingVertical: number;
    marginVertical: number;
  };
  profileImageStyle: {
    height: number;
    width: number;
    borderRadius: number;
    marginEnd: number;
    borderWidth: number;
    borderColor: string;
  };
  userNameLabel: {
    color: string;
    fontSize: number;
    marginTop: number;
  };
  profileImageViewContainer: {};
}

const styles: Styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 0,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    marginVertical: 5,
  },
  profileImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginEnd: 15,
    borderWidth: 1,
    borderColor: 'orange',
  },
  userNameLabel: {
    color: '#000',
    fontSize: 15,
    marginTop: 10,
  },
  profileImageViewContainer: {},
});

export default styles;
