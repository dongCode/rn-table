import React from "react";
import { View } from "react-native";
import { HEIGHT } from "./constants";
import { Cell } from "./Cell";
import { styles } from "./styles";
import { TableRow } from "./TableRow";

/* 销售成本 */
function MoneyOut(props) {

    const price = [1000, 1111, 1111, 111, 11, 1, 111]
    const percent = [11, 11, 1, 11, 1, 1, 1]

    return (
        <>
            <View style={[styles.content, {
                marginTop: 32,
                borderColor: 'rgba(229, 230, 234, 1)',
                borderTopWidth: 1,
                height: HEIGHT * 8
            }]}>
                <View style={{
                    width: 200,
                    flexDirection: 'row'
                }}>
                    <TableRow style={{
                        flex: 1,
                    }}>
                        <Cell data={'销售成本'} textStyle={{
                            fontWeight: '500',
                            paddingLeft: 10,
                            paddingRight: 10
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
                            height: HEIGHT * 3,

                        }}>
                            <Cell data={'总部配送'} style={{
                                borderBottomWidth: 1,
                                borderRightWidth: 1,
                                borderColor: 'rgba(229, 230, 234, 1)',
                                height: HEIGHT * 3,
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
                                <Cell data={'入库'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,

                                }} textStyle={{

                                    marginLeft: 10,


                                }} />
                                <Cell data={'出库'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,

                                }} textStyle={{

                                    marginLeft: 10,


                                }} />
                            </View>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            height: HEIGHT * 3,
                        }}>
                            <Cell data={'地区直供'} style={{
                                borderBottomWidth: 1,
                                borderRightWidth: 1,
                                borderColor: 'rgba(229, 230, 234, 1)',
                                height: HEIGHT * 3,
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
                                <Cell data={'收货'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,

                                }} textStyle={{

                                    marginLeft: 10,


                                }} />
                                <Cell data={'收货'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,

                                }} textStyle={{

                                    marginLeft: 10,


                                }} />
                            </View>

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            height: HEIGHT * 1,
                        }}>
                            <Cell data={'库区成本调整'} style={{
                                height: HEIGHT * 1,
                                flex: 1,
                                borderColor: 'rgba(229, 230, 234, 1)',
                                borderRightWidth: 1,
                            }} textStyle={{
                                marginLeft: 10,
                                fontWeight: '500',
                            }} />
                            <View style={{
                                flex: 1
                            }}>
                                <Cell data={'期初-期末'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,

                                }} textStyle={{
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
                        price.map((item, index) => {
                            return (
                                <Cell key={index} data={item.toFixed(2)}
                                    style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: 1,
                                    }}
                                    textStyle={{
                                        marginLeft: 10,
                                        textAlign: 'center',
                                        fontWeight: index === 0 || index === 1 || index === 4 ? '500' : '400',
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
                        percent.map((item, index) => {
                            return (
                                <Cell key={index} data={item.toFixed(2) + '%'}
                                    style={{
                                        borderBottomColor: 'rgba(229, 230, 234, 1)',
                                        borderBottomWidth: index === percent.length - 1 ? 0 : 1,
                                    }}
                                    textStyle={{
                                        marginLeft: 10,
                                        textAlign: 'center',
                                        fontWeight: index === 0 || index === 3 ? '500' : '400',
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