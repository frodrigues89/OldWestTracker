//styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  Scrollcontainer: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  midContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  navTabBtn:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgb(23,23,150)',
    marginRight: '10%',
  },
  txt: {
    color: 'black',
    fontSize: 20,
    marginLeft: '10%',
    marginBottom: 5
    
  },

  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: "10%",
    width: '80%',
    backgroundColor: '#0a497b',
    borderRadius: 8,
    height: 50,
  },

  pickerView:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },

  pickerModal: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  pickerTxt: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  pickerItemTxt: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignText: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  fichaContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fichaIMG: {
    width: 250,
    height: 250,
    borderRadius: 90,
    marginVertical: 20,
  },
  nomeText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  fichaTextEnum: {
    color: 'black',
    fontSize: 20,
    marginVertical: 3,
    fontWeight: 'bold',
  },  
  fichaText: {
    color: 'black',
    fontSize: 20,
    marginVertical: 3,
  },  
  fichaObs: {
    color: 'black',
    fontSize: 20,
    marginVertical: 3,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    width: '75%',
    height: 50,
    alignItems: 'center',
  },
  inputCadastro: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
  },
  inputPassword: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    width: '75%',
    height: 50,
    alignItems: 'center',
  },

});

export default styles;