import {View, Text} from 'react-native';
import React from 'react';

const GameTitle = props => {
  return (
    <View>
      <Text
        adjustsFontSizeToFit
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontStyle: 'italic',
          color: '#fff',
          fontWeight: '900',
          fontSize: 50,
          textAlign: 'center',
          letterSpacing: 0,

          shadowColor: '#000',
          shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.3,
          shadowRadius: 5,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default GameTitle;
