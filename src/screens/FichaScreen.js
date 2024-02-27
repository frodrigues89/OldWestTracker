// FichaScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/fichaScreenStyles';

const FichaScreen = ({ route }) => {
  const { characterData } = route.params;

  return (
    <View style={styles.fichaContainer}>
      <Image source={{ uri: characterData.image }} style={styles.fichaIMG} />
      <View>
        <Text
           style={styles.fichaText} >{characterData.name}</Text>
        <Text style={styles.fichaText}>Specie: {characterData.species}
        </Text >
        <Text style={styles.fichaText}>Status: {characterData.status}
        </Text>
        {/* Adicione aqui o restante da apresentação dos dados */}
      </View>
    </View>
  );
};

export default FichaScreen;
