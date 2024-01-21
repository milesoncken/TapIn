import {View, Text} from 'react-native';
import React from 'react';

const PunishmentText = props => {
  return (
    <View>
      <Text
        adjustsFontSizeToFit
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontStyle: 'italic',
          color: '#fff',
          fontWeight: '800',
          fontSize: 28,
          textAlign: 'center',
          letterSpacing: 0,
          paddingHorizontal: '5%',

          shadowColor: '#000',
          shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.3,
          shadowRadius: 5,
        }}>
        {props.text}
      </Text>
    </View>
  );
};

export default PunishmentText;
