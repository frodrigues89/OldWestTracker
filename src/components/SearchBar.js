// SearchBar.js
import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="NOME DO MALA..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Pressable style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>🔍</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container:{
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '75%',
    height: 50,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgb(23,23,150)',
    width: '20%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: "5%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default SearchBar;
