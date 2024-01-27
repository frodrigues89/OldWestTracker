import React, { useState } from 'react';
import { View, Text} from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import Altura from '../Entity';

const FiltrarScreenModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedAltura, setSelectedAltura] = useState(null);

  const dropdownAltura = [
    { label: 'Tampinha', value: 'Tampinha' },
    { label: 'Baixo', value: 'Baixo' },
    { label: 'Mediano', value: 'Mediano' },
    { label: 'Alto', value: 'Alto'},
    { label: 'Gigante', value: 'Gigante'}
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSelectAltura = (itemValue) => {
    setSelectedAltura(itemValue);
    toggleModal();
  };

  return (
    <View style={styles.pickerContainer}>
        <Text 
            onPress={toggleModal}
            style={styles.pickerTxt}
            >
            {selectedAltura || 'Selecionar Altura'}
        </Text>
      <Modal 
        isVisible={isModalVisible} 
        onBackdropPress={toggleModal}
        style={styles.picker}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Picker
            selectedValue={selectedAltura}
            onValueChange={handleSelectAltura}
            style={{ width: 200 }}
            itemStyle={styles.pickerItemTxt}
          >
            {dropdownAltura.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
      </Modal>
    </View>
  );
};

export default FiltrarScreenModal;
