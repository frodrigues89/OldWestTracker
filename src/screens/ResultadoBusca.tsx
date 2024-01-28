//ResultadoBusca.js

import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const ResultadoBusca = () => {
    const route = useRoute();
    const { filtros } = route.params;
    console.log(filtros);
    const [data, setData] = useState([])

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
            data={data}
            renderItem={({ item }) => {
              const { name, status, species, image }: any = item
              return (
                <View style={{ marginVertical: 20, alignItems: 'center' }}>
                  <TouchableOpacity
                  onPress={() => handleImagePress(item)}>
                    <Image source={{ uri: image }} width={250} height={250}/>
                    <Text>{name}</Text>
                    <Text>Specie:{species}</Text>
                    <Text>Status:{status}</Text>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
    
    
        </View>
      )
    
}

export default ResultadoBusca;