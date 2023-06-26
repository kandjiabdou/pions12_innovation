import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfilScreen = () => {
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
          <Text style={styles.headerTitle}>Profil</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('src/assets/drawable/retour.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.profileInfo}>
          <Image
            source={require('src/assets/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.username}>Pseudo</Text>
        </View>
        
        <Button style={styles.editButton}
          title="Modifier profil"
          onPress={() => {}}
        />
      </View>
      <View style={styles.bottomContainer}>
      <View style={styles.connectContainer}>
  <Text style={styles.connect}>Se connecter avec</Text>
</View>  
      <View style={styles.socialIconsContainer}> 
          <Image
            source={require('src/assets/drawable/facebook.png')}
            style={styles.socialIcon}
          />     
          <Image
            source={require('src/assets/drawable/google.png')}
            style={styles.socialIcon}
          />        
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
    backgroundColor: '#8D5529',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    height: 554,
    width: 341,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
  },  
  bottomContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  connectContainer: {
    backgroundColor: '#8D5529',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  connect: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default ProfilScreen;
