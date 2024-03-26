// HomeScreen.js
import React from 'react';
import SearchBar from '../components/SearchBar';
import styles from '../styles/homeScreenStyles';
import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pessoa from '../Entity/Pessoa';


const HomeScreen = (user) => {

    if (user.isAnonymous){
        navigation.navigate(Login)
    };
    const handleSearch = (searchText) => {
        const filtros = new Pessoa();

        filtros.nome = searchText;

        console.log('Pesquisando por:', filtros.nome);
        navigation.navigate('ResultadoBusca', { filtros } );
    };
    const navigation = useNavigation();

    const handleFiltrarPress = () => {
        navigation.navigate('Filtrar');
    };
    
    const handleCadastrarPress = () => {
       navigation.navigate('Cadastrar');
       //navigation.navigate('pickImage');
    };

    uriFoto = 'https://drive.google.com/file/d/1uUY6LIhuPQ49Jt5wPSu8erefhKWqWau6/view?usp=sharing';
    uriLogo = 'https://oldwesttracker.s3.sa-east-1.amazonaws.com/logo.png';

    return (
        <View style={styles.container}>
            <View style={styles.midContainer}>


                <Image source={{ uri: uriLogo }} style={styles.logo} />
            </View>
            <View style={styles.searchContainer}>
                <SearchBar onSearch={handleSearch} />
            </View>
            <View style={styles.searchContainer}>
                <Pressable style={styles.button} onPress={handleFiltrarPress}>
                    <Text style={styles.buttonText}>CARACTERÍSTICAS </Text>
                </Pressable>
            </View>
            <View style={styles.searchContainer}>
                <Pressable style={styles.button} onPress={handleCadastrarPress}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </Pressable>
            </View>
        </View>
        );
    };
export default HomeScreen;