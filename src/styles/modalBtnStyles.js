//styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  pickerModal: {
    flex: 1,
    borderColor: 'transparent',
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
    fontSize: 30,
    fontWeight: 'bold'
  },
  pickerItemTxt: {
    color: '#fff',
    fontSize: 30,
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
    marginBottom: 50,
  },

});

export default styles;