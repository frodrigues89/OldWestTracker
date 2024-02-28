import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, TextInput, Image, Alert} from 'react-native';
import Altura from '../Entity/Altura';
import takePicture from '../components/takepicture';
import styles from '../styles/cadastrarStyles';
import FaixaEtaria from '../Entity/FaixaEtaria';
import Origem from '../Entity/Origem';
import Sexo from '../Entity/Sexo';
import Sexualidade from '../Entity/Sexualidade';
import Peso from '../Entity/Peso';
import Tatuagem from '../Entity/Tatuagem';
import { useNavigation } from '@react-navigation/native';
import Pessoa from '../Entity/Pessoa';
import ModalBtn from '../components/ModalBtn';

const Cadastrar = () => {

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
    const [picture,setPicture ] = useState('https://oldwesttracker.s3.sa-east-1.amazonaws.com/logo.png');
    const [nome,setNome ] = useState(null);
    const [rg, setRg ]  = useState(null);
    const [cpf, setCpf ] = useState(null);

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
    const pessoa = new Pessoa();
    pessoa.picture = picture;
    pessoa.nome = nome;
    pessoa.rg = rg;
    pessoa.cpf = cpf;
    pessoa.altura = selectedAltura;
    pessoa.peso = selectedPeso;
    pessoa.faixaEtaria = selectedFaixaEtaria;
    pessoa.origem = selectedOrigem;
    pessoa.Sexo = selectedSexo;
    pessoa.sexualidade = selectedSexualidade;
    pessoa.tatuagem = selectedTatuagem;


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
        console.log(pessoa);
    };
 
    const handlePhotoPress = () =>{
        const log = {takePicture};
        console.log(log);
        
        //setPicture(takePicture);

    }

    
    return (
      <View 
        style={styles.Scrollcontainer}>       
      <ScrollView>
        <View>
            <Text style={styles.txt}>Foto: </Text>
            <Pressable
                onPress={handlePhotoPress}>
                <Image 
                source={{ uri: picture}} style={styles.fichaIMG}/>
            </Pressable>
        </View>
        <View>
            <Text style={styles.txt}>Nome: </Text>
            <TextInput
                style={styles.input}
                placeholder="NOME DO MALA..."
                value={nome}
                onChangeText={(text) => setNome(text)}
                />
        </View>
        <View>
            <Text style={styles.txt}>RG: </Text>
            <TextInput
                style={styles.input}
                placeholder="RG"
                value={rg}
                onChangeText={(text) => setRg(text)}
                />
        </View>
        <View>
            <Text style={styles.txt}>CPF: </Text>
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={cpf}
                onChangeText={(text) => setCpf(text)}
                />
        </View>
        
        
        
        <View>
            <Pressable
                onPress={toggleAlturaModal}
                style={styles.pickerContainer}>
                <Text style={styles.pickerTxt}>
                    {selectedAltura || 'Altura'}
                </Text>
            </Pressable>
            <ModalBtn
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
            <ModalBtn
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
            <ModalBtn
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
            <ModalBtn
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
            <ModalBtn
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
            <ModalBtn
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
            <ModalBtn
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

export default Cadastrar;
