import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tapOutContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: '10%',
  },
  tapOutButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: '2%',
    marginLeft: '2%',
    paddingHorizontal: '2%',
    height: 50,
    width: '30%',

    borderRadius: 999,

    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  tapOutText: {
    fontStyle: 'italic',
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: -0.3,
  },

  tapOutAmount: {
    fontStyle: 'italic',
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    letterSpacing: -0.3,
    opacity: 0.5,
  },
});
