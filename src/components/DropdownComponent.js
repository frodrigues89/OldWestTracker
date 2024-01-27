import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import styles from '../../screens/styles';

const DropdownComponent = ({ isVisible, toggleModal, selectedValue, onValueChange, items }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      style={styles.picker}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={500}
      animationOutTiming={500}
      hasBackdrop={true}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={{ width: 200 }}
          itemStyle={styles.pickerItemTxt}
        >
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </Modal>
  );
};

export default DropdownComponent;
