//ResultadoBusca.js

import { View, Text, Image, Pressable, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles/resultadoBuscaStyles";

const ResultadoBusca = () => {
    const route = useRoute();
    const  filtros  = route.params.filtros;
    const [data, setData] = useState([]);


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
        setData(data.body.response.Items);

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
            data={data}
            renderItem={({ item }) => {
              const { nome, origem, image, atividade, id } = item
              const uri = 'https://oldwestimg.s3.sa-east-1.amazonaws.com/Pessoas/' + id + '/foto.jpg';
              return (
                <View style={styles.itemContainer}>
                  
                  <Pressable
                  onPress={() => handleImagePress(item)}>
                    <Image source={{ uri: uri }} style={styles.fichaIMG}/>
                    <Text style={styles.txtNome}>{nome}</Text>
                    <Text style={styles.txt}>Atividade: {atividade}</Text>
                    <Text style={styles.txt}>Origem: {origem}</Text>
                  </Pressable>
                </View>
              )
            }}

          />
          </View> 
      )
    
}

export default ResultadoBusca;