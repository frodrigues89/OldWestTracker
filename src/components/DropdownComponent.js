import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import styles from '../screens/styles';

const DropdownComponent = ({ isVisible, toggleModal, selectedValue, onValueChange, items }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      style={styles.pickerModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={500}
      animationOutTiming={500}
      hasBackdrop={true}
    >
      <View style={styles.pickerView}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.button}
          itemStyle={styles.pickerItemTxt}
        >
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value}/>
          ))}
        </Picker>
      </View>
    </Modal>
  );
};

export default DropdownComponent;
