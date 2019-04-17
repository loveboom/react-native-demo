/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Balance from './balance.js'
import Ranking from './Ranking.js'
import IndexSplittingPK3 from './IndexSplittingPK3.js'
import IndexSplittingPK4 from './IndexSplittingPK4.js'

const RootStack = StackNavigator(
  {
    Home: {
      screen: Ranking,
    },
    IndexSplittingPK3: {
      screen: IndexSplittingPK3,
    },
    IndexSplittingPK4: {
      screen: IndexSplittingPK4,
    },
    Balance: {
      screen: Balance,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
