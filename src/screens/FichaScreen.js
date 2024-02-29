// FichaScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/fichaScreenStyles';

const FichaScreen = ({ route }) => {
  const { pessoa } = route.params;

  return (
    <View style={styles.fichaContainer}>
      <Image source={{ uri: pessoa.image }} style={styles.fichaIMG} />
      <View>
        <Text
           style={styles.fichaText} >{pessoa.name}</Text>
        <Text style={styles.fichaText}>Altura: {pessoa.altura}
        </Text >
        <Text style={styles.fichaText}>Peso: {pessoa.peso}
        </Text>
        <Text style={styles.fichaText}>Faixa Etária: {pessoa.faixaEtaria}
        </Text>
        <Text style={styles.fichaText}>Origem: {pessoa.origem}
        </Text>
        <Text style={styles.fichaText}>Sexo: {pessoa.sexo}
        </Text>
        <Text style={styles.fichaText}>Sexualidade: {pessoa.sexualidade}
        </Text>
        <Text style={styles.fichaText}>Tatuagem: {pessoa.tatuagem}
        </Text>
        {/* Adicione aqui o restante da apresentação dos dados */}
      </View>
    </View>
  );
};

export default FichaScreen;
