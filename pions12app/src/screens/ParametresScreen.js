import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ParametresScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/drawable/background2.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <Image
          source={require('src/assets/drawable/titre_demarrage.png')}
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Paramètres</Text>
        </View>
        <TouchableOpacity onPress={() => { }}>
          <Image
            source={require('src/assets/drawable/retour.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Audio</Text>
          <View style={styles.sound}>
            <Image
              source={require('src/assets/drawable/son_on.png')}
              style={styles.soundIcon}
            />
          </View>
          <View style={styles.music}>
            <Image
              source={require('src/assets/drawable/music_on.png')}
              style={styles.musicIcon}
            />
          </View>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Langue</Text>
          <View style={styles.language}>
            <Image
              source={require('src/assets/drawable/francais.png')}
              style={styles.backIcon}
            />
          </View>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Thèmes du plateau</Text>
          <View style={styles.themePlateau}>
            <Text style={styles.choix}>Choisir</Text>
          </View>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Thèmes des pions</Text>
          <View style={styles.themePions}>
            <Text style={styles.choix}>Choisir</Text>
          </View>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Aide</Text>
          <View style={styles.help}>
            <Image
              source={require('src/assets/drawable/aide.png')}
              style={styles.helpIcon}
            />
          </View>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Tutoriel</Text>
          <View style={styles.tutorial}>
            <Image
              source={require('src/assets/drawable/game.png')}
              style={styles.gameIcon}
            />
          </View>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Boutique</Text>
          <View style={styles.shop}>
            <Image
              source={require('src/assets/drawable/store.png')}
              style={styles.gameIcon}
            />
          </View>
        </View>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Notifications</Text>
        <View style={styles.notifications}>
          <Text style={styles.edit}>Modifier</Text>
        </View>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Confidentialité</Text>
        <View style={styles.confidentiality}>
          <Text style={styles.edit}>Modifier</Text>
        </View>
      </View>
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
