//resultadoBuscaStyles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  itemContainer: {
    alignItems: 'center',
    marginVertical: 20,
    borderColor: 'rgb(23,23,150)',
    borderWidth: 2,
    borderRadius: 90,
    padding: 20

  },
  txt: {
    color: 'black',
    fontSize: 20,
    marginBottom: 3
  },
  txtNome: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 3
  },
  fichaIMG: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderRadius: 90,
    marginBottom: 20,
  },
  fichaText: {
    color: 'black',
    fontSize: 20,
  }
});

export default styles;