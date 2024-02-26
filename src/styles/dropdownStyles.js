//styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

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

});

export default styles;