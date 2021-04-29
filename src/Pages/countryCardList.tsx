import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import _ from "lodash/fp";
import { Currency } from ".."

type CurrencyList = {
    currencies:Currency[]
}
const CurrencyList = ({currencies}: CurrencyList) =>(
    <>
    {_.map((currency:Currency)=>(
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:10}}>
    <Text style={styles.fullSize}  key={name+currency.name}>{currency.name}</Text>
    <Text style={[styles.fullSize, styles.alignCenter]} key={name+currency.code}>{currency.code}</Text>
    <Text style={[styles.fullSize, styles.alignCenter] } key={name+currency.symbol}>{currency.symbol}</Text>
    </View>
))(currencies)}
</>
)
    
const styles = StyleSheet.create({
    fullSize:{flex:1},
    alignCenter:{textAlign:'center'}
})
  
export default CurrencyList