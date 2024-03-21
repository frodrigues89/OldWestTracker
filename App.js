// App.js 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Sua tela principal
import FiltrarScreen from './src/screens/FiltrarScreenModal'; // tela Filtrar
import ResultadoBusca from './src/screens/ResultadoBusca'; //tela resultadoBusca
import FichaScreen, {FichaScreenOptions} from './src/screens/FichaScreen'; //tela de ficha
import Login from './src/screens/Login'; //tela de login
import Cadastrar from './src/screens/Cadastrar';
import EditarFicha from './src/screens/EditarFicha';
import { navigationOptions } from './src/utils/navigationOptions';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {({ navigation }) => navigationOptions(navigation)}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Filtrar" component={FiltrarScreen} />
        <Stack.Screen name="ResultadoBusca" component={ResultadoBusca}/>
        <Stack.Screen name="FichaScreen" component={FichaScreen} options={FichaScreenOptions}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar}/>
        <Stack.Screen name="EditarFicha" component={EditarFicha}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
