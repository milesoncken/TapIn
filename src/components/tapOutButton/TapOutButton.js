import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './TapOutButtonStyles';

const TapOutButton = () => {
  return (
    <View style={styles.tapOutContainer}>
      <TouchableOpacity style={styles.tapOutButton}>
        <Text style={styles.tapOutText}>😩Tap Out</Text>
      </TouchableOpacity>
      <Text style={styles.tapOutAmount}>2 left</Text>
    </View>
  );
};

export default TapOutButton;
