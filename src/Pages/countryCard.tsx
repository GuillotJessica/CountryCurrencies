import React from "react";
import {  View, Text , StyleSheet  } from "react-native";
import _ from "lodash/fp";
import { CurrenciesList, Currency, FuseSearchResult } from "..";
import CurrencyList from "./countryCardList";


type CountryCard ={
  item: FuseSearchResult,
  inputDevise: number,
  currenciesList: CurrenciesList
}
const CountryCard = ({item:{item:{name, currencies, capital}}, inputDevise, currenciesList}: CountryCard)=> {
  const change = inputDevise * currenciesList.rates[currencies[0].code] * currenciesList.rates["EUR"]
  const roundChange = ()=> Math.round(change)
  return (
  <View style={{padding:20,marginHorizontal:20, borderColor:'grey', shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5, marginBottom:10}}>

    <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
      <Text style={{color: 'rgb(128, 0, 128)', fontSize:18}} key={name}>{name}</Text>
      {inputDevise > 0 && <Text style={{color: '#008040', fontSize:18}} key={'to'+ currencies[0].symbol}>{""  + change.toFixed(2) + currencies[0].symbol}</Text>}
    </View>
    <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
      <Text style={{color: 'rgb(128, 0, 128)'}} key={'capitalTitle'+name}>Capital</Text>
      <Text key={capital+name}>{capital}</Text>
    </View>
     <Text  style={{color: 'rgb(128, 0, 128)'}} key={'currencies'+name}>Currencies</Text>
    <CurrencyList currencies={currencies}/>
  </View>
)}
export default CountryCard