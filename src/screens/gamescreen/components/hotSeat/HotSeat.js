import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './HotSeatStyles';
import GameTitle from '../../../../components/gameTitle/GameTitle';
import GameOption from '../../../../components/gameOption/GameOption';
import {LinearGradient} from 'react-native-linear-gradient';
import Timer from '../../../../components/timer/Timer';
import TapOutButton from '../../../../components/tapOutButton/TapOutButton';

import pic from '../../../../assets/bry.png';

const HotSeat = () => {
  return (
    <TouchableOpacity style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        colors={['#FFbb19', '#dd7019']}
        style={styles.container}>
        <View style={styles.pictureContainer}></View>
        <View style={styles.titleContainer}>
          <GameTitle title={'TAP!'} />
        </View>
        <View style={styles.timerContainer}>
          {/* timer grow animation stops on tap */}
          <Timer seconds={2} millis={54} />
        </View>
        <View style={styles.tapOutContainer}>{/* <TapOutButton /> */}</View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HotSeat;
