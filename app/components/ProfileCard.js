import { Image, StyleSheet, Text, View } from 'react-native';

import { IMAGE_PATH } from '../constants';
import React from 'react';

const ProfileCard = ({ data }) => {
  const { item } = data;
  return (
    <View style={styles.profileCardStyle}>
      {item?.profile_path ? (
        <Image
          source={{ uri: `${IMAGE_PATH + item?.profile_path}` }}
          style={styles.imageStyle2}
          resizeMode="cover"
        />
      ) : (
        <Text style={styles.noImageTextStyle}>No image available</Text>
      )}
      <Text style={styles.nameStyle}>{item?.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle2: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 5,
  },
  profileCardStyle: {
    borderRadius: 5,
    marginRight: 10,
    height: '80%',
    width: 50,
    backgroundColor: 'white',
  },
  nameStyle: {
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    fontSize: 10,
  },
  noImageTextStyle: {
    fontSize: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
});
export default ProfileCard;
