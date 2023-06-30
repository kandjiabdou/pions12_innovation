import * as React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PiecesScreen = () => {
  return (
    <ImageBackground
      style={styles.coinsIcon}
      resizeMode="cover"
      source={require("src/assets/drawable/background2.png")}
    >
      <View style={styles.coinsWrapper}>
        <Text style={styles.coins}>COINS</Text>
      </View>
      <View style={[styles.retour1Parent, styles.aishwaryaPosition]}>
        <Image
          style={styles.retour1Icon}
          resizeMode="cover"
          source={require("../assets/retour-1.png")}
        />
        <Text style={styles.retour}>retour</Text>
      </View>
      <View style={styles.popupPrams}>
        <Image
          style={[styles.euroRemovebgPreview11, styles.euroLayout]}
          resizeMode="cover"
          source={require("../assets/euroremovebgpreview-1-1.png")}
        />
        <View style={[styles.wrapper, styles.wrapperLayout]}>
          <Text style={styles.text}> 1$</Text>
        </View>
        <Image
          style={styles.collecteDePiecesRemovebgPrIcon}
          resizeMode="cover"
          source={require("../assets/collectedepiecesremovebgpreview-1.png")}
        />
        <View style={[styles.container, styles.wrapper1Position]}>
          <Text style={[styles.text1, styles.textPosition]}>100$</Text>
        </View>
        <Image
          style={[
            styles.piecesDeMonnaie2RemovebgIcon,
            styles.piecesIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/piecesdemonnaie--2-removebgpreview-1.png")}
        />
        <View style={[styles.frame, styles.frameLayout]}>
          <Text style={[styles.text2, styles.textPosition]}>10000$</Text>
        </View>
        <Image
          style={[styles.euroRemovebgPreview1Icon, styles.euroLayout]}
          resizeMode="cover"
          source={require("../assets/euroremovebgpreview-1.png")}
        />
        <Text style={[styles.aishwarya, styles.aishwaryaPosition]}>
          Aishwarya
        </Text>
        <View style={[styles.frameView, styles.frameViewPosition]}>
          <Text style={[styles.text3, styles.textPosition]}>10$</Text>
        </View>
        <Image
          style={[
            styles.piecesDeMonnaieRemovebgPreIcon,
            styles.frameViewPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/piecesdemonnaieremovebgpreview-1.png")}
        />
        <View style={[styles.wrapper1, styles.wrapper1Position]}>
          <Text style={[styles.text4, styles.textPosition]}>1000$</Text>
        </View>
        <Image
          style={[
            styles.piecesDeMonnaie1RemovebgIcon,
            styles.piecesIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/piecesdemonnaie--1-removebgpreview-1.png")}
        />
        <View style={[styles.wrapper2, styles.frameLayout]}>
          <Text style={[styles.text5, styles.textPosition]}>100000$</Text>
        </View>
      </View>
      <Image
        style={[styles.titreDemarrageIcon, styles.aishwaryaPosition]}
        resizeMode="cover"
        source={require("../assets/titre-demarrage.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  aishwaryaPosition: {
    top: 0,
    position: "absolute",
  },
  euroLayout: {
    height: 111,
    position: "absolute",
  },
  wrapperLayout: {
    height: 54,
    top: 147,
    backgroundColor: Color.tan,
    overflow: "hidden",
  },
  wrapper1Position: {
    top: 378,
    height: 54,
    backgroundColor: Color.tan,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    left: 10,
    top: 12,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  piecesIconPosition: {
    height: 103,
    top: 467,
    position: "absolute",
  },
  frameLayout: {
    height: 56,
    backgroundColor: Color.tan,
    position: "absolute",
    overflow: "hidden",
  },
  frameViewPosition: {
    left: 253,
    position: "absolute",
  },
  coins: {
    top: 13,
    left: 60,
    width: 104,
    height: 62,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  coinsWrapper: {
    top: 48,
    left: 83,
    width: 223,
    height: 75,
    backgroundColor: Color.tan,
    position: "absolute",
    overflow: "hidden",
  },
  retour1Icon: {
    width: 50,
    height: 50,
  },
  retour: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    height: 17,
    marginTop: 10,
    width: 72,
    textAlign: "center",
    alignItems: "center",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  retour1Parent: {
    left: 5,
    width: 46,
    height: 55,
    alignItems: "center",
  },
  euroRemovebgPreview11: {
    top: 21,
    width: 114,
    left: 18,
  },
  text: {
    left: -7,
    width: 68,
    height: 42,
    top: 12,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  wrapper: {
    left: 42,
    width: 66,
    position: "absolute",
  },
  collecteDePiecesRemovebgPrIcon: {
    top: 228,
    width: 117,
    height: 142,
    left: 15,
    position: "absolute",
  },
  text1: {
    width: 79,
    height: 42,
  },
  container: {
    width: 95,
    left: 18,
  },
  piecesDeMonnaie2RemovebgIcon: {
    width: 118,
    left: 18,
  },
  text2: {
    width: 123,
    height: 36,
  },
  frame: {
    top: 585,
    width: 140,
    left: 15,
  },
  euroRemovebgPreview1Icon: {
    top: 14,
    left: 221,
    width: 125,
  },
  aishwarya: {
    left: 0,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#020202",
    width: 82,
    textAlign: "center",
  },
  text3: {
    width: 62,
    height: 42,
  },
  frameView: {
    height: 54,
    top: 147,
    backgroundColor: Color.tan,
    overflow: "hidden",
    width: 72,
  },
  piecesDeMonnaieRemovebgPreIcon: {
    top: 239,
    width: 116,
    height: 123,
  },
  text4: {
    width: 100,
    height: 33,
  },
  wrapper1: {
    left: 233,
    width: 121,
  },
  piecesDeMonnaie1RemovebgIcon: {
    left: 242,
    width: 102,
  },
  text5: {
    width: 153,
    height: 29,
  },
  wrapper2: {
    top: 584,
    left: 208,
    width: 151,
  },
  popupPrams: {
    top: 157,
    left: 9,
    borderRadius: 10,
    backgroundColor: "#8d5529",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    width: 372,
    height: 676,
    position: "absolute",
    overflow: "hidden",
  },
  titreDemarrageIcon: {
    marginLeft: -68,
    left: "50%",
    width: 135,
    height: 45,
  },
  coinsIcon: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PiecesScreen;
