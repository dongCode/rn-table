import React from "react";
import { View } from "react-native";
import { HEIGHT } from "./constants";
import { Cell } from "./Cell";
import { styles } from "./styles";
import { TableRow } from "./TableRow";

function Operation(props) {

    const moneyOut = [1000, 1111, 1111, 111]
    const moneyOutPercent = [11, 11, 1, 11]

    return (
        <>
            <View style={[styles.content, {
                marginTop: 32,
                borderColor: 'rgba(229, 230, 234, 1)',
                borderTopWidth: 1,
                height: HEIGHT * 4,
                marginBottom: 32
            }]}>
                <View style={{
                    width: 200,
                    flexDirection: 'row'
                }}>
                    <TableRow style={{
                        flex: 1,
                    }}>
                        <Cell data={'经营分析'} textStyle={{
                            marginRight: 10,
                            marginLeft: 10,
                            fontWeight: '500',
                        }} />
                    </TableRow>

                    <TableRow style={{
                        flex: 3,
                    }}>


                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Cell data={'人效'} style={{
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

                                <Cell data={'日效'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,
                                }} textStyle={{

                                    marginLeft: 10,


                                }} />
                                <Cell data={'月效'} style={{
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
                            <Cell data={'评效'} style={{
                                borderBottomWidth: 1,
                                borderRightWidth: 1,
                                borderColor: 'rgba(229, 230, 234, 1)',
                                flex: 1,
                                height: HEIGHT * 1,

                            }} textStyle={{
                                marginLeft: 10,
                                fontWeight: '500',
                            }} />
                            <View style={{
                                flex: 1
                            }}>

                                <Cell data={'营业坪效'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,
                                }}
                                    textStyle={{
                                        marginLeft: 10,
                                    }}
                                />


                            </View>

                        </View>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Cell data={'租售比'} style={{
                                borderBottomWidth: 1,
                                borderRightWidth: 1,
                                borderColor: 'rgba(229, 230, 234, 1)',
                                flex: 1,
                            }} textStyle={{
                                marginLeft: 10,
                                fontWeight: '500',
                            }} />
                            <View style={{
                                flex: 1
                            }}>

                                <Cell data={'租售比'} style={{
                                    borderBottomColor: 'rgba(229, 230, 234, 1)',
                                    borderBottomWidth: 1,
                                }}
                                    textStyle={{
                                        marginLeft: 10,
                                    }}
                                />


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

export default Operation;