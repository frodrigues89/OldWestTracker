//loginStyles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
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
  buttonText: {
    color: '#fff',
    fontSize: 20,
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