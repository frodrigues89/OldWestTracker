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
        <Text style={styles.fichaText}>Altura: {characterData.altura}
        </Text >
        <Text style={styles.fichaText}>Peso: {characterData.peso}
        </Text>
        <Text style={styles.fichaText}>Faixa Etária: {characterData.faixaEtaria}
        </Text>
        <Text style={styles.fichaText}>Origem: {characterData.origem}
        </Text>
        <Text style={styles.fichaText}>Sexo: {characterData.sexo}
        </Text>
        <Text style={styles.fichaText}>Sexualidade: {characterData.sexualidade}
        </Text>
        <Text style={styles.fichaText}>Tatuagem: {characterData.tatuagem}
        </Text>
        {/* Adicione aqui o restante da apresentação dos dados */}
      </View>
    </View>
  );
};

export default FichaScreen;
