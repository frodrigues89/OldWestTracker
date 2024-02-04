// HomeScreen.js
import React from 'react';
import SearchBar from './SearchBar';
import styles from './styles';
import { Image, Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Pessoa from '../Entity/Pessoa';


const HomeScreen = () => {

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

    return (
        <View style={styles.container}>
        <View style={styles.midContainer}>
            <Image source={{ uri: 'https://oldwesttracker.s3.sa-east-1.amazonaws.com/static/media/logo.cf8cc703af0ba4981dd3.png' }} style={styles.logo} />
        </View>
        <View style={styles.midContainer}>
            <SearchBar onSearch={handleSearch} />
        </View>
        <View style={styles.midContainer}>
            <Pressable style={styles.button} onPress={handleFiltrarPress}>
                <Text style={styles.buttonText}>Filtrar</Text>
            </Pressable>
        </View>
        <StatusBar style="auto" />
        </View>
        );
    };
export default HomeScreen;