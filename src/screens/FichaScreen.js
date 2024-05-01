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
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>RG:</Text>
          <Text style={styles.fichaText}> {pessoa.rg}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>CPF: </Text>
          <Text style={styles.fichaText}>{pessoa.cpf}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>Data de Nascimento:</Text>
          <Text style={styles.fichaText}> {pessoa.dataNascimento}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>Mãe:</Text>
          <Text style={styles.fichaText}> {pessoa.mae}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>Pai:</Text>
          <Text style={styles.fichaText}> {pessoa.pai}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>Estado Civil:</Text>
          <Text style={styles.fichaText}> {pessoa.estadoCivil}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>Naturalidade:</Text>
          <Text style={styles.fichaText}> {pessoa.naturalidade}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>Ocupação:</Text>
          <Text style={styles.fichaText}> {pessoa.ocupacao}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>CEP:</Text>
          <Text style={styles.fichaText}> {pessoa.cep}</Text>
        </View>
        <View style={{ flexDirection: 'column', borderWidth: 0.2 }}>
          <Text style={styles.fichaTextEnum}>Endereço:</Text>
          <Text style={styles.fichaText}>{pessoa.endereco}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>Tel. Residencial:</Text>
          <Text style={styles.fichaText}> {pessoa.telResidencial}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.fichaTextEnum}>Tel. Celular:</Text>
          <Text style={styles.fichaText}> {pessoa.telCelular}</Text>
        </View>
        <View style={{ flexDirection: 'column', borderWidth: 0.2 }}>
          <Text style={styles.fichaObs} numberOfLines={null}>Observações:</Text>
          <Text style={styles.fichaText}> {pessoa.observacoes}</Text>
        </View>
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
        <Text style={styles.navTabBtn} >✎</Text>
      </Pressable>
    ),
  };
};
