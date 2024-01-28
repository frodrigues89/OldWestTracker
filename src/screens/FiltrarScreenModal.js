import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Altura from '../Entity/Altura';
import DropdownComponent from '../components/DropdownComponent';
import styles from './styles';
import FaixaEtaria from '../Entity/FaixaEtaria';
import Origem from '../Entity/Origem';
import Sexo from '../Entity/Sexo';
import Sexualidade from '../Entity/Sexualidade';
import Peso from '../Entity/Peso';
import { useNavigation } from '@react-navigation/native';

const FiltrarScreenModal = () => {
    // Estados para controlar a visibilidade de cada modal
    const [isAlturaModalVisible, setAlturaModalVisible] = useState(false);
    const [isFaixaEtariaModalVisible, setFaixaEtariaModalVisible] = useState(false);
    const [isOrigemModalVisible, setOrigemModalVisible] = useState(false);
    const [isSexoModalVisible, setSexoModalVisible] = useState(false);
    const [isSexualidadeModalVisible, setSexualidadeModalVisible] = useState(false);
    const [isPesoModalVisible, setPesoModalVisible] = useState(false);

    // métodos para tratar a visibilidade do modal.
    const toggleAlturaModal = () => {
        setAlturaModalVisible(!isAlturaModalVisible);
    };

    const toggleFaixaEtariaModal = () => {
        setFaixaEtariaModalVisible(!isFaixaEtariaModalVisible);
    };

    const toggleOrigemModal = () => {
        setOrigemModalVisible(!isOrigemModalVisible);
    };
    const toggleSexoModal = () => {
        setSexoModalVisible(!isSexoModalVisible);
    };

    const toggleSexualidadeModal = () => {
        setSexualidadeModalVisible(!isSexualidadeModalVisible);
    };

    const togglePesoModal = () => {
        setPesoModalVisible(!isPesoModalVisible);
    };

    //variáveis de características.
    const [selectedAltura, setSelectedAltura] = useState(null);
    const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState(null);
    const [selectedOrigem, setSelectedOrigem] = useState(null);
    const [selectedSexo, setSelectedSexo] = useState(null);
    const [selectedSexualidade, setSelectedSexualidade] = useState(null);
    const [selectedPeso, setSelectedPeso] = useState(null);
  

    //monta a lista de dropdown por categoria
    const dropdownAltura =  Altura.getAllValues();
    const dropdownFaixaEtaria =  FaixaEtaria.getAllValues();
    const dropdownOrigem =  Origem.getAllValues();
    const dropdownPeso =  Peso.getAllValues();
    const dropdownSexo =  Sexo.getAllValues();
    const dropdownSexualidade =  Sexualidade.getAllValues();
    

    

    //métodos que manipulam a variavel de cada categoria.
    const handleSelectAltura = (itemValue) => {
        setSelectedAltura(itemValue);
        toggleAlturaModal();
    };
    const handleSelectFaixaEtaria = (itemValue) => {
        setSelectedFaixaEtaria(itemValue);
        toggleFaixaEtariaModal();
    };
    const handleSelectOrigem = (itemValue) => {
        setSelectedOrigem(itemValue);
        toggleOrigemModal();
    };
    const handleSelectSexo = (itemValue) => {
        setSelectedSexo(itemValue);
        toggleSexoModal();
    };
    const handleSelectSexualidade = (itemValue) => {
        setSelectedSexualidade(itemValue);
        toggleSexualidadeModal();
    };
    const handleSelectPeso = (itemValue) => {
        setSelectedPeso(itemValue);
        togglePesoModal();
    };

    //tratando a navegação do botão BUSCAR
    const navigation = useNavigation();
    const filtros = {
        altura: selectedAltura,
        faixaEtaria: selectedFaixaEtaria,
        origem: selectedOrigem,
        peso: selectedPeso,
        sexo: selectedSexo,
        sexualidade: selectedSexualidade,
    };
    const handleBuscarPress = () => {
        navigation.navigate('ResultadoBusca', { filtros});
    };  
    
    return (
      <>
      <ScrollView>
      <View style={styles.pickerContainer}>
            <Text
                onPress={toggleAlturaModal}
                style={styles.pickerTxt}>{selectedAltura || 'Altura'}</Text>
            <DropdownComponent
                isVisible={isAlturaModalVisible}
                toggleModal={toggleAlturaModal}
                selectedValue={selectedAltura}
                onValueChange={handleSelectAltura}
                items={dropdownAltura} />
        </View>
        <View style={styles.pickerContainer}>
            <Text
                onPress={toggleFaixaEtariaModal}
                style={styles.pickerTxt}>{selectedFaixaEtaria || 'Faixa Etaria'}</Text>
            <DropdownComponent
                isVisible={isFaixaEtariaModalVisible}
                toggleModal={toggleFaixaEtariaModal}
                selectedValue={selectedFaixaEtaria}
                onValueChange={handleSelectFaixaEtaria}
                items={dropdownFaixaEtaria} />
        </View>
        <View style={styles.pickerContainer}>
            <Text 
                onPress={toggleOrigemModal}
                style={styles.pickerTxt}>{selectedOrigem || 'Origem'}</Text>
            <DropdownComponent
                isVisible={isOrigemModalVisible}
                toggleModal={toggleOrigemModal}
                selectedValue={selectedOrigem}
                onValueChange={handleSelectOrigem}
                items={dropdownOrigem} />
        </View> 

        <View style={styles.pickerContainer}>
            <Text
                onPress={togglePesoModal}
                style={styles.pickerTxt}>{selectedPeso || 'Peso'}</Text>
            <DropdownComponent
                isVisible={isPesoModalVisible}
                toggleModal={togglePesoModal}
                selectedValue={selectedPeso}
                onValueChange={handleSelectPeso}
                items={dropdownPeso} />
        </View>
        <View style={styles.pickerContainer}>
            <Text
                onPress={toggleSexoModal}
                style={styles.pickerTxt}>{selectedSexo || 'Sexo'}</Text>
            <DropdownComponent
                isVisible={isSexoModalVisible}
                toggleModal={toggleSexoModal}
                selectedValue={selectedSexo}
                onValueChange={handleSelectSexo}
                items={dropdownSexo} />
        </View>
        <View style={styles.pickerContainer}>
            <Text 
                onPress={toggleSexualidadeModal}
                style={styles.pickerTxt}>{selectedSexualidade || 'Sexualidade'}</Text>
            <DropdownComponent
                isVisible={isSexualidadeModalVisible}
                toggleModal={toggleSexualidadeModal}
                selectedValue={selectedSexualidade}
                onValueChange={handleSelectSexualidade}
                items={dropdownSexualidade} />
        </View>

        </ScrollView>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'green'},
            {height: 100}]}
            onPress={handleBuscarPress}>
                <Text style={styles.pickerTxt}>BUSCAR</Text>
            </TouchableOpacity>
        </View>
        </>
    );
  };

export default FiltrarScreenModal;
