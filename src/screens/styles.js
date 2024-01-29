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
  logo: {
    marginBottom: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0a497b',
    width: '80%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  logoContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  searchContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  btnContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: "10%",
    width: '80%',
    backgroundColor: '#0a497b', // Cor de fundo do Picker
    borderRadius: 8,
    height: 50,
  },
  picker: {
    height: '30%',
    backgroundColor: 'transparent', // Cor de fundo do Picker
    borderColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pickerTxt: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  pickerItemTxt: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
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
  },
  fichaText: {
    color: 'black',
    fontSize: 20,
  },

});

export default styles;