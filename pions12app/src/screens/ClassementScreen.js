import * as React from "react";
import {Text, StyleSheet, View, Image, ImageBackground} from "react-native";

const ClassementScreen = () => {
  	
  	return (
    		<ImageBackground 
            style={styles.classementIcon} 
            resizeMode="cover" 
            source={require("src/assets/drawable/background2.jpg")}>
      			<View style={styles.classementWrapper}>
        			<Text style={styles.classement}> CLASSEMENT</Text>
      			</View>
      			<View style={styles.retour1Parent}>
        			<Image style={styles.retour1Icon1} resizeMode="cover" source="retour.png" />
      			</View>
      			<Image style={styles.ellipseIcon} resizeMode="cover" source="profile.png" />
                <Text style={styles.nom}>Username</Text>
      			<Text style={[styles.points, styles.rangTypo]}>Points</Text>
      			<Text style={[styles.rang, styles.rangTypo]}>Rang</Text>
      			<View style={[styles.classementChild, styles.classementShadowBox]} />
      			    <Text style={[styles.jour, styles.jourTypo]}>jour</Text>
                    <Text style={[styles.annee, styles.jourTypo]}>annee</Text>
      			    <Text style={[styles.mois, styles.jourTypo]}>mois</Text>
      			<View style={styles.classementItem} />
      			<View style={[styles.classementInner, styles.classementShadowBox]} />
      			
      			<View style={styles.popupPrams1} />
      			
    		</ImageBackground>);
};

const styles = StyleSheet.create({
  	classementShadowBox: {
    		height: 25,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		backgroundColor: "#8d5529",
    		borderRadius: 20,
    		top: 277,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	jourTypo: {
    		height: 28,
    		width: 71,
    		fontSize: 20,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Inter_regular",
    		position: "absolute"
  	},
  	rangTypo: {
    		top: 154,
    		height: 28,
    		fontSize: 20,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Inter_regular",
    		position: "absolute"
  	},
  	classement: {
    		top: 13,
    		fontSize: 32,
    		width: 284,
    		height: 46,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Inter_regular",
    		left: 11,
    		position: "absolute"
  	},
  	classementWrapper: {
    		top: 50,
    		left: 76,
    		backgroundColor: "#deb796",
    		width: 252,
    		height: 66,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	retour1Icon1: {
    		width: 50,
    		height: 50
  	},
  	retour: {
    		fontSize: 14,
    		display: "flex",
    		justifyContent: "center",
    		width: 72,
    		height: 17,
    		marginTop: 10,
    		textAlign: "center",
    		alignItems: "center",
    		color: "#000",
    		fontFamily: "Inter_regular"
  	},
  	retour1Parent: {
    		top: 0,
    		left: 7,
    		width: 46,
    		height: 55,
    		alignItems: "center",
    		position: "absolute"
  	},
  	classementChild: {
    		width: 111,
    		left: 11,
    		height: 25
  	},
  	jour: {
    		left: 51,
    		top: 276
  	},
  	classementItem: {
    		left: 139,
    		width: 118,
    		height: 26,
    		top: 276,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		borderRadius: 20,
    		backgroundColor: "#8d5529",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	classementInner: {
    		left: 274,
    		width: 104
  	},
  	annee: {
    		left: 300,
    		top: 276
  	},
  	mois: {
    		left: 179,
    		top: 277,
    		width: 71,
    		fontSize: 20
  	},
  	ellipseIcon: {
    		top: 137,
    		left: 164,
    		width: 61,
    		height: 61,
    		position: "absolute"
  	},
  	points: {
    		left: 44,
    		width: 63
  	},
  	rang: {
    		left: 295,
    		width: 62
  	},
  	popupPrams1: {
    		top: 324,
    		left: 19,
    		borderRadius: 10,
    		borderStyle: "solid",
    		borderColor: "rgba(0, 0, 0, 0.1)",
    		borderWidth: 1,
    		width: 349,
    		height: 502,
    		backgroundColor: "#8d5529",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	nom: {
    		top: 202,
    		left: 151,
    		fontSize: 16,
    		fontWeight: "500",
    		fontFamily: "Inter_medium",
    		color: "#020202",
    		width: 82,
    		textAlign: "center",
    		position: "absolute"
  	},
  	classementIcon: {
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default ClassementScreen;
