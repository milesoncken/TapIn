import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const GameOption = props => {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        marginBottom: '5%',
        marginHorizontal: '5%',
        paddingHorizontal: '10%',
        height: 90,

        borderRadius: 999,

        shadowColor: '#000',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      }}>
      <Text
        adjustsFontSizeToFit
        style={{
          fontStyle: 'italic',
          fontWeight: '900',
          fontSize: 24,
          textAlign: 'center',
          letterSpacing: -0.25,
        }}>
        {props.option}
      </Text>
    </TouchableOpacity>
  );
};

export default GameOption;
