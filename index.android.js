/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import {
//   AppRegistry
// } from 'react-native';
// import MessageCenter from './js/messageCenter/index.js';
// import { StackNavigator } from 'react-navigation';
// const newApp = StackNavigator({
//   Home: { screen: MessageCenter },
// });

// AppRegistry.registerComponent('salePK', () => newApp);

import {
  AppRegistry
} from 'react-native';
import MessageCenter from './js/messageCenter/index.js'



AppRegistry.registerComponent('salePK', () => MessageCenter);