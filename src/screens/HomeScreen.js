// HomeScreen.js
import React from 'react';
import SearchBar from './SearchBar';
import styles from './styles';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

    const handleSearch = (searchText) => {
        console.log('Pesquisando por:', searchText);
        // Adicione sua lógica de pesquisa aqui
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