import { Dimensions } from 'react-native';
import { gql } from '@apollo/client';

const API_PATH = `https://tmdb-one-blue.vercel.app/`;
const IMAGE_PATH = `https://image.tmdb.org/t/p/w500`;
const window = Dimensions.get('window');

const UPCOMING_MOVIES_QUERY = gql`
  query {
    upcomingMovies(page: 10) {
      page
      results {
        id
        original_title
        poster_path
        overview

        credits {
          cast {
            id
            name
            profile_path
            character
          }
        }
      }
    }
  }
`;

const NOW_PLAYING_MOVIES_QUERY = gql`
  query {
    nowPlayingMovies(page: 1) {
      page
      results {
        id
        original_title
        poster_path
        overview

        credits {
          cast {
            id
            name
            profile_path
            character
          }
        }
      }
    }
  }
`;

const SEARCH_MOVIES_QUERY = gql`
  query Moview($params: String!) {
    searchMovies(query: $params, page: 1) {
      page
      results {
        id
        original_title
        poster_path
        overview

        credits {
          cast {
            id
            name
            profile_path
            character
          }
        }
      }
    }
  }
`;

const SEARCH_MULTI_MOVIES_QUERY = gql`
  query Moview($params: String!) {
    searchMulti(query: $params, page: 1) {
      page
      results {
        id
        original_title
        poster_path
        overview

        credits {
          cast {
            id
            name
            profile_path
            character
          }
        }
      }
    }
  }
`;

export {
  IMAGE_PATH,
  UPCOMING_MOVIES_QUERY,
  NOW_PLAYING_MOVIES_QUERY,
  SEARCH_MOVIES_QUERY,
  SEARCH_MULTI_MOVIES_QUERY,
  API_PATH,
  window,
};
