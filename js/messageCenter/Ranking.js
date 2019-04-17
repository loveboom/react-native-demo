/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RankItemA from './RankItemA.js'
import RankItemB from './RankItemB.js'
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends Component {
  static navigationOptions = {
    title: '排名',
  };
  constructor (props) {
    super(props)
    this.state = {
        type: 1,
        data: {},
        jsonData: {}
    }
  }
  componentDidMount () { // 接口调用案例
    // fetch('https://facebook.github.io/react-native/movies.json')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({
    //     data: responseJson.data
    //   })
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  }
  changeTab (type) {
    this.setState({
        type: type
    })
  }
  render() {
    const activeButton = this.state.type === 1 ? styles.activeButton : null
    const activeButtonA = this.state.type === 2 ? styles.activeButton : null
    const activeButtonText = this.state.type === 1 ? styles.activeButtonText : null
    const activeButtonTextA = this.state.type === 2 ? styles.activeButtonText : null
    return (
        <View>
            <View style={[styles.flexBox, {justifyContent: 'space-around', paddingBottom: 13, paddingTop: 13, backgroundColor: '#00BCD4'}]}>
                <TouchableOpacity style={[styles.touchButton, activeButton]} 
                    onPress={this.changeTab.bind(this, 1)}>
                    <Text style={[styles.touchButtonText, activeButtonText]}>门店排名</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.touchButton, activeButtonA]} 
                    onPress={this.changeTab.bind(this, 2)}>
                    <Text style={[styles.touchButtonText, activeButtonTextA]}>导购排名</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={false} style={{backgroundColor: 'white'}}>
                {this.state.type === 1 ? 
                <RankItemA navigate={this.props.navigation.navigate}></RankItemA> : 
                <RankItemB navigate={this.props.navigation.navigate}></RankItemB>}
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.flatten({
    flexBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between'
    },
    touchButton: {
        height: 36,
        width: 156,
        borderRadius: 18,
        backgroundColor: '#00BCD4',
        justifyContent: 'center',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'white'
    },
    activeButton: {
        backgroundColor: 'white'
    },
    touchButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    activeButtonText: {
        color: '#00BCD4'
    }
});