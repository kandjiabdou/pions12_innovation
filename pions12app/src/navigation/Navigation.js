import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccueilScreen from 'src/screens/AccueilScreen.js';
import ProfilScreen from 'src/screens/ProfilScreen.js';
import ParametresScreen from 'src/screens/ParametresScreen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={AccueilScreen} />
        <Stack.Screen name="Profil" component={ProfilScreen} />
        <Stack.Screen name="Parametres" component={ParametresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
