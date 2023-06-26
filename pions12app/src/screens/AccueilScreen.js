import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('src/assets/drawable/background2.jpg')}
      style={styles.backgroundImage}
    >
      {/* Header */}
      <Image
          source={require('src/assets/profile.png')}
          style={styles.profileImage}
      />

      {/* Boutons de navigation */}
      <View style={styles.navigationButtons}>
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
          style={styles.appIcon}
        />
      </View>

      {/* Contenu principal */}
      <View style={styles.content}>
        <Button
          title="Jouer avec l'ordinateur"
          onPress={() => {}}
        />
        <Button
          title="Jouer en local"
          onPress={() => {}}
        />
        <Button
          title="Jouer en ligne"
          onPress={() => {}}
        />
        <Button
          title="Jouer avec des amis"
          onPress={() => {}}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Button
          title="Paramètres"
          onPress={() => navigation.navigate('Paramètres')}
        />
        <Button title="Aide" onPress={() => {}} />
        <Button title="Partager" onPress={() => {}} />
      </View>
      </ImageBackground>
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
    width: 200,
    height: 200,
  },
  navigationButtons: {
    marginBottom: 20,
  },
  content: {
    marginBottom: 20,
  },
  footer: {},
});

export default HomeScreen;