import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    height: Dimensions.get('screen').height * 0.24,
    width: '38%',
    alignSelf: 'center',
    transform: [{
      translateY: -Dimensions.get('screen').height * 0.05
    }]
  },
  posterRow: {
    padding: 8,
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.22,
    left: 0,
    right: 0,
    bottom: 0
  },
  fanart: {
    height: Dimensions.get('screen').height * 0.3,
    width: Dimensions.get('screen').width,
  },
  fanartViewFilter: {
    backgroundColor: 'black',
    opacity: 0.15,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  fanartView: {
    height: Dimensions.get('screen').height * 0.3,
    width: '100%',

  },
  title: {
    fontSize: 21,
    fontWeight: '700',
    paddingHorizontal: 6,
    textAlign: 'center',
    transform: [{translateY: -15}]
  },
  en_title: {
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 12,
    fontStyle: 'italic',
    color: 'grey',
    marginBottom: 25
  },

  iosContainer: {
    borderRadius: 6,
    padding: 12,
    margin: 16,
  },
  subTitles: {
    fontSize: 18,
    fontWeight: '700',
    
  },

  synopsisButton: {
    width: 50
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  }
});
