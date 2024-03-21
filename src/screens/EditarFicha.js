import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, TextInput, Image, Alert} from 'react-native';
import Altura from '../Entity/Altura';
import takePicture from '../components/takepicture';
import styles from '../styles/editarFichaStyles';
import FaixaEtaria from '../Entity/FaixaEtaria';
import Origem from '../Entity/Origem';
import Sexo from '../Entity/Sexo';
import Sexualidade from '../Entity/Sexualidade';
import Peso from '../Entity/Peso';
import Tatuagem from '../Entity/Tatuagem';
import ModalBtn from '../components/ModalBtn';

const EditarFicha = ({ route, navigation }) => {


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


    const pessoa = route.params.pessoa;
    //variáveis de características. 'https://oldwesttracker.s3.sa-east-1.amazonaws.com/logo.png'
    const [image,setPicture ] = useState('https://oldwestimg.s3.sa-east-1.amazonaws.com/Pessoas/' + pessoa.id + '/foto.jpg');
    pessoa.image = image;
    const [nome,setNome ] = useState(pessoa.nome);
    const [rg, setRg ]  = useState(pessoa.rg);
    const [cpf, setCpf ] = useState(pessoa.cpf);
    const [dataNascimento, setDataNascimento] = useState(pessoa.dataNascimento);
    const [id, setId] = useState(pessoa.id);
    const [mae, setMae] = useState(pessoa.mae);

    const [selectedAltura, setSelectedAltura] = useState(pessoa.altura);
    const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState(pessoa.faixaEtaria);
    const [selectedOrigem, setSelectedOrigem] = useState(pessoa.origem);
    const [selectedSexo, setSelectedSexo] = useState(pessoa.sexo);
    const [selectedSexualidade, setSelectedSexualidade] = useState(pessoa.sexualidade);
    const [selectedPeso, setSelectedPeso] = useState(pessoa.peso);    
    const [selectedTatuagem, setSelectedTatuagem] = useState(pessoa.tatuagem);
  

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

    function novaPessoa () {
        return {
            id: id,
            nome: nome,
            rg: rg,
            cpf: cpf,
            dataNascimento: dataNascimento,
            mae: mae,
            altura: selectedAltura,
            faixaEtaria: selectedFaixaEtaria,
            origem: selectedOrigem,
            sexo: selectedSexo,
            sexualidade: selectedSexualidade,
            peso: selectedPeso,
            tatuagem: selectedTatuagem,
            image: image // Certifique-se de que `image` já foi atualizado antes de criar o objeto
      };
    };


    const handleSalvarPress = async () => {
        json = novaPessoa();
        json.job = 'update';

        console.log(JSON.stringify(json))
        
        fetch('https://tcy36fyg2j.execute-api.sa-east-1.amazonaws.com/Test/', {
  
          method: 'POST',
  
          headers: {
  
            'Content-Type': 'application/json',
  
          },
  
          body: JSON.stringify(json),
  
        })
  
        .then(response => {
  
          if (!response.ok) {
            setStatus('Erro na solicitação.');
            throw new Error('Erro na solicitação.');
          }
  
          return response.json();
  
        })
  
        .then(data => {
          console.log('resposta do server:', data);
          alert('Dados atualizados com sucesso');
          navigation.goBack();
        })
  
        .catch(error => {
  
          console.error('Erro na solicitação:', error);
          // Trate erros aqui
  
        });
        
      }
 
    const handlePhotoPress = () =>{
        const log = {takePicture};
        console.log(log);
        
        //setPicture(takePicture);

    }

    
    return (
      <View 
        style={styles.Scrollcontainer}>       
      <ScrollView>
        <View style={styles.fichaContainer}>
            <Pressable
                onPress={handlePhotoPress}>
                <Image 
                source={{ uri: image || 'https://oldwesttracker.s3.sa-east-1.amazonaws.com/logo.png' }} 
                style={styles.fichaIMG}/>
            </Pressable>
        </View>
        <View>
            <Text style={[styles.txt, {marginLeft: '10%'}]}>Nome: </Text>
            <TextInput
                style={styles.input}
                placeholder="NOME DO MALA..."
                value={nome}
                onChangeText={(text) => setNome(nome)}
                />
        </View>
        <View style={styles.viewDocs}>
            <View style={styles.viewDocsItems}> 
                <Text style={styles.txt}>RG: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="RG"
                    value={rg}
                    onChangeText={(text) => setRg(text)}
                    />
            </View>
        
            <View style={styles.viewDocsItems}>
                <Text style={styles.txt}>CPF: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="CPF"
                    value={cpf}
                    onChangeText={(text) => setCpf(text)}
                    />
            </View>
        </View>

        <View style={styles.viewDocs}>
            <View style={styles.viewDocsItems}> 
                <Text style={styles.txt}>Nascimento: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="DD/MM/AAAA"
                    value={dataNascimento}
                    onChangeText={(text) => setDataNascimento(text)}
                    />
            </View>
        
            <View style={styles.viewDocsItems}>
                <Text style={styles.txt}>ID: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="ID"
                    value={id}
                    editable={false}
                    onChangeText={(text) => setId(text)}
                    />
            </View>
        </View>
        <View>
            <Text style={[styles.txt, {marginLeft: '10%'}]}>Nome da mãe: </Text>
            <TextInput
                style={styles.input}
                placeholder="NOME DA MÃE"
                value={mae}
                onChangeText={(text) => setMae(text)}
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
            onPress={handleSalvarPress}>
                <Text style={styles.modalBtnTxt}>Salvar</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    );
  };

export default EditarFicha;
