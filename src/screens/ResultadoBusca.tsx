//ResultadoBusca.js

import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ResultadoBusca = () => {

    const [data, setData] = useState([])

    const loadData = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        if (response.status === 200) {
        const responseJson = await response.json()
        setData(responseJson?.results)
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