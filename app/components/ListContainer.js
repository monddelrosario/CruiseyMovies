import { FlatList, ScrollView, Text, View } from 'react-native';

import CardItem from './CardItem';
import React from 'react';
import Spacer from './Spacer';
import { styles } from './styles';
import uuid from 'react-native-uuid';
import { window } from '../constants';

const ListContainer = ({ data, navigation }) => {
  return (
    <ScrollView style={styles.flex1} nestedScrollEnabled={true}>
      <FlatList
        keyExtractor={() => uuid.v4()}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.contentStyle}
        style={styles.flex1}
        data={data}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.cardStyle}>
            <CardItem item={item} navigation={navigation} type={'search'} />
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.flex1}>
            <Text style={styles.noResultTextStyle}>No results found!</Text>
          </View>
        )}
      />
      <Spacer height={70} />
    </ScrollView>
  );
};

export default ListContainer;
