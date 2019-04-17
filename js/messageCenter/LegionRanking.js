/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-table-component';


export default class FlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['排名', '名称', '目标实收额（元）', '当前时间进度目标实收额(元)', '有购会员', '毛利额(元)'],
            tableHeadB: ['排名', '名称', '实际实收额（元）', '销售额（元）', '有购会员数（人）', '毛利额(元)'],
            widthArr: [40, 40, 120, 190, 120, 120],
            widthArrB: [40, 40, 120, 120, 120, 120],
            tableHeadA: ['名称', '目标实收（元）'],
            tableDataA: [
                ['…真北路门店', '100000'],
                ['…真北路门店', '100000'],
                ['…真北路门店', '100000'],
                ['…真北路门店', '100000']
            ],
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
    componentDidMount () {

    }
    _alertIndex(index) {

    }
  render() {
    const state = this.state;
    const tableData = [
        ["00", "01", "02", "03", "04", "05"],
        ["00", "01", "02", "03", "04", "05"],
        ["00", "01", "02", "03", "04", "05"],
    ];
    const element = (data, index) => (
        <TouchableOpacity onPress={() => this._alertIndex(data, index)}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>修改</Text>
          </View>
        </TouchableOpacity>
      );

    return (
        <View style={{paddingBottom: 50}}>
            <View style={styles.headTitle}>
                <Text style={{fontSize: 14, color: '#4D4D4D'}}>
                    最后订单时间：2017-04-27 19:52:21
                    {/* 绑值：{this.props.listData.xxx} */}
                </Text>
            </View>
            <View style={{paddingHorizontal: 13, paddingBottom: 17}}>
                <View>
                    <View style={{marginVertical: 6}}>
                        <Text style={styles.content}>
                        PK指标为惠氏品牌奶粉实收额，您门店的
                        <Text style={styles.greenNumber}>当前排名NO.3</Text>共有
                        <Text style={styles.greenNumber}>5</Text>
                        个门店参与此次PK赛实收销额指标100,000,当前实际 值40,125元,当前时间进度
                        <Text style={styles.greenNumber}>64.09</Text>%，落后目标
                        <Text style={styles.redNumber}>23988</Text>元
                        </Text>
                    </View>
                    <View style={[styles.flexBox, {marginVertical: 10}]}>
                        <View>
                            <Text style={styles.content}>
                            落后目标：
                            <Text style={styles.redNumber}>766921</Text>元
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.content}>
                            当前时间进度：
                            <Text style={styles.redNumber}>64.09%</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.flexBox, {marginVertical: 14}]}>
                        <Text style={styles.name}>门店排名</Text>
                    </View>
                    <View style={styles.container}>
                        <ScrollView horizontal={true}>
                            <View>
                                <Table borderStyle={{borderColor: '#C4C4C4'}}>
                                <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                                </Table>
                                <ScrollView style={styles.dataWrapper}>
                                <Table borderStyle={{borderColor: '#C4C4C4'}}>
                                    {
                                    tableData.map((rowData, index) => (
                                        <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={state.widthArr}
                                        style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                                        textStyle={styles.text}
                                        />
                                    ))
                                    }
                                </Table>
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={[styles.flexBox, {marginVertical: 14}]}>
                        <Text style={styles.name}>门店下导购排名</Text>
                    </View>
                    <View style={styles.container}>
                        <ScrollView horizontal={true}>
                            <View>
                                <Table borderStyle={{borderColor: '#C4C4C4'}}>
                                <Row data={state.tableHeadB} widthArr={state.widthArrB} style={styles.header} textStyle={styles.text}/>
                                </Table>
                                <ScrollView style={styles.dataWrapper}>
                                <Table borderStyle={{borderColor: '#C4C4C4'}}>
                                    {
                                    tableData.map((rowData, index) => (
                                        <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={state.widthArrB}
                                        style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                                        textStyle={styles.text}
                                        />
                                    ))
                                    }
                                </Table>
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    {/* 6.1惠氏PK3指标拆分 */}
                    <View style={{height: 500}}></View>
                    <View style={[styles.flexBox, {marginVertical: 14}]}>
                        <Text style={styles.name}>军团一实收额指标：180000元</Text>
                    </View>
                    <View style={styles.container}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#c4c4c4'}}>
                            <Row data={state.tableHeadA} style={styles.header} textStyle={styles.text}/>
                            <Rows data={state.tableDataA} style={styles.header} textStyle={styles.text}/>
                        </Table>
                    </View>
                    {/* 6.1惠氏PK4指标拆分 */}
                    <View style={{height: 500}}></View>
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
                    <View style={{height: 500}}></View>
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
