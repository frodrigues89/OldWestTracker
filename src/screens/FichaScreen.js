import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../styles/fichaScreenStyles';

const FichaScreen = ({ route, navigation }) => {
  const { pessoa } = route.params;
  const uri = pessoa.image;

  return (
    <View style={styles.fichaContainer}>
      <Text style={styles.nomeText}>{pessoa.nome}</Text>
      <Text style={styles.fichaText}>ID: {pessoa.id}</Text>
      <Image source={{ uri: uri }} style={styles.fichaIMG} />
      <View>
        <Text style={styles.fichaText}>RG: {pessoa.rg}</Text>
        <Text style={styles.fichaText}>CPF: {pessoa.cpf}</Text>
        <Text style={styles.fichaText}>Data de Nascimento: {pessoa.dataNascimento}</Text>
        <Text style={styles.fichaText}>Altura: {pessoa.altura}</Text>
        <Text style={styles.fichaText}>Peso: {pessoa.peso}</Text>
        <Text style={styles.fichaText}>Origem: {pessoa.origem}</Text>
        <Text style={styles.fichaText}>Faixa Etária: {pessoa.faixaEtaria}</Text>
        <Text style={styles.fichaText}>Etnia: {pessoa.raca}</Text>
        <Text style={styles.fichaText}>Sexo: {pessoa.sexo}</Text>
        <Text style={styles.fichaText}>Sexualidade: {pessoa.sexualidade}</Text>
        <Text style={styles.fichaText}>Tatuagem: {pessoa.tatuagem}</Text>
      </View>
    </View>
  );
};

export default FichaScreen; 

// Exporte a função de navegação como uma constante fora do componente
export const FichaScreenOptions = ({ navigation, route }) => {
  
  const { pessoa } = route.params;

  const handleEditarBtn = () => {
    navigation.navigate('EditarFicha', { pessoa }); // Passe pessoa como parâmetro para a tela Cadastrar
  };

  return {
    headerRight: () => (
      // Botão que aparece apenas nesta tela
      <Pressable onPress={handleEditarBtn}>
        <Text style={styles.navTabBtn} >Editar</Text>
      </Pressable>
    ),
  };
};
