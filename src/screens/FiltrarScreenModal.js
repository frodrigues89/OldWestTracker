import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, useWindowDimensions} from 'react-native';
import Altura from '../Entity/Altura';
import styles from '../styles/filtrarScreenStyles';
import FaixaEtaria from '../Entity/FaixaEtaria';
import Origem from '../Entity/Origem';
import Sexo from '../Entity/Sexo';
import Sexualidade from '../Entity/Sexualidade';
import Peso from '../Entity/Peso';
import Tatuagem from '../Entity/Tatuagem';
import Atividade from '../Entity/Atividade';
import Raca from '../Entity/Raca';
import { useNavigation } from '@react-navigation/native';
import Pessoa from '../Entity/Pessoa';
import ModalBtn from '../components/ModalBtn';

const FiltrarScreenModal = () => {
    // Estados para controlar a visibilidade de cada modal
    const [isAlturaModalVisible, setAlturaModalVisible] = useState(false);
    const [isFaixaEtariaModalVisible, setFaixaEtariaModalVisible] = useState(false);
    const [isOrigemModalVisible, setOrigemModalVisible] = useState(false);
    const [isSexoModalVisible, setSexoModalVisible] = useState(false);
    const [isSexualidadeModalVisible, setSexualidadeModalVisible] = useState(false);
    const [isPesoModalVisible, setPesoModalVisible] = useState(false);
    const [isTatuagemModalVisible, setTatuagemModalVisible] = useState(false);
    const [isAtividadeModalVisible, setAtividadeModalVisible] = useState(false);
    const [isRacaModalVisible, setRacaModalVisible] = useState(false);

    const { width } = useWindowDimensions;
    const { height } = useWindowDimensions;

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

    const toggleAtividadeModal = () => {
        setAtividadeModalVisible(!isAtividadeModalVisible)
    };

    const toggleRacaModal = () => {
        setRacaModalVisible(!isRacaModalVisible)
    };

    //variáveis de características.
    const [selectedAltura, setSelectedAltura] = useState("");
    const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState("");
    const [selectedOrigem, setSelectedOrigem] = useState("");
    const [selectedSexo, setSelectedSexo] = useState("");
    const [selectedSexualidade, setSelectedSexualidade] = useState("");
    const [selectedPeso, setSelectedPeso] = useState("");    
    const [selectedTatuagem, setSelectedTatuagem] = useState("");
    const [selectedAtividade, setSelectedAtividade] = useState("");
    const [selectedRaca, setSelectedRaca] = useState("");
    
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
    const handleSelectAtividade = (itemValue) => {
        setSelectedAtividade(itemValue);
        toggleAtividadeModal();
    };
    const handleSelectRaca = (itemValue) => {
        setSelectedRaca(itemValue);
        toggleRacaModal();
    };

    //passando as seleções para a entidade Pessoa
    const filtros = new Pessoa();
    filtros.altura = selectedAltura;
    filtros.peso = selectedPeso;
    filtros.faixaEtaria = selectedFaixaEtaria;
    filtros.origem = selectedOrigem;
    filtros.sexo = selectedSexo;
    filtros.sexualidade = selectedSexualidade;
    filtros.tatuagem = selectedTatuagem;
    filtros.atividade = selectedAtividade;
    filtros.raca = selectedRaca;


    //tratando botão reset
    const handleResetPress = () => {
        setSelectedAltura("");
        setSelectedPeso("");
        setSelectedFaixaEtaria("");
        setSelectedOrigem("");
        setSelectedSexo("");
        setSelectedSexualidade("");
        setSelectedTatuagem("");
        setSelectedAtividade("");
        setSelectedRaca("");
    };


    //tratando a navegação do botão BUSCAR
    const navigation = useNavigation();
    const handleBuscarPress = () => {
        navigation.navigate('ResultadoBusca', { filtros });
    };


    
    return (
        <View style={styles.Scrollcontainer}>   
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Text style={styles.txt}>
                Selecione os filtros para busca.
            </Text>
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
                    items={Altura.getAllValues()} />
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
                    items={Peso.getAllValues()} />
            </View>
            <View> 
                <Pressable 
                    style={[styles.modalBtn, selectedRaca !== "" ? styles.changedButton : null]}
                    onPress={toggleRacaModal}>
                    <Text style={styles.modalBtnTxt}>
                        {selectedRaca || 'Raça'}
                    </Text>
                </Pressable>
                <ModalBtn
                    isVisible={isRacaModalVisible}
                    toggleModal={toggleRacaModal}
                    selectedValue={selectedRaca}
                    onValueChange={handleSelectRaca}
                    items={Raca.getAllValues()} />
            </View>
            <View> 
                <Pressable 
                    style={[styles.modalBtn, selectedAtividade !== "" ? styles.changedButton : null]}
                    onPress={toggleAtividadeModal}>
                    <Text style={styles.modalBtnTxt}>
                        {selectedAtividade || 'Atividade'}
                    </Text>
                </Pressable>
                <ModalBtn
                    isVisible={isAtividadeModalVisible}
                    toggleModal={toggleAtividadeModal}
                    selectedValue={selectedAtividade}
                    onValueChange={handleSelectAtividade}
                    items={Atividade.getAllValues()} />
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
                    items={FaixaEtaria.getAllValues()} />
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
                    items={Origem.getAllValues()} />
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
                    items={Sexo.getAllValues()} />
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
                    items={Sexualidade.getAllValues()} />
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
                    items={Tatuagem.getAllValues()} />
            </View>

            
            <View style={[styles.midContainer, {marginBottom: 20}]}>
                <Pressable style={[styles.button, {backgroundColor: 'green'},
                {height: 100},
                {marginBottom: 10}]}
                onPress={handleBuscarPress}>
                    <Text style={styles.modalBtnTxt}>BUSCAR</Text>
                </Pressable>
            </View>
            <View style={styles.midContainer}>
                <Pressable style={[styles.button, {backgroundColor: 'red'},
                {height: 50},]}
                onPress={handleResetPress}>
                    <Text style={styles.modalBtnTxt}>Limpar busca</Text>
                </Pressable>
            </View>
            </ScrollView>
        </View>
    );
  };

export default FiltrarScreenModal;
