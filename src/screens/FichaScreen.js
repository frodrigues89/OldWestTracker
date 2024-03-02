// FichaScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/fichaScreenStyles';

const FichaScreen = ({ route }) => {
  const { pessoa } = route.params;

  const uri = 'https://oldwestimg.s3.sa-east-1.amazonaws.com/Pessoas/' + pessoa.id + '/foto.jpg';

  return (
    <View style={styles.fichaContainer}>
      <Text style={styles.nomeText} >{pessoa.nome}
        </Text>
        
      <Text style={styles.fichaText} >ID: {pessoa.id}
      </Text>
      <Image source={{ uri: uri }} style={styles.fichaIMG} />
      <View>
        <Text style={styles.fichaText}>RG: {pessoa.rg}
        </Text>
        <Text style={styles.fichaText}>CPF: {pessoa.cpf}
        </Text>
        <Text style={styles.fichaText}>Data de Nascimento: {pessoa.dataNascimento}
        </Text>
        <Text style={styles.fichaText}>Altura: {pessoa.altura}
        </Text >
        <Text style={styles.fichaText}>Peso: {pessoa.peso}
        </Text>
        <Text style={styles.fichaText}>Origem: {pessoa.origem}
        </Text>
        <Text style={styles.fichaText}>Faixa Etária: {pessoa.faixaEtaria}
        </Text>
        <Text style={styles.fichaText}>Etnia: {pessoa.raca}
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
