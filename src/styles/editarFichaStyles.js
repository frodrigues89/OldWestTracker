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
    backgroundColor: 'rgb(23,23,150)',
    width: '80%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  fichaIMG: {
    width: 250,
    height: 250,
    borderRadius: 90,
    marginVertical: 20,
  },

  modalBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: "10%",
    width: '80%',
    backgroundColor: 'rgb(23,23,150)',
    borderRadius: 8,
    height: 50,
  },
  changedButton:{
    backgroundColor: 'rgb(0,122,94)'
  },
  modalBtnTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  txt:{
    fontSize: 16,
    color: 'rgb(23,23,150)',
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgb(23,23,150)',
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
  },
  inputRg: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgb(23,23,150)',
    borderRadius: 8,
    marginBottom: 20,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fichaContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewDocs:{
    flexDirection:'row',
    width: '80%',
    marginLeft: '10%',
    justifyContent: 'space-between',
  },
  viewDocsItems:{
    width: '45%',
  },

});

export default styles;