import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import AnimatedLottieView from 'lottie-react-native';
import { Text } from 'moti';

const Splash = ({ navigation }) => {
  const animationRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <AnimatedLottieView
          autoPlay
          ref={animationRef}
          source={require('../../assets/lotties/splash.json')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.name}>DEVELOPED BY RAYMOND DEL ROSARIO</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    bottom: 0,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  lottieContainer: {
    flex: 0.9,
    backgroundColor: '#0000',
  },
  name: {
    color: 'white',
  },
});
export default Splash;
