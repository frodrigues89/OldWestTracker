import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable} from 'react-native';
import Altura from '../Entity/Altura';
import DropdownComponent from '../components/DropdownComponent';
import styles from '../styles/filtrarScreenStyles';
import FaixaEtaria from '../Entity/FaixaEtaria';
import Origem from '../Entity/Origem';
import Sexo from '../Entity/Sexo';
import Sexualidade from '../Entity/Sexualidade';
import Peso from '../Entity/Peso';
import Tatuagem from '../Entity/Tatuagem';
import { useNavigation } from '@react-navigation/native';
import Pessoa from '../Entity/Pessoa';

const FiltrarScreenModal = () => {
    // Estados para controlar a visibilidade de cada modal
    const [isAlturaModalVisible, setAlturaModalVisible] = useState(false);
    const [isFaixaEtariaModalVisible, setFaixaEtariaModalVisible] = useState(false);
    const [isOrigemModalVisible, setOrigemModalVisible] = useState(false);
    const [isSexoModalVisible, setSexoModalVisible] = useState(false);
    const [isSexualidadeModalVisible, setSexualidadeModalVisible] = useState(false);
    const [isPesoModalVisible, setPesoModalVisible] = useState(false);
    const [isTatuagemModalVisible, setTatuagemModalVisible] = useState(false);

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

    const toggleTatuagemModal = () => {
        setTatuagemModalVisible(!isTatuagemModalVisible);
    };

    //variáveis de características.
    const [selectedAltura, setSelectedAltura] = useState(null);
    const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState(null);
    const [selectedOrigem, setSelectedOrigem] = useState(null);
    const [selectedSexo, setSelectedSexo] = useState(null);
    const [selectedSexualidade, setSelectedSexualidade] = useState(null);
    const [selectedPeso, setSelectedPeso] = useState(null);    
    const [selectedTatuagem, setSelectedTatuagem] = useState(null);
  

    //monta a lista de dropdown por categoria
    const dropdownAltura =  Altura.getAllValues();
    const dropdownFaixaEtaria =  FaixaEtaria.getAllValues();
    const dropdownOrigem =  Origem.getAllValues();
    const dropdownPeso =  Peso.getAllValues();
    const dropdownSexo =  Sexo.getAllValues();
    const dropdownSexualidade =  Sexualidade.getAllValues();
    const dropdownTatuagem =  Tatuagem.getAllValues();
    
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
    const handleSelectTatuagem = (itemValue) => {
        setSelectedTatuagem(itemValue);
        toggleTatuagemModal();
    };

    //passando as seleções para a entidade Pessoa
    const filtros = new Pessoa();
    filtros.altura = selectedAltura;
    filtros.peso = selectedPeso;
    filtros.faixaEtaria = selectedFaixaEtaria;
    filtros.origem = selectedOrigem;
    filtros.Sexo = selectedSexo;
    filtros.sexualidade = selectedSexualidade;
    filtros.tatuagem = selectedTatuagem;


    //tratando botão reset
    const handleResetPress = () => {
        setSelectedAltura(null);
        setSelectedPeso(null);
        setSelectedFaixaEtaria(null);
        setSelectedOrigem(null);
        setSelectedSexo(null);
        setSelectedSexualidade(null);
        setSelectedTatuagem(null);
    };


    //tratando a navegação do botão BUSCAR
    const navigation = useNavigation();
    const handleBuscarPress = () => {
        navigation.navigate('ResultadoBusca', { filtros });
    };


    
    return (
      <View 
        style={styles.Scrollcontainer}>       
      <ScrollView>
        <Text style={styles.txt}>
            Selecione os filtros para busca.
        </Text>
        <View>
            <Pressable
                onPress={toggleAlturaModal}
                style={styles.pickerContainer}>
                <Text style={styles.pickerTxt}>
                    {selectedAltura || 'Altura'}
                </Text>
            </Pressable>
            <DropdownComponent
                isVisible={isAlturaModalVisible}
                toggleModal={toggleAlturaModal}
                selectedValue={selectedAltura}
                onValueChange={handleSelectAltura}
                items={dropdownAltura} />
        </View>
        <View>
            <Pressable
                style={styles.pickerContainer}
                onPress={toggleFaixaEtariaModal}>
                <Text style={styles.pickerTxt}>
                    {selectedFaixaEtaria || 'Faixa Etaria'}
                </Text>
            </Pressable>
            <DropdownComponent
                isVisible={isFaixaEtariaModalVisible}
                toggleModal={toggleFaixaEtariaModal}
                selectedValue={selectedFaixaEtaria}
                onValueChange={handleSelectFaixaEtaria}
                items={dropdownFaixaEtaria} />
        </View>
        <View> 
            <Pressable 
                style={styles.pickerContainer}
                onPress={toggleOrigemModal}>
                <Text style={styles.pickerTxt}>
                    {selectedOrigem || 'Origem'}
                </Text>
            </Pressable>
            <DropdownComponent
                isVisible={isOrigemModalVisible}
                toggleModal={toggleOrigemModal}
                selectedValue={selectedOrigem}
                onValueChange={handleSelectOrigem}
                items={dropdownOrigem} />
        </View> 

        <View> 
            <Pressable 
                style={styles.pickerContainer}
                onPress={togglePesoModal}>
                <Text style={styles.pickerTxt}>
                    {selectedPeso || 'Peso'}
                </Text>
            </Pressable>
            <DropdownComponent
                isVisible={isPesoModalVisible}
                toggleModal={togglePesoModal}
                selectedValue={selectedPeso}
                onValueChange={handleSelectPeso}
                items={dropdownPeso} />
        </View>
        <View>
            <Pressable 
                style={styles.pickerContainer}
                onPress={toggleSexoModal}>
            <Text style={styles.pickerTxt}>
                {selectedSexo || 'Sexo'}
            </Text>
            </Pressable>
            <DropdownComponent
                isVisible={isSexoModalVisible}
                toggleModal={toggleSexoModal}
                selectedValue={selectedSexo}
                onValueChange={handleSelectSexo}
                items={dropdownSexo} />
        </View>
        <View>
            <Pressable
                style={styles.pickerContainer}
                onPress={toggleSexualidadeModal}>
                <Text style={styles.pickerTxt}>
                    {selectedSexualidade || 'Sexualidade'}
                </Text>
            </Pressable>
            <DropdownComponent
                isVisible={isSexualidadeModalVisible}
                toggleModal={toggleSexualidadeModal}
                selectedValue={selectedSexualidade}
                onValueChange={handleSelectSexualidade}
                items={dropdownSexualidade} />
        </View>
        <View> 
            <Pressable
                style={styles.pickerContainer}
                onPress={toggleTatuagemModal}>
                <Text style={styles.pickerTxt}>
                    {selectedTatuagem || 'Tatuagem'}
                </Text>
            </Pressable>
            <DropdownComponent
                isVisible={isTatuagemModalVisible}
                toggleModal={toggleTatuagemModal}
                selectedValue={selectedTatuagem}
                onValueChange={handleSelectTatuagem}
                items={dropdownTatuagem} />
        </View>

        
        <View style={[styles.midContainer, {marginBottom: 20}]}>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'green'},
            {height: 100},
            {marginBottom: 10}]}
            onPress={handleBuscarPress}>
                <Text style={styles.pickerTxt}>BUSCAR</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.midContainer}>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'red'},
            {height: 50},]}
            onPress={handleResetPress}>
                <Text style={styles.pickerTxt}>Limpar busca</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    );
  };

export default FiltrarScreenModal;
