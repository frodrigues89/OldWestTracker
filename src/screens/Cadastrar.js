import React, { useEffect, useState } from 'react';
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
import Pessoa from '../Entity/Pessoa';
import ModalBtn from '../components/ModalBtn';

const Cadastrar = ({ route, navigation }) => {


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
    const [image,setPicture ] = useState('https://oldwesttracker.s3.sa-east-1.amazonaws.com/logo.png');
    const [nome,setNome ] = useState(null);
    const [rg, setRg ]  = useState(null);
    const [cpf, setCpf ] = useState(null);

    const [selectedAltura, setSelectedAltura] = useState("");
    const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState("");
    const [selectedOrigem, setSelectedOrigem] = useState("");
    const [selectedSexo, setSelectedSexo] = useState("");
    const [selectedSexualidade, setSelectedSexualidade] = useState("");
    const [selectedPeso, setSelectedPeso] = useState("");    
    const [selectedTatuagem, setSelectedTatuagem] = useState("");
  

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

    // Função para criar a instância da Pessoa
    const createPessoaInstance = () => {
        const novaPessoa = new Pessoa();
        novaPessoa.image = image;
        novaPessoa.nome = nome;
        novaPessoa.rg = rg;
        novaPessoa.cpf = cpf;
        novaPessoa.altura = selectedAltura;
        novaPessoa.peso = selectedPeso;
        novaPessoa.faixaEtaria = selectedFaixaEtaria;
        novaPessoa.origem = selectedOrigem;
        novaPessoa.sexo = selectedSexo;
        novaPessoa.sexualidade = selectedSexualidade;
        novaPessoa.tatuagem = selectedTatuagem;

        return novaPessoa;
    };

    // Efeito para criar a instância da Pessoa quando os parâmetros da rota mudarem
    useEffect(() => {
        if (route.params && route.params.pessoa) {
            const pessoa = route.params.pessoa;
            setNome(pessoa.nome);
            setRg(pessoa.rg);
            setCpf(pessoa.cpf);
            setSelectedAltura(pessoa.altura);
            setSelectedPeso(pessoa.peso);
            setSelectedFaixaEtaria(pessoa.faixaEtaria);
            setSelectedOrigem(pessoa.origem);
            setSelectedSexo(pessoa.sexo);
            setSelectedSexualidade(pessoa.sexualidade);
            setSelectedTatuagem(pessoa.tatuagem);
        } else {
            const pessoa = createPessoaInstance();
            console.log(pessoa);
        }
    }, [route.params]);


    //tratando botão reset
    const handleResetPress = () => {
        setSelectedAltura("");
        setSelectedPeso("");
        setSelectedFaixaEtaria("");
        setSelectedOrigem("");
        setSelectedSexo("");
        setSelectedSexualidade("");
        setSelectedTatuagem("");
    };

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
                source={{ uri: image}} style={styles.fichaIMG}/>
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
                style={[styles.modalBtn, selectedAltura !== "" ? styles.changedButton : null]}>
                <Text style={styles.modalBtnTxt}>
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
                style={[styles.modalBtn, selectedFaixaEtaria !== "" ? styles.changedButton : null]}
                onPress={toggleFaixaEtariaModal}>
                <Text style={styles.modalBtnTxt}>
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
                style={[styles.modalBtn, selectedOrigem !== "" ? styles.changedButton : null]}
                onPress={toggleOrigemModal}>
                <Text style={styles.modalBtnTxt}>
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
                style={[styles.modalBtn, selectedPeso !== "" ? styles.changedButton : null]}
                onPress={togglePesoModal}>
                <Text style={styles.modalBtnTxt}>
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
                style={[styles.modalBtn, selectedSexo !== "" ? styles.changedButton : null]}
                onPress={toggleSexoModal}>
            <Text style={styles.modalBtnTxt}>
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
                style={[styles.modalBtn, selectedSexualidade !== "" ? styles.changedButton : null]}
                onPress={toggleSexualidadeModal}>
                <Text style={styles.modalBtnTxt}>
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
                style={[styles.modalBtn, selectedTatuagem !== "" ? styles.changedButton : null]}
                onPress={toggleTatuagemModal}>
                <Text style={styles.modalBtnTxt}>
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
            <TouchableOpacity style={[styles.button, {backgroundColor: 'rgb(0,122,94)'},
            {height: 100},
            {marginBottom: 10}]}
            onPress={handleBuscarPress}>
                <Text style={styles.modalBtnTxt}>BUSCAR</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.midContainer}>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'rgb(237,46,56)'},
            {height: 50},]}
            onPress={handleResetPress}>
                <Text style={styles.modalBtnTxt}>Limpar busca</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    );
  };

export default Cadastrar;
