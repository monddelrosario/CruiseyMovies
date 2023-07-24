import { StyleSheet } from 'react-native';
import { window } from '../constants';

export const styles = StyleSheet.create({
  carouselStyle: {
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    borderRadius: 30,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  flex: {
    flex: 0.9,
  },
  imageStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 30,
  },
  headerStyle: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 25,
  },
  labelStyle: {
    color: '#fff',
    paddingTop: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 22,
  },
  labelStyle2: {
    position: 'absolute',
    bottom: -10,
    fontWeight: '500',
    fontSize: 12,
  },
  noResultTextStyle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
  },
  noImageTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    height: 300,
    width: window.width / 3,
  },
  contentStyle: {
    width: '100%',
    height: '100%',
  },
  flex1: {
    flex: 1,
  },
});
