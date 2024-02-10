//ResultadoBusca.js

import { View, Text, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { FlatList, ScrollView } from "react-native-web";

const ResultadoBusca = () => {
    const route = useRoute();
    const  filtros  = route.params;
    console.log(filtros);
    const [data, setData] = useState([])
    
    //esse método pode enviar os filtros como POST para a API
    /*
    const loadData =async () => {
      fetch('URL_DO_SEU_BACKEND/api/pessoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filtros),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na solicitação.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Dados recebidos:', data);
        // Manipule a resposta conforme necessário
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
        // Trate erros aqui
      });
    }
    */
    // Método loadData para buscar na API rickandmorty
    const loadData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (response.status === 200) {
          const responseJson = await response.json();
          setData(responseJson?.results);
        } else {
          console.error('Erro na resposta da API:', response.status);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }
    //tratando a navegação do botão BUSCAR
    const navigation = useNavigation();
    
    const handleImagePress = (item) => {
      navigation.navigate('FichaScreen', { characterData: item });
    }

    useEffect(() => {
        loadData()
      }, [])
    
      return (
        <View>
          <FlatList
            horizontal={false} // Garante que a lista seja vertical
            scrollEnabled={true} // Habilita a rolagem da lista
            contentContainerStyle={{ flexGrow: 1 }} // Garante que a lista cresça para preencher o espaço disponível
            data={data}
            renderItem={({ item }) => {
              const { name, status, species, image } = item
              return (
                <View style={{ marginVertical: 20, alignItems: 'center' }}>
                  <Pressable
                  onPress={() => handleImagePress(item)}>
                    <Image source={{ uri: image }} style={styles.fichaIMG}/>
                    <Text>{name}</Text>
                    <Text>Specie:{species}</Text>
                    <Text>Status:{status}</Text>
                  </Pressable>
                </View>
              )
            }}

          />
          </View>
      )
    
}

export default ResultadoBusca;