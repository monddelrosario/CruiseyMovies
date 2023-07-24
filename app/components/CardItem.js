import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { IMAGE_PATH } from '../constants';
import { SharedElement } from 'react-navigation-shared-element';
import { styles } from './styles';
import uuid from 'react-native-uuid';

const CardItem = ({ item, navigation, type }) => {
  const cardID = uuid.v4();
  const onNavigate = () => {
    navigation.navigate('Details', { item, cardID });
  };

  return (
    <View style={[styles.flex, { top: type === 'big' ? 80 : 20 }]}>
      <Pressable onPress={onNavigate} style={styles.flex}>
        <SharedElement
          id={cardID}
          style={[
            styles.container,
            type !== 'big' && { borderRadius: 5 },
            type === 'search' ? { marginHorizontal: 2 } : { marginRight: 20 },
            {
              backgroundColor: item?.poster_path?.includes('null')
                ? 'white'
                : 'black',
            },
          ]}
        >
          {item?.poster_path?.includes('null') ? (
            <Text style={styles.noImageTextStyle}>No image available</Text>
          ) : (
            <Image
              source={{ uri: `${IMAGE_PATH + item.poster_path}` }}
              style={[styles.imageStyle, type !== 'big' && { borderRadius: 5 }]}
              resizeMode="cover"
            />
          )}
        </SharedElement>
      </Pressable>
      <Text style={[styles.labelStyle, type !== 'big' && styles.labelStyle2]}>
        {item?.original_title}
      </Text>
    </View>
  );
};

export default CardItem;
