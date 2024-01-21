import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './DoneButtonStyles';

const DoneButton = () => {
  return (
    <View style={styles.tapOutContainer}>
      <TouchableOpacity style={styles.tapOutButton}>
        <Text style={styles.tapOutText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoneButton;
