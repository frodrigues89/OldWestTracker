// HomeScreen.js
import React from 'react';
import SearchBar from '../components/SearchBar';
import styles from '../styles/homeScreenStyles';
import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pessoa from '../Entity/Pessoa';


const HomeScreen = (user) => {

    console.log(user);
    if (user.isAnonymous){
        navigation.navigate(Login)
    };
    const handleSearch = (searchText) => {
        const filtros = new Pessoa();

        filtros.nome = searchText;
        filtros.altura = "";
        filtros.peso = "";
        filtros.faixaEtaria = "";
        filtros.origem = "";
        filtros.sexo = "";
        filtros.sexualidade = "";
        filtros.tatuagem = "";
        console.log('Pesquisando por:', filtros.nome);
        navigation.navigate('ResultadoBusca', { filtros } );
    };
    const navigation = useNavigation();

    const handleFiltrarPress = () => {
        navigation.navigate('Filtrar');
    };
    
    const handleCadastrarPress = () => {
        navigation.navigate('Cadastrar');
    };

    return (
        <View style={styles.container}>
            <View style={styles.midContainer}>
                <Image source={{ uri: 'https://oldwesttracker.s3.sa-east-1.amazonaws.com/logo.png' }} style={styles.logo} />
            </View>
            <View style={styles.midContainer}>
                <SearchBar onSearch={handleSearch} />
            </View>
            <View style={styles.midContainer}>
                <Pressable style={styles.button} onPress={handleFiltrarPress}>
                    <Text style={styles.buttonText}>Filtrar</Text>
                </Pressable>
            </View>
            {/*
            <View style={styles.midContainer}>
                <Pressable style={styles.button} onPress={handleCadastrarPress}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </Pressable>
            </View>
    */}
        </View>
        );
    };
export default HomeScreen;