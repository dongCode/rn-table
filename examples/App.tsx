import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { styles } from './table/components/styles';
import { Cell } from './table/components/Cell';
import { TableRow } from './table/components/TableRow';
import MoneyIn from './table/components/MoneyIn';
import { HEIGHT } from './table/components/constants';
import MoneyOut from './table/components/MoneyOut';
import Sale from './table/components/Sale';
import MakeMoney from './table/components/MakeMoney';
import Operation from './table/components/Operation';


const moneyOut = [1000, 1111, 1111, 111, 11, 1, 111, 1, 100, 11]
const moneyOutPercent = [11, 11, 1, 11, 1, 1, 1, 10, 22]

const ExampleFive = () => {

  return (
    <ScrollView>
      <View style={{
        flex: 1
      }}>
        <StatusBar />
        <MoneyIn />
        <MoneyOut />
        <Sale />
        <MakeMoney />
        <Operation />
      </View>
    </ScrollView>

  );
};

export default ExampleFive;



