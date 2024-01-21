import {View, Text, Image} from 'react-native';
import React from 'react';

const Timer = props => {
  return (
    <View>
      <Image />
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontStyle: 'italic',
          color: '#fff',
          fontWeight: '900',
          fontSize: 60,
          textAlign: 'center',
          letterSpacing: 0,

          shadowColor: '#000',
          shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.3,
          shadowRadius: 5,
        }}>
        ⏳{props.seconds}
        <Text
          style={{
            fontSize: 35,
          }}>
          .{props.millis}
        </Text>
      </Text>
    </View>
  );
};

export default Timer;
