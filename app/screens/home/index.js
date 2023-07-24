import {
  NOW_PLAYING_MOVIES_QUERY,
  SEARCH_MOVIES_QUERY,
  UPCOMING_MOVIES_QUERY,
} from '../../constants';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CardContainer from '../../components/CardContainer';
import React from 'react';
import { ScrollView } from 'moti';
import SearchIcon from '../../assets/icons/search.svg';
import Spacer from '../../components/Spacer';
import { useQuery } from '@apollo/client';

const Home = ({ navigation }) => {
  const upcomingResponse = useQuery(UPCOMING_MOVIES_QUERY);
  const nowPlayingResponse = useQuery(NOW_PLAYING_MOVIES_QUERY);
  const tomCruiseResponse = useQuery(SEARCH_MOVIES_QUERY, {
    variables: { params: 'Tom Cruise' },
  });
  const { upcomingMovies } = upcomingResponse?.data || [];
  const { nowPlayingMovies } = nowPlayingResponse?.data || [];
  const { searchMovies } = tomCruiseResponse?.data || [];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.gooddayTextStyle}>Good day!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <SearchIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container} nestedScrollEnabled>
        <Spacer height={20} />
        <CardContainer
          label={'Tom Cruise Movies'}
          data={searchMovies?.results}
          loading={tomCruiseResponse?.loading}
          type="big"
        />

        <CardContainer
          label={'Now Playing'}
          data={
            nowPlayingMovies?.results
              ? [...nowPlayingMovies?.results?.slice(0, 9)]
              : []
          }
          loading={nowPlayingResponse?.loading}
          type="small"
        />

        <CardContainer
          label={'Upcoming Movies'}
          data={
            upcomingMovies?.results
              ? [...upcomingMovies?.results?.slice(10, 19)]
              : []
          }
          loading={upcomingResponse?.loading}
          type="small"
        />

        <Spacer height={50} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  centered: {
    alignSelf: 'center',
  },
  gooddayTextStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
    height: 45,
    marginTop: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
