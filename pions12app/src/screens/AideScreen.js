import * as React from "react";
import { Image, StyleSheet, ImageBackground } from "react-native";

const AideScreen = () => {
  return (
    <ImageBackground
      style={styles.aideIcon}
      resizeMode="cover"
      source={require("../assets/drawable/background2.jpg")}
    >
      <Image
        style={styles.image10Icon}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image10Icon: {
    position: "absolute",
    marginLeft: -195,
    top: 11,
    left: "50%",
    width: 393,
    height: 821,
  },
  aideIcon: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AideScreen;
