import * as React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const JeuScreen = () => {
  return (
    <ImageBackground
      style={styles.partieJeuIcon}
      resizeMode="cover"
      source={require("../assets/partiejeu.png")}
    >
      <View style={styles.game}>
        <View style={styles.gameChild} />
        <View style={styles.frameParent}>
          <View style={[styles.groupParent, styles.parentLayout]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-6.png")}
            />
            <Text style={[styles.offerDraw, styles.retourTypo]}>
              Offer draw
            </Text>
          </View>
          <View style={styles.groupContainer}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-61.png")}
            />
            <Text style={[styles.offerDraw, styles.retourTypo]}>quitter</Text>
          </View>
        </View>
        <View style={[styles.retour1Parent, styles.parentLayout]}>
          <Image
            style={styles.retour1Icon}
            resizeMode="cover"
            source={require("../assets/retour-1.png")}
          />
          <Text style={[styles.retour, styles.retourTypo]}>retour</Text>
        </View>
        <View style={[styles.homeIndicator, styles.frameGroupPosition]} />
        <View style={[styles.frameGroup, styles.frameGroupPosition]}>
          <View style={styles.frameView}>
            <Image
              style={styles.retour1Icon}
              resizeMode="cover"
              source={require("../assets/group-7.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>00:45</Text>
          </View>
          <View style={styles.tourDeNoirWrapper}>
            <Text style={[styles.tourDeNoir, styles.textTypo]}>
              Tour de NOIR
            </Text>
          </View>
        </View>
        <Image
          style={[styles.mvmDame1Icon, styles.frameGroupPosition]}
          resizeMode="cover"
          source={require("../assets/mvm-dame-1.png")}
        />
        <View style={[styles.pionBd1Parent, styles.pionLayout]}>
          <Image
            style={[styles.pionBd1Icon, styles.pionIconLayout2]}
            resizeMode="cover"
            source={require("../assets/pion-bd-1.png")}
          />
          <Image
            style={[styles.pionBd4Icon, styles.pionIconPosition1]}
            resizeMode="cover"
            source={require("../assets/pion-bd-4.png")}
          />
          <Image
            style={[styles.pionBd2Icon, styles.pionIconPosition]}
            resizeMode="cover"
            source={require("../assets/pion-bd-2.png")}
          />
          <Image
            style={[styles.pionBd3Icon, styles.pionIconPosition]}
            resizeMode="cover"
            source={require("../assets/pion-bd-3.png")}
          />
          <Image
            style={[styles.pionBdDame1Icon, styles.pionLayout]}
            resizeMode="cover"
            source={require("../assets/pion-bd-dame-1.png")}
          />
          <Image
            style={[styles.pionBd5Icon, styles.pionIconPosition1]}
            resizeMode="cover"
            source={require("../assets/pion-bd-5.png")}
          />
          <Image
            style={[styles.pionBd6Icon, styles.pionIconLayout2]}
            resizeMode="cover"
            source={require("../assets/pion-bd-6.png")}
          />
        </View>
        <View style={[styles.pionNpParent, styles.pionIconLayout1]}>
          <Image
            style={[styles.pionNpIcon, styles.pionIconLayout1]}
            resizeMode="cover"
            source={require("../assets/pion-np.png")}
          />
          <Image
            style={[styles.pionNpIcon1, styles.pionIconLayout1]}
            resizeMode="cover"
            source={require("../assets/pion-np1.png")}
          />
          <Image
            style={[styles.pionNpDameIcon, styles.pionIconLayout1]}
            resizeMode="cover"
            source={require("../assets/pion-np-dame.png")}
          />
        </View>
        <Image
          style={[styles.pionBd1Icon1, styles.pionIconLayout]}
          resizeMode="cover"
          source={require("../assets/pion-bd-11.png")}
        />
        <Image
          style={[styles.pionNpIcon2, styles.pionIconLayout]}
          resizeMode="cover"
          source={require("../assets/pion-np2.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 62,
    alignItems: "center",
  },
  retourTypo: {
    width: 72,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    marginTop: 10,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  frameGroupPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  pionLayout: {
    height: 35,
    position: "absolute",
  },
  pionIconLayout2: {
    height: 30,
    top: 2,
    width: 34,
    position: "absolute",
  },
  pionIconPosition1: {
    top: 5,
    height: 30,
    width: 34,
    position: "absolute",
  },
  pionIconPosition: {
    top: 3,
    height: 30,
    width: 34,
    position: "absolute",
  },
  pionIconLayout1: {
    height: 34,
    position: "absolute",
  },
  pionIconLayout: {
    height: 81,
    position: "absolute",
  },
  gameChild: {
    top: 261,
    alignItems: "flex-end",
    justifyContent: "center",
    left: 12,
    position: "absolute",
  },
  frameChild: {
    width: 44,
    height: 44,
  },
  offerDraw: {
    marginTop: 10,
  },
  groupParent: {
    alignItems: "center",
  },
  groupContainer: {
    marginLeft: 28,
    alignItems: "center",
  },
  frameParent: {
    top: 39,
    left: 219,
    flexDirection: "row",
    position: "absolute",
  },
  retour1Icon: {
    width: 50,
    height: 50,
  },
  retour: {
    display: "flex",
    height: 17,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  retour1Parent: {
    top: 36,
    left: 17,
    alignItems: "center",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#020202",
    marginTop: 6,
  },
  frameView: {
    alignItems: "center",
  },
  tourDeNoir: {
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  tourDeNoirWrapper: {
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginTop: 10,
    flexDirection: "row",
  },
  frameGroup: {
    marginLeft: -54,
    top: 139,
    width: 108,
    height: 112,
    alignItems: "center",
  },
  mvmDame1Icon: {
    marginLeft: -175,
    top: 338,
    width: 350,
    height: 350,
  },
  pionBd1Icon: {
    left: 0,
  },
  pionBd4Icon: {
    left: 193,
  },
  pionBd2Icon: {
    left: 31,
  },
  pionBd3Icon: {
    left: 102,
  },
  pionBdDame1Icon: {
    left: 62,
    width: 37,
    top: 0,
  },
  pionBd5Icon: {
    left: 166,
  },
  pionBd6Icon: {
    left: 136,
  },
  pionBd1Parent: {
    top: 271,
    width: 227,
    left: 12,
  },
  pionNpIcon: {
    left: 68,
    width: 34,
    height: 34,
    top: 0,
  },
  pionNpIcon1: {
    width: 34,
    height: 34,
    top: 0,
    left: 0,
  },
  pionNpDameIcon: {
    left: 34,
    width: 34,
    height: 34,
    top: 0,
  },
  pionNpParent: {
    top: 736,
    left: 268,
    width: 102,
  },
  pionBd1Icon1: {
    top: 126,
    width: 88,
    left: 0,
  },
  pionNpIcon2: {
    top: 134,
    left: 289,
    width: 81,
  },
  game: {
    left: 1,
    width: 390,
    overflow: "hidden",
    top: 0,
    position: "absolute",
    height: 844,
  },
  partieJeuIcon: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default JeuScreen;
