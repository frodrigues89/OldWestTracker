//styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  pickerModal: {
    backgroundColor: 'white',
    borderRadius: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  pickerView:{
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  pickerTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  pickerItemTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0a497b',
    width: '80%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

});

export default styles;