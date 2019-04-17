/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default class FlatList extends Component {
  _onPressButton(data, index) {
      console.log('点击')
  }

  render() {
    return (
        <View style={{marginTop: 10, borderRadius: 7, shadowOffset: {width: 0, height: 5}, shadowColor: 'black', backgroundColor: 'white'}}>
            <View style={[styles.flexBox, styles.listTitle]}>
                <Text style={styles.listTitleText}>5.1惠氏PK10</Text>
            </View>
            <View style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#c4c4c4'}}>
                <View style={{marginTop: 10}}>
                    <Text>结算时间：2019年5月20日</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <Text>实收额指标180000元，实际达成18233元， 领先目标
                    <Text style={styles.greenNumber}>181212</Text>元</Text>
                </View>
            </View>
            <TouchableOpacity style={{display: 'flex', alignItems: 'center'}} onPress={() => this._onPressButton(data, index)}>
                <View style={{paddingBottom: 14, paddingTop: 14}}>
                    <Text style={{fontSize: 12, color: '#00BCD4'}}>点击查看详情</Text>
                </View>
            </TouchableOpacity>
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
    greenNumber: {
        fontSize: 16,
        color: '#00BCD4',
        fontWeight: 'bold'
    },
    headTitle: {
        marginVertical: 0,
        height: 40,
        paddingBottom: 8,
        paddingTop: 10,
        paddingLeft: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4'
    },
    listTitle: {
        marginTop: 10,
        paddingBottom: 6,
        paddingTop: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        borderLeftWidth: 4,
        borderLeftColor: '#FF5C8C'
    },
    listTitleText: {
        marginLeft: 20,
        fontSize: 16,
        color: '#4D4D4D'
    }
});
