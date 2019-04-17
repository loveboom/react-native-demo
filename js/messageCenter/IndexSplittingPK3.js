/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';


export default class IndexSplittingPK3 extends Component {
  static navigationOptions = {
    title: 'PK3指标拆分',
  };
  constructor(props) {
      super(props);
      this.state = {
          widthArr: [40, 40, 120, 190, 120, 120],
          widthArrB: [40, 40, 120, 120, 120, 120],
          tableHead: ['名称', '目标实收（元）'],
          tableData: [
              ['…真北路门店', '100000'],
              ['…真北路门店', '100000'],
              ['…真北路门店', '100000'],
              ['…真北路门店', '100000']
          ],
      }
  }
  // 传进数据时开启
  // static propTypes = {
  //     listData: PropTypes.array.isRequired,
  // };
  render() {
    const state = this.state;

    return (
        <View style={{paddingBottom: 50, backgroundColor: 'white'}}>
            <View style={styles.headTitle}>
                <Text style={{fontSize: 14, color: '#4D4D4D'}}>
                    最后订单时间：2017-04-27 19:52:21
                    {/* 绑值：{this.props.listData.xxx} */}
                </Text>
            </View>
            <View style={{paddingHorizontal: 13, paddingBottom: 17}}>
                <View style={[styles.flexBox, {marginVertical: 14}]}>
                    <Text style={styles.name}>军团一实收额指标：180000元</Text>
                </View>
                <Table borderStyle={{borderWidth: 2, borderColor: '#C4C4C4'}}>
                    <Row data={state.tableHead} style={styles.header} textStyle={styles.text}/>
                    <Rows data={state.tableData} style={styles.header} textStyle={styles.text}/>
                </Table>
            </View>
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
    greenNumber: {
        fontSize: 16,
        color: '#00BCD4',
        fontWeight: 'bold'
    },
    btnBlue: {
        fontSize: 12,
        color: '#00BCD4'
    },
    container: {flex: 1, padding: 10, backgroundColor: '#fff'},
    header: { height: 50, backgroundColor: '#ffffff' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#ffffff' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' },
    rowA: { flexDirection: 'row', backgroundColor: '#ffffff' },
    headTitle: {
        marginVertical: 0,
        height: 40,
        paddingBottom: 8,
        paddingTop: 10,
        paddingLeft: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4'
    }
});
