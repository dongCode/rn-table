import React from "react";
import { View } from "react-native";
import { HEIGHT } from "./constants";
import { Cell } from "./Cell";
import { styles } from "./styles";
import { TableRow } from "./TableRow";

/* 支出 */
function MoneyOut(props) {

    const moneyOut = [1000, 1111, 1111, 111, 11, 1, 111, 1, 100, 11,11]
    const moneyOutPercent = [11, 11, 1, 11, 1, 1, 1, 10, 22, 33]

    return (
        <>
            <View style={[styles.content, {
                marginTop: 32,
                borderColor: 'rgba(229, 230, 234, 1)',
                borderTopWidth: 1,
                height: HEIGHT * 11
            }]}>
                <View style={{
                    width: 200,
                    flexDirection: 'row'
                }}>
                    <TableRow style={{
                        flex: 1,
                    }}>
                        <Cell data={'支出'} textStyle={{
                            textAlign: 'right',
                            marginRight: 10,
                            fontWeight: '500',
                        }} />
                    </TableRow>

                    <TableRow style={{
                        flex: 3,
                    }}>

                        <Cell data={'合计'} style={{
                            borderBottomColor: 'rgba(229, 230, 234, 1)',
                            borderBottomWidth: 1,
                        }} textStyle={{
                            marginLeft: 10,
                            fontWeight: '500',
                        }} />

                        <View style={{
                            flex: 7
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                flex: 1,
                            }}>
                                <Cell data={'固定费用'} style={{
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderColor: 'rgba(229, 230, 234, 1)',
                                    height: HEIGHT * 5,
                                    flex: 1,
                                }} textStyle={{

                                    marginLeft: 10,
                                    fontWeight: '500',
                                }} />
                                <View style={{
                                    flex: 1
                                }}>
                                    <Cell data={'小计'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,

                                    }} textStyle={{

                                        marginLeft: 10,
                                        fontWeight: '500',

                                    }} />
                                    <Cell data={'房租'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,

                                    }} textStyle={{

                                        marginLeft: 10,


                                    }} />
                                    <Cell data={'物业费'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,

                                    }} textStyle={{

                                        marginLeft: 10,


                                    }} />
                                    <Cell data={'管理费'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,

                                    }} textStyle={{

                                        marginLeft: 10,


                                    }} />
                                    <Cell data={'运费'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,

                                    }} textStyle={{

                                        marginLeft: 10,


                                    }} />
                                </View>

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                flex: 1,
                            }}>
                                <Cell data={'变动费用'} style={{
                                    borderRightWidth: 1,
                                    borderColor: 'rgba(229, 230, 234, 1)',
                                    height: HEIGHT * 5,
                                    flex: 1
                                }} textStyle={{

                                    marginLeft: 10,
                                    fontWeight: '500',

                                }} />
                                <View style={{
                                    flex: 1
                                }}>
                                    <Cell data={'小计'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,

                                    }} textStyle={{

                                        marginLeft: 10,
                                        fontWeight: '500',

                                    }} />
                                    <Cell data={'水费'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,

                                    }} textStyle={{

                                        marginLeft: 10,


                                    }} />
                                    <Cell data={'电费'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,

                                    }} textStyle={{

                                        marginLeft: 10,


                                    }} />
                                    <Cell data={'燃气费'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,
                                    }} textStyle={{
                                        marginLeft: 10,

                                    }} />
                                    <Cell data={'工资'} style={{

                                    }} textStyle={{

                                        marginLeft: 10,


                                    }} />
                                </View>

                            </View>
                        </View>


                    </TableRow>
                </View>

                <View style={{
                    flex: 1,
                    borderRightColor: 'rgba(229, 230, 234, 1)',
                    borderRightWidth: 1,
                }}>
                    {
                        moneyOut.map((item, index) => {
                            return (
                                <Cell key={index} data={item.toFixed(2)}
                                    style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: index ===  moneyOut.length - 1 ? 0 : 1,
                                    }}
                                    textStyle={{
                                        marginLeft: 10,
                                        textAlign: 'center',
                                        fontWeight: index === 0 || index === 1 || index === 6 ? '500' : '400',
                                    }} />
                            )
                        })
                    }
                </View>

                <View style={{
                    flex: 1,
                    borderRightColor: 'rgba(229, 230, 234, 1)',
                    borderRightWidth: 1,
                }}>
                    <Cell data={''} style={{
                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                        borderBottomWidth: 1,

                    }} textStyle={{

                        marginLeft: 10,
                        fontWeight: '500',

                    }}
                    />
                    {
                        moneyOutPercent.map((item, index) => {
                            return (
                                <Cell key={index} data={item.toFixed(2) + '%'}
                                    style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: index ===  moneyOutPercent.length - 1 ? 0 : 1,
                                    }}
                                    textStyle={{
                                        marginLeft: 10,
                                        textAlign: 'center',
                                        fontWeight: index === 0 || index === 5  ? '500' : '400',
                                    }} />
                            )
                        })
                    }
                </View>
            </View>
        </>
    );
}

export default MoneyOut;