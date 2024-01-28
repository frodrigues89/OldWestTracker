// FichaScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const FichaScreen = ({ route }) => {
    const { characterData } = route.params;

  return (
    <View>
      <Image source={{ uri: characterData.image }} style={{ width: 250, height: 250 }} />
      <Text>{characterData.name}</Text>
      <Text>Specie: {characterData.species}</Text>
      <Text>Status: {characterData.status}</Text>
      {/* Adicione aqui o restante da apresentação dos dados */}
    </View>
  );
};

export default FichaScreen;
