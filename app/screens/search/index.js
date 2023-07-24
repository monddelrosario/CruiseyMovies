import React, { useEffect, useState } from 'react';
import { SEARCH_MOVIES_QUERY, UPCOMING_MOVIES_QUERY } from '../../constants';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import BackIcon from '../../assets/icons/back.svg';
import ListContainer from '../../components/ListContainer';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from '@apollo/client';

const Search = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const searchResponse = useQuery(SEARCH_MOVIES_QUERY, {
    variables: { params: text },
  });
  const upcomingResponse = useQuery(UPCOMING_MOVIES_QUERY);

  const { upcomingMovies } = upcomingResponse?.data || [];

  const { searchMovies } = searchResponse?.data || [];

  const [filteredSearch, setFilteredSearch] = useState([]);
  useEffect(() => {
    if (searchMovies?.results.length > 0) {
      const filtered = searchMovies?.results?.filter(
        (item) => !item?.poster_path?.includes('null'),
      );
      setFilteredSearch(filtered);
    }
  }, [searchMovies?.results]);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerStyle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={30} height={30} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search for titles, genres or people"
          placeholderTextColor={'#fff'}
        />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.labelTextStyle}>
          {text
            ? filteredSearch?.length > 0
              ? 'Results'
              : ''
            : 'Top Searches'}
        </Text>
        <ListContainer
          data={text ? filteredSearch : upcomingMovies?.results}
          navigation={navigation}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  labelTextStyle: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    top: 40,
  },
  input: {
    height: 40,
    borderWidth: 0.7,
    padding: 15,
    borderRadius: 10,
    width: '80%',
    height: 45,
    marginHorizontal: 20,
    backgroundColor: 'gray',
    color: '#fff',
  },
  mainContainer: {
    flex: 1,
    top: 50,
  },
});
export default Search;
