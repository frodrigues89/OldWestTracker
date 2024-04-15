import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, TextInput, Image} from 'react-native';
import Altura from '../Entity/Altura';
import pickImage from '../components/pickImage';
import styles from '../styles/cadastrarStyles';
import FaixaEtaria from '../Entity/FaixaEtaria';
import Origem from '../Entity/Origem';
import Sexo from '../Entity/Sexo';
import Sexualidade from '../Entity/Sexualidade';
import Peso from '../Entity/Peso';
import Tatuagem from '../Entity/Tatuagem';
import Pessoa from '../Entity/Pessoa';
import Atividade from '../Entity/Atividade';
import Raca from '../Entity/Raca';
import ModalBtn from '../components/ModalBtn';
import ApiService from '../utils/ApiService';

const Cadastrar = ({route, navigation }) => {


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

    const [job, setJob] = useState('');    
    const [pessoa, setPessoa] = useState(new Pessoa());
    useEffect(() => {
        if (route.params && route.params.pessoa){
            setPessoa(route.params.pessoa);
            updatePessoa(route.params.pessoa);
            setJob('update');
        } else {
            console.log('else');
            setJob('put');
        }
    }, [route.params]);
    
    function updatePessoa(pessoa) {
        setImage(pessoa.image);
        setNome(pessoa.nome);
        setId(pessoa.id);
        setRg(pessoa.rg);
        setCpf(pessoa.cpf);
        setDataNascimento(pessoa.dataNascimento);
        setMae(pessoa.mae);
        setPai(pessoa.pai);
        setEstadoCivil(pessoa.estadoCivil);
        setNaturalidade(pessoa.naturalidade);
        setCEP(pessoa.cep);
        setEndereco(pessoa.endereco);
        setOcupacao(pessoa.ocupacao);
        setTelResidencial(pessoa.telResidencial);
        setTelCelular(pessoa.telCelular);
        setObservacoes(pessoa.observacoes);
        setSelectedAltura(pessoa.altura);
        setSelectedFaixaEtaria(pessoa.faixaEtaria);
        setSelectedOrigem(pessoa.origem);
        setSelectedSexo(pessoa.sexo);
        setSelectedSexualidade(pessoa.sexualidade);
        setSelectedPeso(pessoa.peso);
        setSelectedTatuagem(pessoa.tatuagem);
        setSelectedAtividade(pessoa.atividade);
        setSelectedRaca(pessoa.raca);
    }
    

    //variáveis de características.
    const [image,setImage ] = useState(pessoa.foto);
    const [nome,setNome ] = useState(pessoa.nome);
    const [id, setId] = useState(pessoa.id);
    const [rg, setRg ]  = useState(pessoa.rg);
    const [cpf, setCpf ] = useState(pessoa.cpf);
    const [dataNascimento, setDataNascimento] = useState(pessoa.dataNascimento);
    const [mae, setMae] = useState(pessoa.mae);
    const [pai, setPai] = useState(pessoa.pai);
    const [estadoCivil, setEstadoCivil] = useState(pessoa.estadoCivil);
    const [naturalidade, setNaturalidade] = useState(pessoa.naturalidade);
    const [cep , setCEP] = useState(pessoa.cep);
    const [endereco, setEndereco] = useState(pessoa.endereco);
    const [ocupacao, setOcupacao] = useState(pessoa.ocupacao);
    const [telResidencial, setTelResidencial] = useState(pessoa.telResidencial);
    const [telCelular, setTelCelular] = useState(pessoa.telCelular);
    const [observacoes, setObservacoes] = useState(pessoa.observacoes);

    const [selectedAltura, setSelectedAltura] = useState(pessoa.altura);
    const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState(pessoa.faixaEtaria);
    const [selectedOrigem, setSelectedOrigem] = useState(pessoa.origem);
    const [selectedSexo, setSelectedSexo] = useState(pessoa.sexo);
    const [selectedSexualidade, setSelectedSexualidade] = useState(pessoa.sexualidade);
    const [selectedPeso, setSelectedPeso] = useState(pessoa.peso);    
    const [selectedTatuagem, setSelectedTatuagem] = useState(pessoa.tatuagem);    
    const [selectedAtividade, setSelectedAtividade] = useState(pessoa.atividade);
    const [selectedRaca, setSelectedRaca] = useState(pessoa.raca);
  

    //obrigando o infeliz a usar o botão origem:
    const [isOrigemSelected, setIsOrigemSelected] = useState(false);
    const [countID, setCountID] = useState("");

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
        setIsOrigemSelected(true);
        createID(itemValue);
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
    const handleSelectCorDePele = (itemValue) => {
        setSelectedRaca(itemValue);
        toggleRacaModal();
    };

    // Função para criar a instância da Pessoa
    const createPessoaInstance = () => {
        const novaPessoa = new Pessoa();
        novaPessoa.id = id;
        novaPessoa.image = image;
        novaPessoa.nome = nome;
        novaPessoa.rg = rg;
        novaPessoa.cpf = cpf; 
        novaPessoa.dataNascimento = dataNascimento;
        novaPessoa.mae = mae;
        novaPessoa.altura = selectedAltura;
        novaPessoa.peso = selectedPeso;
        novaPessoa.faixaEtaria = selectedFaixaEtaria;
        novaPessoa.origem = selectedOrigem;
        novaPessoa.sexo = selectedSexo;
        novaPessoa.sexualidade = selectedSexualidade;
        novaPessoa.tatuagem = selectedTatuagem;        
        novaPessoa.atividade = selectedAtividade;
        novaPessoa.raca = selectedRaca;
        novaPessoa.pai = pai;
        novaPessoa.estadoCivil = estadoCivil;
        novaPessoa.naturalidade = naturalidade;
        novaPessoa.cep = cep;
        novaPessoa.endereco = endereco;
        novaPessoa.ocupacao = ocupacao;
        novaPessoa.telCelular = telCelular;
        novaPessoa.telResidencial = telResidencial;
        novaPessoa.observacoes = observacoes;

        return novaPessoa;
    };


    //tratando botão reset
    const handleResetPress = () => {
        setImage('https://oldwesttracker.s3.sa-east-1.amazonaws.com/logo.png');
        setNome("");
        setRg("");
        setCpf("");
        setDataNascimento("");
        setId("");
        setMae("");
        setPai("");
        setEstadoCivil("");
        setNaturalidade("");
        setCEP("");
        setEndereco("");
        setOcupacao("");
        setTelCelular("");
        setTelResidencial("");
        setObservacoes("");
        setSelectedAltura("");
        setSelectedPeso("");
        setSelectedFaixaEtaria("");
        setSelectedOrigem("");
        setSelectedSexo("");
        setSelectedSexualidade("");
        setSelectedTatuagem("");        
        setSelectedAtividade("");
        setSelectedRaca("");
        setIsOrigemSelected(false);
    };

    const handleSalvarPress = async () => {
        if (isOrigemSelected) {
            ApiService.handleSalvarPress(createPessoaInstance(), 'put', navigation);
        } else {
            alert('Você deve selecionar a origem para cadastrar um indivíduo.');
        }
    };
 
    const handleAPISearch = (origem) => {
        let filtros = { job: 'count', origem: origem };
    
        // Retorne a promessa gerada pelo fetch
        return fetch('https://tcy36fyg2j.execute-api.sa-east-1.amazonaws.com/Test/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filtros),
        })
            .then(response => {
                if (!response.ok) {
                    setStatus('Erro na solicitação.');
                    throw new Error('Erro na solicitação.');
                }
                return response.json();
            })
            .then(data => {
                // console.log('Dados recebidos:', data);
                setCountID(data.body.response.Count);
                return data.body.response.Count;
            })
            .catch(error => {
                console.error('Erro na solicitação:', error);
                setStatus('error');
                // Trate erros aqui
                throw error; // Propague o erro para que possa ser capturado pelo catch em createID
            });
    }

    const createID = async (origem) => {
        try{
            const count = await handleAPISearch(origem);
            const countPlus = count + 1;
            const idNum = String(countPlus).padStart(4, '0');
            if (origem === 'Brasileiro'){
                newId = 'BB' + idNum;
                setId(newId);            
            }else if(origem === 'Mercosul'){
                newId = 'MM' + idNum;            
                setId(newId);
            }else{
                newId = 'FF' + idNum;
                setId(newId);
            };
        }catch{

        }        
    }
    
    const handlePhotoPress = async () => {
        const foto = await pickImage();
        console.log(foto);
            if ( foto != false){       
                setImage(foto);            
        }
    }

    
    return (
      <View 
        style={styles.Scrollcontainer}>       
      <ScrollView>
        <View style={styles.fichaContainer}>
            <Pressable
                onPress={handlePhotoPress}>
                <Image 
                source={{ uri: image}} style={styles.fichaIMG}/>
            </Pressable>
        </View>
        <View>
            <Text style={[styles.txt, {marginLeft: '10%'}]}>Nome: </Text>
            <TextInput
                style={styles.input}
                placeholder="NOME DO MALA..."
                value={nome}
                onChangeText={(text) => setNome(text)}
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
        <View style={styles.viewDocs}>
            <View style={styles.viewDocsItems}> 
                <Text style={styles.txt}>Estado Civil: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="Estado Civil"
                    value={estadoCivil}
                    onChangeText={(text) => setEstadoCivil(text)}
                    />
            </View>
        
            <View style={styles.viewDocsItems}>
                <Text style={styles.txt}>Natural / UF: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="Natural / UF"
                    value={naturalidade}
                    onChangeText={(text) => setNaturalidade(text)}
                    />
            </View>
        </View>
        <View style={styles.viewDocs}>
            <View style={styles.viewDocsItems}> 
                <Text style={styles.txt}>CEP: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="CEP"
                    value={cep}
                    onChangeText={(text) => setCEP(text)}
                    />
            </View>
        
            <View style={styles.viewDocsItems}>
                <Text style={styles.txt}>Ocupação: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="Ocupção"
                    value={ocupacao}
                    onChangeText={(text) => setOcupacao(text)}
                    />
            </View>
        </View>
        <View>
            <Text style={[styles.txt, {marginLeft: '10%'}]}>Endereço: </Text>
            <TextInput
                style={styles.inputEndereco}
                placeholder="Endereço"
                value={endereco}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setEndereco(text)}
                />
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
            <Text style={[styles.txt, {marginLeft: '10%'}]}>Nome do Pai: </Text>
            <TextInput
                style={styles.input}
                placeholder="NOME DO PAI"
                value={pai}
                onChangeText={(text) => setPai(text)}
                />
        </View>        
        <View style={styles.viewDocs}>
            <View style={styles.viewDocsItems}> 
                <Text style={styles.txt}>Tel. Residencial: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="(##)####.####"
                    value={telResidencial}
                    onChangeText={(text) => setTelResidencial(text)}
                    />
            </View>
        
            <View style={styles.viewDocsItems}>
                <Text style={styles.txt}>Tel. Celular: </Text>
                <TextInput
                    style={styles.inputRg}
                    placeholder="(##)9####.####"
                    value={telCelular}
                    onChangeText={(text) => setTelCelular(text)}
                    />
            </View>
        </View>
        <View>
            <Text style={[styles.txt, {marginLeft: '10%'}]}>Observações: </Text>
            <TextInput
                style={styles.inputEndereco}
                placeholder="Observações:"
                value={observacoes}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setObservacoes(text)}
                />
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
                    style={[styles.modalBtn, selectedRaca !== "" ? styles.changedButton : null]}
                    onPress={toggleRacaModal}>
                    <Text style={styles.modalBtnTxt}>
                        {selectedRaca || 'Cor de Pele'}
                    </Text>
                </Pressable>
                <ModalBtn
                    isVisible={isRacaModalVisible}
                    toggleModal={toggleRacaModal}
                    selectedValue={selectedRaca}
                    onValueChange={handleSelectCorDePele}
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
                items={dropdownFaixaEtaria} />
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
                <Text style={styles.modalBtnTxt}>SALVAR </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.midContainer}>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'rgb(237,46,56)'},
            {height: 50},]}
            onPress={handleResetPress}>
                <Text style={styles.modalBtnTxt}>Limpar campos </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    );
  };

export default Cadastrar;
