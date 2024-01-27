import React, { useState } from 'react';
import { View, Text} from 'react-native';
import Altura from '../Entity/Altura';
import DropdownComponent from '../src/components/DropdownComponent';
import styles from './styles';
import FaixaEtaria from '../Entity/FaixaEtaria';
import Nacionalidade from '../Entity/Nacionalidade';

const FiltrarScreenModal = () => {
    // Estados para controlar a visibilidade de cada modal
    const [isAlturaModalVisible, setAlturaModalVisible] = useState(false);
    const [isFaixaEtariaModalVisible, setFaixaEtariaModalVisible] = useState(false);
    const [isNacionalidadeModalVisible, setNacionalidadeModalVisible] = useState(false);

    // métodos para tratar a visibilidade do modal.
    const toggleAlturaModal = () => {
        setAlturaModalVisible(!isAlturaModalVisible);
    };

    const toggleFaixaEtariaModal = () => {
        setFaixaEtariaModalVisible(!isFaixaEtariaModalVisible);
    };

    const toggleNacionalidadeModal = () => {
        setNacionalidadeModalVisible(!isNacionalidadeModalVisible);
    };

    //variáveis de características.
    const [selectedAltura, setSelectedAltura] = useState(null);
    const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState(null);
    const [selectedNacionalidade, setSelectedNacionalidade] = useState(null);
  

    //monta a lista de dropdown por categoria
    const dropdownAltura =  Altura.getAllValues();
    const dropdownFaixaEtaria =  FaixaEtaria.getAllValues();
    const dropdownNacionalidade =  Nacionalidade.getAllValues();
  

    

    //métodos que manipulam a variavel de cada categoria.
    const handleSelectAltura = (itemValue) => {
        setSelectedAltura(itemValue);
        toggleAlturaModal();
    };
    const handleSelectFaixaEtaria = (itemValue) => {
        setSelectedFaixaEtaria(itemValue);
        toggleFaixaEtariaModal();
    };
    const handleSelectNacionalidade = (itemValue) => {
        setSelectedNacionalidade(itemValue);
        toggleNacionalidadeModal();
    };
  
    return (
      <><View style={styles.pickerContainer}>
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
                style={styles.pickerTxt}>{selectedFaixaEtaria || 'FaixaEtaria'}</Text>
            <DropdownComponent
                isVisible={isFaixaEtariaModalVisible}
                toggleModal={toggleFaixaEtariaModal}
                selectedValue={selectedFaixaEtaria}
                onValueChange={handleSelectFaixaEtaria}
                items={dropdownFaixaEtaria} />
        </View>
        <View style={styles.pickerContainer}>
            <Text 
                onPress={toggleNacionalidadeModal}
                style={styles.pickerTxt}>{selectedNacionalidade || 'Nacionalidade'}</Text>
            <DropdownComponent
                isVisible={isNacionalidadeModalVisible}
                toggleModal={toggleNacionalidadeModal}
                selectedValue={selectedNacionalidade}
                onValueChange={handleSelectNacionalidade}
                items={dropdownNacionalidade} />
        </View>
        </>
    );
  };

export default FiltrarScreenModal;
