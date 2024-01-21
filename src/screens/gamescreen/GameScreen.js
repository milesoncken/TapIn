import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './GameScreenStyles';
import GameTitle from '../../components/gameTitle/GameTitle';
import GameOption from '../../components/gameOption/GameOption';
import {LinearGradient} from 'react-native-linear-gradient';
import AnimatedGradient from '../../components/animatedGradient/AnimatedGradient';
import Timer from '../../components/timer/Timer';
import TapOutButton from '../../components/tapOutButton/TapOutButton';

import pic from '../../assets/bry.png';
import HotSeat from './components/hotSeat/HotSeat';
import PunishmentScreen from './components/punishment/PunishmentScreen';
import Icebreakers from './components/icebreaker/Icebreakers';

const GameScreen = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      colors={['#252525', '#101010']}
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
          Bry
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <GameTitle title={'CHOOSE'} />
      </View>
      <View style={styles.choiceContainer}>
        <View>
          <GameOption option={'Show the last 3 pics from your Hidden Folder'} />
        </View>
        <View>
          <GameOption option={'Take 2 Shots'} />
        </View>
      </View>
      <View style={styles.timerContainer}>
        <Timer />
      </View>
      <View style={styles.tapOutContainer}>
        <TapOutButton />
      </View>
    </LinearGradient>
    // <HotSeat />
    // <PunishmentScreen />
    // <Icebreakers />
  );
};

export default GameScreen;
