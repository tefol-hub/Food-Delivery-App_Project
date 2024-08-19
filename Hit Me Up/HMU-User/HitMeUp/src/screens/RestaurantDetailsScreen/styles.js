import { StyleSheet } from "react-native";


export default StyleSheet.create({
  page: {
    backgroundColor: "white",
    position : 'relative',
    flex :1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 23,
    color:"##0c0c0c",
    fontWeight: "700",
    maxWidth: '800',
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
  },
  container: {
    margin: 10,
  },

});
