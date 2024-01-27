// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Sua tela principal
import FiltrarScreen from './screens/FiltrarScreenModal'; // tela Screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Filtrar" component={FiltrarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;