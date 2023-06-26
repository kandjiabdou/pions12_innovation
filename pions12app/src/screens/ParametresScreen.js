import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ParametresScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
      source={require('src/assets/drawable/background2.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.header}>
        <Image
          source={require('src/assets/drawable/titre_demarrage.png')}
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Paramètres</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('src/assets/drawable/retour.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Audio</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Langue</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Thèmes du plateau</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Thèmes des pions</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Aide</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Tutoriel</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Boutique</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Confidentialité</Text>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  titleContainer: {
    marginLeft: 8,
    justifyContent: 'flex-end',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#8D5529',
    height: 531,
    width: 341,
  },
  option: {
    paddingVertical: 12,
    paddingLeft: 16,
    backgroundColor: '#DEB796',
  },
  optionText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default ParametresScreen;
