import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CloseIcon from '../../assets/icons/close.svg';
import { FlatList } from 'react-native-gesture-handler';
import { IMAGE_PATH } from '../../constants';
import ProfileCard from '../../components/ProfileCard';
import { SharedElement } from 'react-navigation-shared-element';
import Spacer from '../../components/Spacer';
import uuid from 'react-native-uuid';

const Details = ({ navigation, route }) => {
  const { item, cardID } = route.params;

  return (
    <View style={styles.flex}>
      <ScrollView contentContainerStyle={styles.flex} nestedScrollEnabled>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeStyle}
        >
          <CloseIcon width={40} height={40} />
        </TouchableOpacity>
        <SharedElement
          id={cardID}
          style={[
            styles.cardContainer,
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
              style={styles.imageStyle}
              resizeMode="cover"
            />
          )}
        </SharedElement>

        <View style={styles.padding}>
          <Spacer height={10} />

          <Text style={styles.titleTextStyle}>{item.original_title}</Text>
          <Spacer height={10} />
          <Text style={styles.review}>{item.overview}</Text>
          <Spacer height={10} />

          <View style={styles.height}>
            {item?.credits?.cast?.length > 0 ? (
              <>
                <Text style={styles.titleTextStyle}>Casts</Text>
                <Spacer height={10} />

                <FlatList
                  nestedScrollEnabled
                  keyExtractor={() => uuid.v4()}
                  data={item?.credits?.cast}
                  horizontal
                  renderItem={(item) => <ProfileCard data={item} />}
                />
              </>
            ) : (
              <>
                <Text style={styles.titleTextStyle}>No Casts Available</Text>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'black',
  },
  cardContainer: {
    height: '70%',
    width: '100%',
    justifyContent: 'center',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeStyle: {
    top: 50,
    zIndex: 99999,
    right: 20,
    position: 'absolute',
  },
  height: {
    height: '40%',
  },
  review: {
    color: 'gray',
    fontSize: 12,
  },
  padding: {
    height: '40%',
  },
  imageStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  noImageTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  titleTextStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Details;
