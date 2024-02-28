//ModalBtn.js
import React from 'react';
import { View, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../styles/modalBtnStyles';
import { Text } from 'react-native';

const ModalBtn = ({ isVisible, toggleModal, selectedValue, onValueChange, items }) => {
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
        <View style={styles.pickerView}>
          {items.map((item, index) => (
            <Pressable key={index} onPress={() => onValueChange(item.value)} style={styles.button}>
              <Text style={styles.pickerItemTxt}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default ModalBtn;
