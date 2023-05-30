import React from "react";
import { View } from "react-native";
import { HEIGHT } from "./constants";
import { Cell } from "./Cell";
import { styles } from "./styles";
import { TableRow } from "./TableRow";

/* 收入 */
function MoneyIn(props) {
    const moneyIn = [10010, 1111, 1111, 111, 11, 1, 111, 1, 100]
    const moneyInPercent = [11, 11, 1, 11, 1, 1, 1, 10]
    return (
        <View>
            <View style={styles.header}>

                <TableRow style={{
                    width: 200,
                }}>
                    <Cell data={'科目'} textStyle={{
                        marginLeft: 14,
                        fontWeight: '500',
                    }} />
                </TableRow>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: '100%',
                }}>
                    <TableRow style={{
                        flex: 1,
                    }}>
                        <Cell data={'金额'} textStyle={{
                            textAlign: 'right',
                            marginRight: 10,
                            fontWeight: '500',
                        }}>金额</Cell>
                    </TableRow>

                    <TableRow style={{
                        flex: 1,
                    }}>
                        <Cell data={'占比'} textStyle={{
                            textAlign: 'right',
                            marginRight: 10,
                            fontWeight: '500',
                        }} />
                    </TableRow>

                </View>
            </View>

            <View style={[styles.content, {
                height: HEIGHT * 9
            }]}>
                <View style={{
                    width: 200,
                    flexDirection: 'row'
                }}>
                    <TableRow style={{
                        flex: 1,
                    }}>
                        <Cell data={'收入'} textStyle={{
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
                            flexDirection: 'row',
                        }}>
                            <Cell data={'营业收入'} style={{
                                borderBottomWidth: 1,
                                borderRightWidth: 1,
                                borderColor: 'rgba(229, 230, 234, 1)',
                                height: 144,
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
                                <Cell data={'现金'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,

                                }} textStyle={{

                                    marginLeft: 10,


                                }} />
                                <Cell data={'支付宝'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,

                                }} textStyle={{

                                    marginLeft: 10,


                                }} />
                                <Cell data={'微信'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,

                                }} textStyle={{

                                    marginLeft: 10,


                                }} />
                            </View>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Cell data={'营业外收'} style={{
                                borderRightWidth: 1,
                                borderColor: 'rgba(229, 230, 234, 1)',
                                height: 144,
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

                                <Cell data={'陈列费'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,
                                }} textStyle={{
                                    marginLeft: 10,
                                }} />

                                <Cell data={'管理奖金'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,
                                }} textStyle={{
                                    marginLeft: 10,
                                }} />

                                <Cell data={'废纸板'} textStyle={{
                                    marginLeft: 10,
                                }} />

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
                        moneyIn.map((item, index) => {
                            return (
                                <Cell key={index} data={item.toFixed(2)}
                                    style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: index === moneyIn.length - 1 ? 0 : 1,
                                        flex: 1
                                    }}
                                    textStyle={{
                                        marginLeft: 10,
                                        textAlign: 'center',
                                        fontWeight: index === 0 || index === 1 || index === 5 ? '500' : '400',
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
                        moneyInPercent.map((item, index) => {
                            return (
                                <Cell key={index} data={item.toFixed(2) + '%'}
                                    style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: index === moneyInPercent.length - 1 ? 0 : 1,
                                        flex: 1

                                    }}
                                    textStyle={{
                                        marginLeft: 10,
                                        textAlign: 'center',
                                        fontWeight: index === 0 || index === 4 ? '500' : '400',
                                    }} />
                            )
                        })
                    }
                </View>

            </View >
        </View >
    );
}

export default MoneyIn;