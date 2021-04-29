import React, { useEffect, useState } from "react";
import {  StyleSheet, View,  FlatList, Text   } from "react-native";
import _ from "lodash/fp";
import Fuse from "fuse.js";
import CCInput from './Components/ccinput'
import CountryCard from "./Pages/countryCard";
import Footer from './Components/footer'
import Header from "./Components/header";
export type Currency = {code: string, name: string, symbol: string}
export type Country = {
  capital: string
  currencies: Currency[]
  name: string
  population: number
}
export type CurrenciesRates = {
  [code : string]:number
 
}
export type CurrenciesList ={
  "success": boolean,
  "timestamp": number,
  "base": string,
  "date": string,
  "rates": CurrenciesRates
}    

export type FuseSearchResult ={
    "item": Country,
    "refIndex": number,
}

const options = {
  includeScore: false,
  shouldSort: true,
  keys: [
    "name",
  ]
};

export default () =>{
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [currenciesList, setCurrenciesList] = useState<CurrenciesList>([]);
  const [inputDevise, setInputDevise] = useState<number>(0);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;population')
      .then((response) => response.json())
      .then((json:Country[]) => setCountries(json))
      .catch((error) => console.error(error))
    fetch('http://data.fixer.io/api/latest?access_key=292dbfb14d51068c9fc3de85f84dbba4')
      .then((response) => response.json())
      .then((json) => setCurrenciesList(json))
      .catch((error) => console.error(error)) 
  }, [])

  const fuse = new Fuse(countries, options);

 
  const onChangeAmountInput = (text: number) => {
    const numericRegex = /^\d*\.?\d*$/
    numericRegex.test(text.toString()) && setInputDevise( text )
  }
  const renderItem = ({item}) => <CountryCard item={item} inputDevise={inputDevise} currenciesList={currenciesList} />
    return (
      <>
         <Header />
        <View style={styles.container}>
          <CCInput
            placeholder="Search country"
            value={searchTerm}
            onChangeAmount={setSearchTerm}
          />
          <CCInput keyboardType='decimal-pad'
            placeholder='Change EUR'
            value={inputDevise}
            onChangeAmount={onChangeAmountInput}/>
          
          <FlatList data={_.slice(0, 10)(fuse.search(searchTerm))} renderItem={renderItem} keyExtractor={item => item.name} />
        </View>
        <Footer /> 
     </>
  );
}
const styles= StyleSheet.create({
  container: {flex:10,width:'100%', margin: 5, }
})