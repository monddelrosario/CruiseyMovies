import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import CardItem from './CardItem';
import Carousel from 'react-native-reanimated-carousel';
import React from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { window } from '../constants';

const CardContainer = ({ data, label, loading, type }) => {
  const PAGE_WIDTH = type === 'big' ? window.width : window.width * 0.4;
  const PAGE_HEIGHT = type === 'big' ? window.width * 1.9 : window.width * 0.6;

  const CARD_WIDTH = type === 'big' ? window.width : window.width * 0.5;

  const navigation = useNavigation();
  if (loading) {
    return (
      <View style={[styles.container, { padding: 20 }]}>
        <ActivityIndicator />
      </View>
    );
  }

  if (data.length === 1) {
    return (
      <View style={styles.centered}>
        <Text>No Data found</Text>
      </View>
    );
  }
  return (
    <>
      <Text style={styles.headerStyle}>{label}</Text>
      <Carousel
        loop={false}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={data}
        mode={type === 'big' && 'parallax'}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <CardItem item={item} navigation={navigation} type={type} />
        )}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        style={[
          styles.carouselStyle,
          { height: CARD_WIDTH * 1.4, marginLeft: type === 'small' ? 20 : 0 },
        ]}
      />
    </>
  );
};

export default CardContainer;
