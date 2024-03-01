// App.js 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Sua tela principal
import FiltrarScreen from './src/screens/FiltrarScreenModal'; // tela Filtrar
import ResultadoBusca from './src/screens/ResultadoBusca'; //tela resultadoBusca
import FichaScreen from './src/screens/FichaScreen'; //tela da ficha de um mala específico
import Login from './src/screens/Login'; //tela de login
import Cadastrar from './src/screens/Cadastrar';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Filtrar" component={FiltrarScreen} />
        <Stack.Screen name="ResultadoBusca" component={ResultadoBusca}/>
        <Stack.Screen name="FichaScreen" component={FichaScreen}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
