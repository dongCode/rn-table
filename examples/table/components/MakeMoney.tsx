import React from "react";
import { View } from "react-native";
import { HEIGHT } from "./constants";
import { Cell } from "./Cell";
import { styles } from "./styles";
import { TableRow } from "./TableRow";

function MoneyOut(props) {

    const moneyOut = [1000, 1111, 1111, 111, 11]
    const moneyOutPercent = [11, 11, 1, 11]

    return (
        <>
            <View style={[styles.content, {
                marginTop: 32,
                borderColor: 'rgba(229, 230, 234, 1)',
                borderTopWidth: 1,
                height: HEIGHT * 5
            }]}>
                <View style={{
                    width: 200,
                    flexDirection: 'row'
                }}>
                    <TableRow style={{
                        flex: 1,
                    }}>
                        <Cell data={'毛利'} textStyle={{
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
                                <Cell data={'销售毛利'} style={{
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderColor: 'rgba(229, 230, 234, 1)',
                                    height: HEIGHT * 2,
                                    flex: 1,
                                }} textStyle={{

                                    marginLeft: 10,
                                    fontWeight: '500',
                                }} />
                                <View style={{
                                    flex: 1
                                }}>

                                    <Cell data={'营业收入-销售成本'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,
                                    }} textStyle={{


                                    }} />
                                    <Cell data={'毛利率'} style={{
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
                                <Cell data={'经营毛利'} style={{
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderColor: 'rgba(229, 230, 234, 1)',
                                    height: HEIGHT * 2,
                                    flex: 1,
                                }} textStyle={{
                                    marginLeft: 10,
                                    fontWeight: '500',
                                }} />
                                <View style={{
                                    flex: 1
                                }}>

                                    <Cell data={'收入-成本-支出'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,
                                    }} />
                                    <Cell data={'毛利率'} style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,

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
                                        borderBottomWidth: index === moneyOut.length - 1 ? 0 : 1,
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
                                        borderBottomWidth: index === moneyOutPercent.length - 1 ? 0 : 1,
                                    }}
                                    textStyle={{
                                        marginLeft: 10,
                                        textAlign: 'center',
                                        fontWeight: index === 0 || index === 5 ? '500' : '400',
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