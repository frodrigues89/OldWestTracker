//styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    width: '75%',
    height: 50,
    alignItems: 'center',
  },
  input: {
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
  fichaIMG: {
    width: 250,
    height: 250,
  },

});

export default styles;