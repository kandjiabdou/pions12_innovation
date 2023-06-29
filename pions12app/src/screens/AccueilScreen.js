import React from 'react';
import { View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

const AccueilScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('src/assets/drawable/background2.jpg')}
      style={styles.backgroundImage}
    />
      {/* Header */}
      <Image
          source={require('src/assets/profile.png')}
          style={styles.profileImage}
      />

      {/* Boutons de navigation */}
      <View style={styles.headerButtons}>
        <Button
          title="Classement"
          onPress={() => navigation.navigate('Classement')}
        />
        <Button
          title="Invitations"
          onPress={() => navigation.navigate('Invitations')}
        />
        <Button
          title="Parties enregistrées"
          onPress={() => navigation.navigate('PartiesEnregistrees')}
        />
      </View>

      {/* Image de l'icône de l'application */}
      <View style={styles.imageContainer}>
        <Image
          source={require('src/assets/drawable/titre_demarrage.png')}
          resizeMode="cover"
          style={styles.appIcon}
        />
      </View>

      {/* Contenu principal */}
      <View style={styles.content}>
        <Button
          title="Jouer avec l'ordinateur"
          onPress={() => {}}
        />
        <Image
          style={styles.computerPlay}
          resizeMode="cover"
          source={require("../assets/computerPlay")}
        />
        <Button
          title="Jouer en local"
          onPress={() => {}}
        />
        <Image
          style={styles.localPlay}
          resizeMode="cover"
          source={require("../assets/localPlay")}
        />
        <Button
          title="Jouer en ligne"
          onPress={() => {}}
        />
        <Image
          style={styles.onlinePlay}
          resizeMode="cover"
          source={require("../assets/onlinePlay")}
        />
        <Button
          title="Jouer avec des amis"
          onPress={() => {}}
        />
        <Image
          style={styles.friendsPlay}
          resizeMode="cover"
          source={require("../assets/friendsPlay")}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
      <IconButton
    icon={() => <Icon name="cog" size={24} color="white" />}
    onPress={() => navigation.navigate('Paramètres')}
  />
  <IconButton
    icon={() => <Icon name="help-circle" size={24} color="white" />}
    onPress={() => {}}
  />
  <IconButton
    icon={() => <Icon name="thumb-up" size={24} color="blue" />}
    onPress={() => {}}
  />
  <IconButton
    icon={() => <Icon name="share" size={24} color="white" />}
    onPress={() => {}}
  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appIcon: {
    width: 274,
    height: 79,
  },
  headerButtons: {
    marginBottom: 20,
  },
  content: {
    marginBottom: 20,
  },
  Button: {
    width: 133, 
    height: 93,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccueilScreen;