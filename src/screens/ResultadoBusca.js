//ResultadoBusca.js

import { View, Text, Image, Pressable, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles/resultadoBuscaStyles";

const ResultadoBusca = () => {
    const route = useRoute();
    const  filtros  = route.params.filtros;
    const [data, setData] = useState([])
    const [status, setStatus] = useState([])
    const [count, setCount] = useState(0)


    //esse método pode enviar os filtros como POST para a API
    const loadData = async () => {
      filtros.job = "scan"
      console.log(JSON.stringify(filtros))
      
      fetch('https://tcy36fyg2j.execute-api.sa-east-1.amazonaws.com/Test/', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(filtros),

      })

      .then(response => {

        if (!response.ok) {
          setStatus('Erro na solicitação.');
          throw new Error('Erro na solicitação.');
        }

        return response.json();

      })

      .then(data => {

        console.log('Dados recebidos:', data);
        setData(data.body.response.Items)
        setCount(data.body.response.Count)
        setStatus(data.statusCode)

      })

      .catch(error => {

        console.error('Erro na solicitação:', error);
        setStatus('error')
        // Trate erros aqui

      });
      
    }

    //tratando a navegação do botão BUSCAR
    const navigation = useNavigation();
    
    const handleImagePress = (item) => {
      navigation.navigate('FichaScreen', { pessoa: item });
    }

    useEffect(() => {
        loadData()
    }, [])
    
      return (
        <View style={styles.container}>
          <FlatList
            horizontal={false} // Garante que a lista seja vertical
            scrollEnabled={true} // Habilita a rolagem da lista
            contentContainerStyle={{ flexGrow: 1 }} // Garante que a lista cresça para preencher o espaço disponível
            data={data}
            renderItem={({ item }) => {
              const { nome, origem, image } = item
              return (
                <View style={{ marginVertical: 20, alignItems: 'center' }}>
                  
                  <Pressable
                  onPress={() => handleImagePress(item)}>
                    <Image source={{ uri: image }} style={styles.fichaIMG}/>
                    <Text>{nome}</Text>
                    <Text>Origem:{origem}</Text>
                  </Pressable>
                </View>
              )
            }}

          />
          </View> 
      )
    
}

export default ResultadoBusca;