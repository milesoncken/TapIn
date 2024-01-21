import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import AnimatedGradientTransition from './AnimatedGradientTrainsition';
import {styles} from './styles';

const AnimatedGradient = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    ['#1e238a', '#1488cc'],
    ['#1488cc', '#1e238a'],
  ];

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setColorIndex(value => (value + 1) % colors.length)}>
        <AnimatedGradientTransition
          colors={colors[colorIndex]}
          style={styles.gradient}
        />
      </Pressable>
      <View style={styles.rightContainer}>
        <Text>Tap for next color pair</Text>
        <Text>Current colors:</Text>
        <Text style={{color: colors[colorIndex][0]}}>
          {colors[colorIndex][0]}
        </Text>
        <Text style={{color: colors[colorIndex][0]}}>
          {colors[colorIndex][1]}
        </Text>
      </View>
    </View>
  );
};

export default AnimatedGradient;
