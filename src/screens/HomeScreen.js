// HomeScreen.js
import React from 'react';
import SearchBar from './SearchBar';
import styles from './styles';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
        <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.searchContainer}>
            <SearchBar onSearch={handleSearch} />
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={handleFiltrarPress}>
                <Text style={styles.buttonText}>Filtrar</Text>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
        </View>
        );
    };
export default HomeScreen;