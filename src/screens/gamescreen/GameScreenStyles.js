import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'cyan',
    paddingTop: '25%',
  },

  pictureContainer: {
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'grey',

    flex: 0.25,
  },

  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'white',

    flex: 0.15,
  },

  choiceContainer: {
    display: 'flex',
    // backgroundColor: 'grey',
    justifyContent: 'center',
    flex: 0.3,
  },

  timerContainer: {
    display: 'flex',
    // backgroundColor: 'white',
    justifyContent: 'center',
    flex: 0.15,
  },

  tapOutContainer: {
    display: 'flex',
    flex: 0.15,
    justifyContent: 'center',
    // backgroundColor: 'grey',
  },
});
