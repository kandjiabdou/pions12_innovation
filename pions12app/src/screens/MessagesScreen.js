import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const MessageIcon = () => {
  return (
    <ImageBackground
      style={styles.messageIcon}
      resizeMode="cover"
      source={require("../assets/message.png")}
    >
      <View style={styles.profile4Parent}>
        <Image
          style={styles.profile4Icon}
          resizeMode="cover"
          source={require("../assets/profile-4.png")}
        />
        <View style={styles.aishwaryaParent}>
          <Text style={styles.aishwarya}>Aishwarya</Text>
          <Text style={styles.niveau5}>niveau 5</Text>
        </View>
      </View>
      <View style={styles.retour1Parent}>
        <Image
          style={styles.retour1Icon}
          resizeMode="cover"
          source={require("../assets/retour-1.png")}
        />
        <Text style={styles.retour}>retour</Text>
      </View>
      <View style={[styles.vectorParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-2642.png")}
        />
        <Text
          style={[styles.utilisantLesStructures, styles.utilisantTypo]}
        >{`utilisant les structures propres à une langue
utilisant les structures`}</Text>
        <Text
          style={[styles.utilisantLesStructures1, styles.utilisantTypo]}
        >{`utilisant les structures propres à une langue
utilisant les structures`}</Text>
        <Text style={[styles.utilisantLesStructures2, styles.utilisantTypo]}>
          utilisant les structures propres à une langue
        </Text>
        <Text
          style={[styles.texteMessage, styles.utilisantTypo]}
        >{`texte message `}</Text>
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={styles.message}>Message</Text>
      </View>
      <Image
        style={styles.image11Icon}
        resizeMode="cover"
        source={require("../assets/image-11.png")}
      />
      <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
      <Text style={[styles.time1, styles.timeTypo]}>10:03</Text>
      <Text style={[styles.time2, styles.timeTypo]}>10:04</Text>
      <Text style={[styles.time3, styles.timeTypo]}>9:45</Text>
      <Image
        style={[styles.titreDemarrageIcon, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/titre-demarrage.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 294,
    width: 360,
    position: "absolute",
  },
  utilisantTypo: {
    width: 183,
    fontSize: FontSize.size_sm,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
  },
  framePosition: {
    left: "50%",
    position: "absolute",
  },
  timeTypo: {
    width: 57,
    fontFamily: FontFamily.alataRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_5xs,
    top: "50%",
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  profile4Icon: {
    borderRadius: 50,
    width: 66,
    height: 66,
  },
  aishwarya: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#020202",
    width: 82,
    textAlign: "center",
  },
  niveau5: {
    fontSize: 12,
    marginTop: 2,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  aishwaryaParent: {
    marginTop: 5,
    alignItems: "center",
  },
  profile4Parent: {
    top: 55,
    left: 282,
    alignItems: "center",
    position: "absolute",
  },
  retour1Icon: {
    width: 50,
    height: 50,
  },
  retour: {
    display: "flex",
    justifyContent: "center",
    width: 72,
    height: 17,
    marginTop: 10,
    fontSize: FontSize.size_sm,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    alignItems: "center",
  },
  retour1Parent: {
    top: 63,
    left: 8,
    width: 62,
    alignItems: "center",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: 10,
  },
  utilisantLesStructures: {
    top: 68,
    left: 34,
  },
  utilisantLesStructures1: {
    top: 233,
    left: 9,
  },
  utilisantLesStructures2: {
    top: 155,
    right: 23,
  },
  texteMessage: {
    top: 9,
    left: 163,
  },
  vectorParent: {
    top: 173,
    left: 11,
  },
  message: {
    marginTop: -25,
    marginLeft: -61.5,
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.alegreyaBoldItalic,
    width: 122,
    height: 39,
    top: "50%",
    left: "50%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  frame: {
    marginLeft: -108.5,
    top: 59,
    borderRadius: 5,
    backgroundColor: "#deb796",
    width: 177,
    height: 50,
    overflow: "hidden",
  },
  image11Icon: {
    top: 487,
    left: 10,
    width: 370,
    height: 346,
    position: "absolute",
  },
  time: {
    marginTop: -215,
    left: 311,
  },
  time1: {
    marginTop: -49,
    left: 303,
  },
  time2: {
    marginTop: 48,
    left: 7,
  },
  time3: {
    marginTop: -117,
    left: 32,
  },
  titreDemarrageIcon: {
    marginLeft: -81.5,
    top: 10,
    width: 135,
    height: 45,
  },
  messageIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default MessageIcon;
