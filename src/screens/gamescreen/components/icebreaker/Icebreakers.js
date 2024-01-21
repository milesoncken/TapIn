import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './IcebreakersStyles';
import GameTitle from '../../../../components/gameTitle/GameTitle';
import GameOption from '../../../../components/gameOption/GameOption';
import {LinearGradient} from 'react-native-linear-gradient';
import Timer from '../../../../components/timer/Timer';
import TapOutButton from '../../../../components/tapOutButton/TapOutButton';
import PunishmentText from './components/PunishmentText';

import pic from '../../../../assets/girl2.jpg';
import DoneButton from './components/DoneButton';

const Icebreakers = () => {
  return (
    // <TouchableOpacity style={{flex: 1}}>
    <LinearGradient
      start={{x: 0, y: 0}}
      colors={['#01ffdd', '#3060aa']}
      style={styles.container}>
      <View style={styles.pictureContainer}>
        <Image
          style={{
            alignSelf: 'center',
            width: 180,
            height: 180,
            borderRadius: 500,
            borderColor: 'white',
            borderWidth: 4,

            shadowColor: '#000',
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.3,
            shadowRadius: 5,
          }}
          source={pic}
        />
        <Text
          style={{
            color: '#fff',
            fontWeight: '900',
            fontSize: 30,
            textAlign: 'center',
            letterSpacing: 0,

            shadowColor: '#000',
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.3,
            shadowRadius: 5,
          }}>
          Niyah
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <GameTitle title={'ICE BREAKER'} />
      </View>
      <View style={styles.choiceContainer}>
        <PunishmentText text={'What made you smash once and never go back'} />
      </View>

      <View style={styles.tapOutContainer}>
        <DoneButton />
      </View>
    </LinearGradient>
    // </TouchableOpacity>
  );
};

export default Icebreakers;
