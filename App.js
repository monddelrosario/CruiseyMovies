import 'react-native-reanimated';
import 'react-native-gesture-handler';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { API_PATH } from './app/constants';
import Details from './app/screens/details';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './app/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import Search from './app/screens/search';
import Splash from './app/screens/splash';
import { StyleSheet } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const client = new ApolloClient({
  uri: API_PATH,
  cache: new InMemoryCache(),
});
if (__DEV__) {
  import('./ReactotronConfig.js').then(() =>
    console.log('Reactotron Configured'),
  );
}
const App = () => {
  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Details"
              component={Details}
              sharedElements={(route, otherRoute, showing) => {
                const { cardID } = route.params;
                return [cardID];
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </ApolloProvider>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
