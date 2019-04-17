/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';


export default class IndexSplittingPK4 extends Component {
  static navigationOptions = {
    title: 'PK4指标拆分',
  };
  constructor(props) {
      super(props);
      this.state = {
          widthArr: [40, 40, 120, 190, 120, 120],
          widthArrB: [40, 40, 120, 120, 120, 120],
          tableHeadC: ['名称', '目标实收（元）', '操作'],
          tableDataC: [
              ['门店一', '100000', '4'],
              ['门店二', '100000', '4'],
              ['门店三', '100000', '4'],
          ],
      }
  }
  // 传进数据时开启
  // static propTypes = {
  //     listData: PropTypes.array.isRequired,
  // };
  _alertIndex(index) {

  }
  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(data, index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>修改</Text>
        </View>
      </TouchableOpacity>
    );
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
                      <Text style={styles.name}>军团一实收额指标：人民币100万元</Text>
                  </View>
                  <View>
                      <Table borderStyle={{borderColor: 'transparent'}}>
                          <Row data={state.tableHeadC} style={styles.header} textStyle={styles.text}/>
                          {
                              state.tableDataC.map((rowData, index) => (
                              <TableWrapper key={index} style={styles.rowA}>
                                  {
                                  rowData.map((cellData, cellIndex) => (
                                      <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                                  ))
                                  }
                              </TableWrapper>
                              ))
                          }
                      </Table>
                  </View>
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
