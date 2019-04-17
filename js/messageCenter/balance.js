/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, ScrollView } from 'react-native';
import ListItem from '../components/listItem.js'


export default class FlatList extends Component {
  static navigationOptions = {
    title: '结算',
  };
  constructor(props) {
    super(props);
    this.state = {
        type: 1
    }
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
                <Text style={[styles.touchButtonText, activeButtonText]}>未结算</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchButton, activeButtonA]} 
                onPress={this.changeTab.bind(this, 2)}>
                <Text style={[styles.touchButtonText, activeButtonTextA]}>已结算</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal={false} style={{backgroundColor: 'white'}}>
          <View style={{paddingBottom: 50, backgroundColor: '#f5f5f5'}}>
              <View style={styles.headTitle}>
                  <Text style={{fontSize: 14, color: '#4D4D4D'}}>
                      最后订单时间：2017-04-27 19:52:21
                  </Text>
              </View>
              <View style={{paddingLeft: 10, paddingRight: 10}}>
                <ListItem></ListItem>
              </View>
          </View>
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
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#4d4d4d',
    },
    time: {
        fontSize: 12,
        color: '#4d4d4d'
    },
    content: {
        fontSize: 12,
        color: '#4d4d4d'
    },
    redNumber: {
        fontSize: 16,
        color: '#FF7877',
        fontWeight: 'bold'
    },
    btnBlue: {
        fontSize: 12,
        color: '#00BCD4'
    },
    headTitle: {
        backgroundColor: 'white',
        marginVertical: 0,
        height: 40,
        paddingBottom: 8,
        paddingTop: 10,
        paddingLeft: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4'
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
