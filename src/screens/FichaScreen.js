import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../styles/fichaScreenStyles';
import { ScrollView } from 'react-native';

const FichaScreen = ({ route, navigation }) => {
  const { pessoa } = route.params;
  const uri = pessoa.image;

  return (
    <View style={styles.fichaContainer}>
      <Text style={styles.nomeText}>{pessoa.nome}</Text>
      <Text style={styles.fichaText}>ID: {pessoa.id}</Text>
      <ScrollView>
        <Image source={{ uri: uri }} style={styles.fichaIMG} />
        <Text style={styles.fichaText}>RG: {pessoa.rg}</Text>
        <Text style={styles.fichaText}>CPF: {pessoa.cpf}</Text>
        <Text style={styles.fichaText}>Data de Nascimento: {pessoa.dataNascimento}</Text>
        <Text style={styles.fichaText}>Mãe: {pessoa.mae}</Text>
        <Text style={styles.fichaText}>Pai: {pessoa.pai}</Text>
        <Text style={styles.fichaText}>Estado Civil: {pessoa.estadoCivil}</Text>
        <Text style={styles.fichaText}>Naturalidade: {pessoa.naturalidade}</Text>
        <Text style={styles.fichaText}>Ocupação: {pessoa.ocupacao}</Text>
        <Text style={styles.fichaText}>CEP: {pessoa.cep}</Text>
        <Text style={styles.fichaText}>Endereço: {pessoa.endereco}</Text>
        <Text style={styles.fichaText}>Tel. Residencial: {pessoa.telResidencial}</Text>
        <Text style={styles.fichaText}>Tel. Celular: {pessoa.telCelular}</Text>
        <Text style={styles.fichaObs} numberOfLines={null}>Observações: {pessoa.observacoes}</Text>
      </ScrollView>
    </View>
  );
};

export default FichaScreen; 

// Exporte a função de navegação como uma constante fora do componente
export const FichaScreenOptions = ({ navigation, route }) => {
  
  const { pessoa } = route.params;

  const handleEditarBtn = () => {
    navigation.navigate('Cadastrar', { pessoa }); // Passe pessoa como parâmetro para a tela Cadastrar
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
