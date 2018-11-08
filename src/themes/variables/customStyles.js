import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bgDark: {
    backgroundColor: "#101010",
    color: "#f5f5f5"
  },
  bgWhite: {
    backgroundColor: "#FFF",
    color: "#101010"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  carouselContainer: {
    height: 200,
    padding: 0
  },
  carouselBody: {
    padding: 0
  },
  carouselItem: {
    margin: 0,
    top: 0,
    left: 0,
    height: 200,
    borderColor: "#101010",
    justifyContent: "center",
    alignItems: "center"
  },
  carouselItemImage: {
    height: 200,
    width: null,
    flex: 12,
    position: "relative"
  },
  carouselItemMask: {
    height: 200,
    width: null,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 2,
    position: "absolute",
    backgroundColor: "transparent"
  },
  musicCardContainer: {
    margin: 10,
    width: 135,
    padding: 0
  },
  musicCard: {
    borderColor: "#101010",
    width: 150,
    margin: 10,
    borderRadius: 5,
    padding: 0
  },
  musicCardTitle: {
    fontSize: 13
  },
  catalogueCardTitle: {
    borderColor: "#101010",
    fontSize: 15
  },
  catalogueCard: {
    padding: 0
  },
  wineGradient: {
    backgroundColor: "#310a11"
  },
  justifyCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  headerLogo: {
    resizeMode: "stretch"
  },
  thumbnail: {
    width: 100,
    height: 100,
    margin: "auto"
  },
  greyText: {
    color: "#eee"
  },
  redText: {
    color: "#d00e26"
  },
  darkText: {
    color: "#424242"
  },
  darkBg: {
    backgroundColor: "#0e0e0e"
  },
  padTop25: {
    paddingTop: 25
  },
  container: {
    flex: 1
  },
  
  audioElement: {
    height: 0,
    width: 0,
  }
});
